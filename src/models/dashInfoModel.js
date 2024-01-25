const db = require('./connection');

async function getAllInfoModel() {
  let conn;

  try {
    conn = await db.getConnection();

    if (!conn) {
      throw new Error('Connection not established');
    }

    const [rows, fields] = await conn.query('SELECT * FROM *');
    return rows;
  } catch (err) {
    console.error('Error querying the database:', err);
    throw err;
  } finally {
    if (conn) conn.release();
  }
}

module.exports = { getAllInfoModel };
