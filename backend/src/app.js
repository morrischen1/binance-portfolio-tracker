const express = require('express');
const errorHandler = require('./utils/errorHandler');

const balancesRoutes = require('./routes/balancesRoutes');
const transactionsRoutes = require('./routes/transactionsRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const ordersRoutes = require('./routes/ordersRoutes');

const app = express();

app.use(express.json());

app.use('/balances', balancesRoutes);
app.use('/transactions', transactionsRoutes);
app.use('/performance', performanceRoutes);
app.use('/orders', ordersRoutes);

app.use(errorHandler);

module.exports = app;
