const { conn } = require('../infra/mysql_conexion')
const util = require('util')

const query = util.promisify(conn.query).bind(conn);

module.exports.getAll = async () => {
  try {
    const result = await query('SELECT * FROM user;')
    return result
  } catch {
    conn.end()
  }
}