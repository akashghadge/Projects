const multer = require("multer");

function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.status(404).json({
            message: err
        })
    }
}

module.exports = errHandler;