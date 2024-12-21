const express = require('express');
const {getBalances} = require('../controllers/balancesController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/', authMiddleware, getBalances);

module.exports = router;