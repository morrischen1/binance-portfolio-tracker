module.exports = (req, res, next) => {
    const apikey = req.headers['x-api-key'];
    if(!apikey || apikey !== config.appApikey){
        return res.status(403).json({
            success: false,
            message: 'Forbidden'
        });
    }
    next();
};