import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from 'dotenv';
import mysql, { RowDataPacket } from 'mysql2/promise';

interface Data extends RowDataPacket {
    label: "employee" | "employer";
    email: string;
    is_active: boolean;
    first_loggin: boolean;
    id:string;
}

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Only GET requests are allowed' });
    }

    const { userID } = req.query;

    if (!userID) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute<Data[]>(
            `SELECT id, label, email, is_active, first_loggin FROM users WHERE id = ?`, 
            [userID]
        );
        
        if (rows.length === 0) {
            return res.status(404).json({ message: 'There is no user with the given ID' });
        }

        const row = rows[0];

        res.status(200).json({ data: row });
    } catch (error) {
        console.error('Error during database query:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        if (connection) await connection.end();
    }
}

export default handler;
