const path = require("path");
// basic router
const { Router } = require("express");
const router = Router();
const Post = require("../models/image.model");

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
    const url = `http://localhost:5000/images/${req.file.filename}`;
    const name = req.file.filename;
    let newPost = new Post({
        name: name,
        url: url
    });
    newPost.save().then((result) => {
        res.status(200).json("done");
    }).catch((err) => {
        res.status(404).json({
            message: "file not stored in mongodb"
        })
    });
});

router.get("/download", (req, res) => {
    Post.find({}).select("-_id -__v").then((data) => {
        console.log(data);
        res.status(200).json(data);
    }).catch((err) => {
        res.status(404).json(err);
    })
})
module.exports = router;