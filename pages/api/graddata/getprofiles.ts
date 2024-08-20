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

type Profile = {
  id: number | null;
  name: string | null;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Profile[] | { message: string; error?: string }>
) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const { school } = req.query;

    const schoolId = parseInt(school as string, 10);

    if (isNaN(schoolId)) {
      return res.status(400).json({ message: 'School ID must be a valid number' });
    }

    const [rows] = await connection.execute<RowDataPacket[]>(
      `SELECT p.id, p.name
       FROM profiles p
       INNER JOIN school_profile_assignment psa ON p.id = psa.profile_id
       WHERE psa.school_id = ?`,
      [schoolId]
    );

    await connection.end();

    const profiles: Profile[] = rows as Profile[];

    res.status(200).json(profiles);

  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: (error as Error).message });
  }
};

export default handler;
