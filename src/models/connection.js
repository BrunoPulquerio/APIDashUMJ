// const mariadb = require('mariadb');
const mysql2 = require('mysql2/promise')
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME, 
  port: process.env.DB_PORT,
  connectionLimit: 5,
});

module.exports = pool;

// console.log(process.env.DB_PORT);