const mysql = require('mysql2/promise');
require('dotenv').config();

async function testConnection() {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };

  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to the database.');
    
    const [rows] = await connection.execute('SELECT 1 + 1 AS solution');
    console.log('Test query result:', rows);
    
    await connection.end();
    console.log('Connection closed.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

testConnection();
