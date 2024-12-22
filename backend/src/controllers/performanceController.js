const {calculatePerformance} = require('../services/performanceService.js');

exports.getPerformance = async(req, res, next) => {
    try{
        const performanceData = await calculatePerformance();
        res.status(200).json({
            success: true,
            data: performanceData
        });
    } catch(error){
        next(error);
    }
};