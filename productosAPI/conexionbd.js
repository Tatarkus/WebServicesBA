var mariadb = require('mariadb');
require('dotenv').config();

var pool = mariadb.createPool({
  host: "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "avaras08",
  database: process.env.DB_NAME || "anwo",
  connectionLimit: 5
});


module.exports = pool;
