const {getOrders} = require('../services/binanceService');

exports.getOrders = async(req, res, next) => {
    try {
        const orders = await getOrders();
        res.status(200).json({ 
            success: true, 
            data: orders 
        });
    } catch (error) {
        next(error);
    }
};