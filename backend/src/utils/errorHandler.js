exports.errorHandler = (err, res) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: err.message
    });
};