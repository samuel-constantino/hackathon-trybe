const error = (err, _req, res, _next) => {
    const status = err.status || 500;
    const message = 'Internal Server Error';
    console.log(err.message);
    res.status(status).json({
        status,
        message,
    });
};

module.exports = error;