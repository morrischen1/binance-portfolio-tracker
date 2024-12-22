const express = require('express');
const {getPerformance} = require('../controllers/performanceController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/', authMiddleware, getPerformance);

module.exports = router;