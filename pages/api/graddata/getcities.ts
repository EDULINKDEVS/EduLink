import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | { cities: Array<{ id: number, name: string }> }>,
) => {
  try {
    console.log('Attempting to connect to the database...');
    
    if (!dbConfig.host || !dbConfig.user || !dbConfig.password || !dbConfig.database) {
      throw new Error('Database configuration is incomplete. Please check your .env file.');
    }
    
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to the database.');
    
    console.log('Executing query to fetch cities...');
    const [rows, fields] = await connection.execute<any[]>('SELECT id, name FROM cities');
    
    console.log(`Query executed successfully. Fetched ${rows.length} cities.`);
    
    await connection.end();
    console.log('Connection to the database closed.');
    
    res.status(200).json({ cities: rows });
    console.log('Response sent successfully.');
    
  } catch (error: any) {
    console.error('Error fetching cities:', error.message);

    if (error.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('Access denied to the database. Please check your credentials.');
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.error('Database does not exist. Please check the database name.');
    } else if (error.sqlMessage) {
      console.error('SQL error:', error.sqlMessage);
    } else {
      console.error('An unknown error occurred:', error);
    }

    res.status(500).json({ message: 'Error fetching cities' });
  }
};

export default handler;
