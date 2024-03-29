"use strict"
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");


// middlewares
app.use(express.json())

// connecting with db
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/image-reading", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}).then((data) => {
    console.log("db is connected");
}).catch((err) => {
    console.log(err);
})
// routes for multer
const upload = require("./routes/upload.route");
app.use("/api/", upload);
app.use("/images", express.static("upload/images"));
// serving static files
const staticPath = path.join(__dirname, "./static");
app.use(express.static(staticPath));

// handling multer error
const errHandler = require("./routes/errorHandle");
app.use(errHandler);
// server is creation
// server listening 
// hello
app.listen(port, () => {
    console.log("server is running succefully at port :", port);
}) 