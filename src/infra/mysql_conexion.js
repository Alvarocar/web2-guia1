const mysql = require('mysql')

//Declarar la configuración de la conexión
module.exports.conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  port: 3306,
  database: "web"
});

