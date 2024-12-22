const {getBalances} = require('../services/binanceServices');

exports.getBalance = async(req, res, next) => {
    try{
        const balances = await getBalances();
        res.status(200).json({
            success: true,
            data: balances
        });
    } catch(error){
        next(error);
    }
}