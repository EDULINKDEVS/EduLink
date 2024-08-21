import { createConnection } from "net";
import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from 'dotenv';
import mysql, { ResultSetHeader } from 'mysql2/promise';
import { hashPassword } from "@/lib/helpers";
import { checkRegisterData } from "@/lib/checkRegisterData";
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
    const { email, phone, f_name, l_name, pass, status, dateOfBirth, pupilPack, studentPack} = req.body;
    




    if (!checkRegisterData(email, phone, f_name, l_name, pass, status, dateOfBirth, pupilPack, studentPack)) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const connection = await mysql.createConnection(dbConfig);

    try {
      await connection.beginTransaction();
      const [user] = await connection.execute(`
        INSERT INTO users (label, email, pass, last_login_date, register_date, is_active)
        VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, ?);
      `, ['employee', email, hashPassword(pass), 0]);
      
      const [empData] = await connection.execute(`
        INSERT INTO employies_data (f_name, l_name, phone, birth, status, user_id) 
        VALUES
        (?, ?, ?, ?, ?, ?); 
        `, [f_name, l_name, phone, dateOfBirth, status, user.id]);
      if()



   
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
