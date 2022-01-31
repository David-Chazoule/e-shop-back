require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
  decimalNumbers: true,
});

module.exports = db.promise();
