const express = require('express');
const {syncTransactions} = require('../controllers/transactionsController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/', authMiddleware, syncTransactions);

module.exports = router;