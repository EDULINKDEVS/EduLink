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
    assignment_id: string;
    id: string;
    name: string;
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

        const [traits] = await connection.execute<Data[]>(
            `SELECT uta.id as assignment_id, traits.id as id, traits.name as name  
             FROM traits 
             JOIN user_traits_assignment AS uta ON traits.id = uta.traits_id 
             WHERE uta.user_id = ?`, 
            [userID]
        );

        const [hard_skills] = await connection.execute<Data[]>(
            `SELECT uha.id as assignment_id, hard_skills.id as id, hard_skills.name as name  
             FROM hard_skills 
             JOIN user_hard_skills_assignment AS uha ON hard_skills.id = uha.hard_skill_id 
             WHERE uha.user_id = ?`, 
            [userID]
        );

        res.status(200).json({ traits: traits, hardSkills: hard_skills });

    } catch (error) {
        console.error('Error during database query:', error);
        res.status(500).json({ message: 'Internal Server Error' });

    } finally {
        if (connection) await connection.end();
    }
};

export default handler;
