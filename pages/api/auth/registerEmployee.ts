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

const validateData = (data: any) => {
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
  } = data;

  if (!email || !phone || !f_name || !l_name || !pass || !status || !dateOfBirth || !city) {
    return 'Missing required fields';
  }

  if (!Array.isArray(traits) || !Array.isArray(hard_skills)) {
    return 'Traits and hard_skills should be arrays';
  }

  if (status === 'pupil' && !pupilPack) {
    return 'Missing pupilPack for pupil status';
  }

  if (status === 'student' && (!studentPack || !Array.isArray(studentPack))) {
    return 'Missing or incorrect studentPack for student status';
  }

  return null;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>,
) => {
  if (req.method === 'POST') {
    console.log('Received POST request');
    const validationError = validateData(req.body);

    if (validationError) {
      console.error('Validation Error:', validationError);
      return res.status(400).json({ message: validationError });
    }

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

    console.log('Request body parsed:', req.body);

    const connection = await mysql.createConnection(dbConfig);
    console.log('Database connection established');

    try {
      await connection.beginTransaction();
      console.log('Transaction started');

      const [user] = await connection.execute(`
        INSERT INTO users (label, email, pass, last_login_date, register_date, is_active)
        VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, ?);
      `, ['employee', email, hashPassword(pass), 0]);
      console.log('User inserted into users table');

      const userId = (user as ResultSetHeader).insertId;
      console.log('User ID:', userId);

      await connection.execute(`
        INSERT INTO employies_data (f_name, l_name, phone, birth, status, user_id, city) 
        VALUES (?, ?, ?, ?, ?, ?, ?); 
      `, [f_name, l_name, phone, dateOfBirth, status, userId, city]);
      console.log('User data inserted into employies_data table');

      if (status === 'pupil') {
        await connection.execute(`
          INSERT INTO userGraduationAssigmentSchool (school_name, lev, city, profile_name, user_id, stat)
          VALUES (?, ?, ?, ?, ?, ?);
        `, [pupilPack.schoolName, pupilPack.schoolLevel, pupilPack.schoolCity, pupilPack.schoolProfile, userId, pupilPack.degreeLabel]);
        console.log('Pupil data inserted into userGraduationAssigmentSchool table');
      } else {
        for (const element of studentPack) {
          await connection.execute(`
            INSERT INTO userUniversityAssignment (schoolName, profileName, city, stat, label, user_id)
            VALUES (?, ?, ?, ?, ?, ?);
          `, [element.schoolName, element.schoolProfile, element.schoolCity, element.schoolLabel, element.schoolDegree, userId]);
          console.log('Student data inserted into userUniversityAssignment table');
        }
      }

      for (const trait of traits) {
        await connection.execute(`
          INSERT INTO user_traits_assignment (user_id, traits_id) VALUES (?, ?);
        `, [userId, trait]);
        console.log('Trait data inserted into user_traits_assignment table');
      }

      for (const skill of hard_skills) {
        await connection.execute(`
          INSERT INTO user_traits_assignment (user_id, traits_id) VALUES (?, ?);
        `, [userId, skill]);
        console.log('Hard skill data inserted into user_traits_assignment table');
      }

      await connection.commit();
      console.log('Transaction committed');
      res.status(200).json({ message: "User registered successfully." });
      console.log('Response sent');

    } catch (error) {
      await connection.rollback();
      console.error("Database operation failed:", error);
      res.status(500).json({ message: "Database operation failed." });
      console.log('Error response sent');
    } finally {
      await connection.end();
      console.log('Database connection closed');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    console.log('Invalid request method');
  }
};

export default handler;
