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

interface Data extends RowDataPacket {
    id: string;
    schoolName: string;
    lev: "voc" | "high" | "tech";
    city: string;
    stat: "DURING" | "GRADUATE";
    profileName: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Only GET requests are allowed' });
    }

    const { userID } = req.query;

    if (!userID) {
        return res.status(400).json({ message: "userID is required" });
    }

    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        
        const [rows] = await connection.execute<Data[]>(
            `SELECT id, schoolName, lev, city, stat, profileName FROM userGraduationAssigmentSchool WHERE user_id = ?;`, 
            [userID]
        );
        
        if (rows.length === 0) {
            return res.status(404).json({ message: 'There is no school assignment with the provided user_id' });
        }

        res.status(200).json({ schools: rows });

    } catch (error) {
        console.error('Error during database query:', error);
        res.status(500).json({ message: 'Internal Server Error' });

    } finally {
        if (connection) await connection.end();
    }
};

export default handler;
