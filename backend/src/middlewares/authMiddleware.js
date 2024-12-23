module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if(apiKey === process.env.BINANCE_API_KEY){
        next();
    }
    else{
        res.status(403).json({ success: false, message: 'Unauthorized' });
    }
};
