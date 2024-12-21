const path = require('path');
require('dotenv').config({
    path: path.resolve(__dirname, 'binance-portfolio-tracker\\backend\\src\\.env')});

module.exports = {
    port: process.env.PORT,
    binanceApiKey: process.env.BINANCE_API_KEY,
    binanceSecretKey: process.env.BINANCE_SECRET_KEY,
    appApiKey: process.env.APP_API_KEY,
};

//console.log(process.env.PORT);