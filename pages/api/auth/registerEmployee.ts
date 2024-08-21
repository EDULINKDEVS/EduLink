import { createConnection } from "net";
import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from 'dotenv';
import mysql, { ResultSetHeader } from 'mysql2/promise';
import { hashPassword } from "@/lib/helpers";
import { checkRegisterData, pupilDataPackage, studentDataPackage } from "@/lib/checkRegisterData";
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>,
) => {
  if (req.method === 'POST') {
    const {
      email,
      phone,
      f_name,
      l_name,
      pass,
      status,
      dateOfBirth,
      pupilPack,
      studentPack,
      traits,
      hard_skills,
      city
    } = req.body;

    const connection = await mysql.createConnection(dbConfig);

    try {
      await connection.beginTransaction();

      const [user] = await connection.execute(`
        INSERT INTO users (label, email, pass, last_login_date, register_date, is_active)
        VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, ?);
      `, ['employee', email, hashPassword(pass), 0]);

      const userId = (user as ResultSetHeader).insertId;

      await connection.execute(`
        INSERT INTO employies_data (f_name, l_name, phone, birth, status, user_id, city) 
        VALUES (?, ?, ?, ?, ?, ?); 
      `, [f_name, l_name, phone, dateOfBirth, status, userId, city]);

      if (status === 'pupil') {
        await connection.execute(`
          INSERT INTO userGraduationAssigmentSchool (school_name, lev, city, profile_name, user_id, stat)
          VALUES (?, ?, ?, ?, ?, ?);
        `, [pupilPack.schoolName, pupilPack.schoolLevel, pupilPack.schoolCity, pupilPack.schoolProfile, userId, pupilPack.degreeLabel]);
      } else {
        for (const element of studentPack) {
          await connection.execute(`
            INSERT INTO userUniversityAssignment (schoolName, profileName, city, stat, label, user_id)
            VALUES (?, ?, ?, ?, ?, ?);
          `, [element.schoolName, element.schoolProfile, element.schoolCity, element.schoolLabel, element.schoolDegree, userId]);
        }
      }

      for (const trait of traits) {
        await connection.execute(`
          INSERT INTO user_traits_assignment (user_id, traits_id) VALUES (?, ?);
        `, [userId, trait]);
      }

      for (const skill of hard_skills) {
        await connection.execute(`
          INSERT INTO user_traits_assignment (user_id, traits_id) VALUES (?, ?);
        `, [userId, skill]);
      }

      await connection.commit();
      res.status(200).json({ message: "User registered successfully." });

    } catch (error) {
      await connection.rollback();
      console.error("Database operation failed:", error);
      res.status(500).json({ message: "Database operation failed." });
    } finally {
      await connection.end();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
