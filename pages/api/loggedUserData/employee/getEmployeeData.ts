import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from 'dotenv';
import mysql, { RowDataPacket } from 'mysql2/promise';

dotenv.config();

interface Data extends RowDataPacket {
    id:string;
    f_name: string;
    l_name: string;
    phone: string;
    birth: string;
    status: "student" | "pupil";
    city: string;
}

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Only GET requests are allowed' });
    }

    const { userID } = req.query;

    if (!userID) {
        return res.status(400).json({ message: 'userID is required' });
    }

    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute<Data[]>(
            `SELECT id, f_name, l_name, phone, birth, status, city FROM users WHERE user_id = ?`, 
            [userID]
        );

        if (rows.length === 0) {
            res.status(404).json({ message: 'There is no user with provided ID' });
        } else {
            res.status(200).json({ data: rows[0] });
        }
    } catch (error) {
        console.error('Error during database query:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        if (connection) await connection.end();
    }
};

export default handler;
