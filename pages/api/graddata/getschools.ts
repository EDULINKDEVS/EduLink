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

type School = {
  id: number;
  name: string;
  lev: "lev" | "voc" | "tech" | "universities";
};

interface SchoolRow extends RowDataPacket, School {}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<School[] | { message: string; error?: string }>
) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const { city_id, lev } = req.query;
    console.log(city_id);
    console.log(lev);
    if (!city_id || typeof city_id !== 'string') {
      return res.status(400).json({ message: 'City ID parameter is required and must be a string' });
    }

    if (!lev || (lev !== 'voc' && lev !== 'high' && lev !== 'tech' && lev !== 'universities')) {
      return res.status(400).json({ message: 'Wrong lev parameter' });
    }

    const [rows] = await connection.execute<SchoolRow[]>(
      `SELECT id, name, lev
      FROM schools
      WHERE city = ?
      AND lev = ?`,
      [city_id, lev]
    );

    await connection.end();

    res.status(200).json(rows);

  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: (error as Error).message });
  }
};

export default handler;
