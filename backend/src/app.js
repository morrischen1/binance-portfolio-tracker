const express = require('express');
const balancesRoutes = require('./routes/balancesRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(express.json());

app.use('/balances', balancesRoutes);

app.use(errorHandler);

module.exports = app;
