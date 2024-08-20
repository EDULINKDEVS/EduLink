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

type university = {
  id: number;
  name: string;
};

interface universityRow extends RowDataPacket, university {}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<university[] | { message: string; error?: string }>
) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const { city_id} = req.query;

    if (!city_id || typeof city_id !== 'string') {
      return res.status(400).json({ message: 'City ID parameter is required and must be a string' });
    }


    const [rows] = await connection.execute<universityRow[]>(
      `SELECT id, name, lev
      FROM schools
      WHERE city = ?`,
      [city_id]
    );

    await connection.end();

    res.status(200).json(rows);

  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: (error as Error).message });
  }
};

export default handler;
