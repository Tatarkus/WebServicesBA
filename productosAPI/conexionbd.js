var mariadb = require('mariadb');
require('dotenv').config();

var pool = mariadb.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5
});


module.exports = pool;
