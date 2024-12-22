const {syncTransactions} = require('../services/binanceService');

exports.syncTransactions = async(req, res, next) => {
    try{
        const transactions = await syncTransactions();
        res.status(200).json({
            success: true,
            data: transactions
        });
    } catch(error){
        next(error);
    }
};