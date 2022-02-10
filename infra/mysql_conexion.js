const mysql = require('mysql')

module.exports.conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  port: 3306,
  database: "web"
});

