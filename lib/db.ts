import mysql from 'mysql2/promise';

const createConnection = async () => {
  return mysql.createConnection({
    host: '34.41.107.159',
    user: 'lewissimo12',
    password: 'Marta6021023!',
    database: 'EduLink'
  });
};

export default createConnection;
