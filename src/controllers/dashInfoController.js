const dashInfoModel = require('../models/dashInfoModel');

async function getAllInfoController(req, res) {
  try {
    const dados = await dashInfoModel.getAllInfoModel();
    res.json(dados);
  } catch (err) {
    console.error('Erro no controlador:', err);
    res.status(500).send('Erro interno do servidor');
  }
}

module.exports = { getAllInfoController };
