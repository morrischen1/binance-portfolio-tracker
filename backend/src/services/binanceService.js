const axios = require('axios');
const config = require('../config/config');

const BINANCE_BASE_URL = 'https://api.binance.com';

exports.getBalances = async () => {
    const response = await axios.get(`${BINANCE_BASE_URL}/api/v3/account`, {
        headers: {
            'X-MBX-APIKEY': config.BINANCE_API_KEY,
        },
    });
    return response.data.balances;
};


exports.syncTransactions = async () => {
    const response = await axios.get(`${BINANCE_BASE_URL}/api/v3/myTrades`, { // /api/v3/historicalTrades
        headers: {
            'X-MBX-APIKEY': config.BINANCE_API_KEY,
        },
    });
    return response.data;
};

exports.getOrders = async () => {
    const response = await axios.get(`${BINANCE_BASE_URL}/api/v3/openOrders`, {
        headers: {
            'X-MBX-APIKEY': config.BINANCE_API_KEY,
        },
    });
    return response.data;
};
