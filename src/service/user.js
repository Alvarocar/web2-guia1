const { conn } = require('../infra/mysql_conexion')
const util = require('util');
const { throws } = require('assert');

const query = util.promisify(conn.query).bind(conn);
const on = util.promisify(conn.on).bind(conn);

module.exports.getAll = async () => {
  try {
    const result = await query('SELECT * FROM user;')
    if (!result) { return [] }
    return result
  } catch(err) {
    conn.end()
    throw Error("Can't Communicate with the database")
  }
}