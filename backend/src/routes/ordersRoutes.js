const express = require('express');
const {getOrders} = require('../controllers/ordersController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/', authMiddleware, getOrders);

module.exports = router;