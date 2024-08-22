import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from 'dotenv';
import mysql, { RowDataPacket } from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import { verifyPassword } from "@/lib/helpers";

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

interface UserRow extends RowDataPacket {
    id: number;
    pass: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    let connection;

    try {
        connection = await mysql.createConnection(dbConfig);

        const [rows] = await connection.execute<UserRow[]>(
            'SELECT id, pass, is_active FROM users WHERE email = ?',
            [email]
        );
        

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = rows[0];
        const isPasswordValid = await verifyPassword(password, user.pass);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );

        res.status(200).json({ userId: user.id, token });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });

    } finally {
        if (connection) await connection.end();
    }
};

export default handler;
