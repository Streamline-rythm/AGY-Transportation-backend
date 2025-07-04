const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,       // e.g., 'your-cloudsql-ip-or-hostname'
  user: process.env.DB_USER,       // your MySQL user
  password: process.env.DB_PASSWORD, // your MySQL password
  database: process.env.DB_NAME,   // your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;