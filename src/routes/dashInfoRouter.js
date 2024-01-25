const express = require('express');
const dashInfoController = require('../controllers/dashInfoController');

const router = express.Router();

router.get('/', dashInfoController.getAllInfoController);

module.exports = router;
