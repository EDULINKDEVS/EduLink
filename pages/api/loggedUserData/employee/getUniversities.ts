import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from 'dotenv';
import mysql, { RowDataPacket } from 'mysql2/promise';
import { hardSkills, traits } from "@/context/schoolsData/exampleSchoolsData";

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

interface data extends RowDataPacket {
    assignment_id: string;
    id: string;
    name: string;
}

const handler = async (res: NextApiResponse, req: NextApiRequest) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    const { userID } = req.body;

    if (!userID) {
        return res.status(400).json({ message: "userID is required" });
    }

    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        
        res.status(200).json({});

        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ message: 'Internal Server Error' });

        } finally {
            if (connection) await connection.end();
        }
}