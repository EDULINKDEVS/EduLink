import { createConnection } from "net";
import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from 'dotenv';
import mysql, { ResultSetHeader } from 'mysql2/promise';
import { hashPassword } from "@/lib/helpers";
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

enum Status {
  Pupil = "pupil",
  Student = "student"
}

enum DegreeEnum {
  BACHELOR = "BACHELOR",
  ENGINEER = "ENGINEER",
  MASTER = "MASTER",
  DOCTOR = "DOCTOR"
}

type Data = {
  message: string;
  user: {
    f_name: string;
    l_name: string;
    email: string;
    password: string;
    confirm_password: string;
    status: Status;
    school_name: null | string;
    school_level: "voc" | "high" | "tech" | null;

    school_city: string | null;
    school_profile: string | null;
    dateOfBirth: Date;
    schools: [{
      name: string;
      degreeStatus: "finished" | "inProgress";
      degreeLev: DegreeEnum;
      city: string;
      faculty: string;
    }] | null
  };
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>,
) => {
  if (req.method === 'POST') {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (
      !data.user
      || !data.user.f_name
      || !data.user.l_name
      || !data.user.email
      || !data.user.password
      || !data.user.confirm_password
      || !data.user.status
      || !data.user.dateOfBirth
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (
      (!data.user.school_name
        || !data.user.school_level
        || !data.user.school_city
        || !data.user.school_profile
      )
      && (
        !data.user.schools
        || !data.user.schools[0].name
        || !data.user.schools[0].city
        || !data.user.schools[0].faculty
        || !data.user.schools[0].degreeLev
      )
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (data.user.password !== data.user.confirm_password) {
      return res.status(400).json({ message: "Passwords have to be the same." });
    }

    const connection = await mysql.createConnection(dbConfig);

    try {
      await connection.beginTransaction();

      const [rows] = await connection.execute(
        'SELECT email FROM users WHERE email = ?',
        [data.user.email]
      );
      const result = rows as Array<{ email: string }>;
      if (result.length > 0) {
        return res.status(400).json({ message: "Email already exists in database" });
      }

      const hashedPassword = await hashPassword(data.user.password);

      const [resultUser] = await connection.execute<ResultSetHeader>(
        'INSERT INTO users (email, label, password) VALUES (?, ?, ?)',
        [data.user.email, data.user.status, hashedPassword]
      );

      if (resultUser.affectedRows !== 1) {
        throw new Error('Insert into users failed');
      }

      const userId = resultUser.insertId;

      const [resultUserData] = await connection.execute<ResultSetHeader>(

        'INSERT INTO userData (user_id, f_name, l_name, email, dateOfBirth,school, status, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [userId, data.user.f_name, data.user.l_name, data.user.email, data.user.dateOfBirth, data.user.school_name, data.user.label]
      );

      if (resultUserData.affectedRows !== 1) {
        throw new Error('Insert into userData failed');
      }

      if (data.user.schools && data.user.schools.length > 0) {  
        for (const school of data.user.schools) {
          const [resultSchool] = await connection.execute<ResultSetHeader>(
            'INSERT INTO schools (user_id, school_name, degreeStatus, degreeLev, city, faculty) VALUES (?, ?, ?, ?, ?, ?)',
            [userId, school.name, school.degreeStatus, school.degreeLev, school.city, school.faculty]
          );

          if (resultSchool.affectedRows !== 1) {
            throw new Error('Insert into schools failed');
          }
        }
      }

      await connection.commit();
      res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
      await connection.rollback();
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
