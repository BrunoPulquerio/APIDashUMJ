const db = require('./connection');

async function getAllInfoModel() {
  try {
    const conn = await db.getConnection();
    const rows = await conn.query('SELECT * FROM *');
    conn.release();
    return rows;
  } catch (err) {
    console.error('Erro na consulta ao banco de dados:', err);
    throw err;
  }
}

module.exports = { getAllInfoModel };