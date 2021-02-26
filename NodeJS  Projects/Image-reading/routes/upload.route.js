const path = require("path");
// basic router
const { Router } = require("express");
const router = Router();


//multer
const multer = require("multer");
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024
    }
})



router.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.status(200).json({
        message: `http://localhost:5000/images/${req.file.filename}`
    })
});
module.exports = router;