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

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute<RowDataPacket[]>(
            `SELECT * FROM traits;`
        )
        await connection.end();

        const traits = rows;
        res.status(200).json(traits);
    } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: (error as Error).message });
  }
};

export default handler;
