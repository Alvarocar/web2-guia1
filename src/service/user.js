const { conn } = require('../infra/mysql_conexion')
const util = require('util');

const query = util.promisify(conn.query).bind(conn);

/**
 * Hace una consulta para retornar todos los registros
 * de la tabla usuario
 * @returns Promise<User[]>
 */
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