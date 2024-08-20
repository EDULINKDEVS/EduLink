import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from 'dotenv';
import mysql, { RowDataPacket } from 'mysql2/promise';

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

type SchoolProfile = {
  profile_id: number | null;
  profile_name: string | null;
};

type School = {
  school_id: number;
  school_name: string;
  lev: string;
  profiles: SchoolProfile[];
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<School[] | { message: string; error?: string }>
) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const { city } = req.query;

    if (!city || typeof city !== 'string') {
      return res.status(400).json({ message: 'City parameter is required and must be a string' });
    }

    const [rows] = await connection.execute<RowDataPacket[]>(
    `  SELECT 
      p.name as profile_name,
      p.id as profile_id,
      s.id as school_id,
      s.name as schoolName,
      s.lev as schoolLev
      FROM 
          school_profile_assignment pga
      JOIN
          profiles p ON p.id = pga.profile_id
      JOIN
          schools s ON s.id = pga.school_id
      JOIN
          cities c ON c.id = s.city
      WHERE
      c.id = ?`,
      [city]
    );

    await connection.end();

    const schools = rows.reduce<School[]>((acc, row) => {
      const school = acc.find(s => s.school_id === row.school_id);
      if (school) {
        if (row.profile_id && row.profile_name) {
          school.profiles.push({ profile_id: row.profile_id, profile_name: row.profile_name });
        }
      } else {
        acc.push({
          school_id: row.school_id,
          school_name: row.schoolName,
          lev: row.schoolLev,
          profiles: row.profile_id && row.profile_name ? [{ profile_id: row.profile_id, profile_name: row.profile_name }] : []
        });
      }
      return acc;
    }, []);
    console.log(schools); 
    res.status(200).json(schools);

  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: (error as Error).message });
  }
};

export default handler;
