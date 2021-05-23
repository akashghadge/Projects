const express = require("express");
const app = express();
const http = require("http").createServer(app);

// dynamic port allocation
const port = process.env.PORT || 5000;

// cross origin error
const cors = require("cors");
require("dotenv").config();



// middlewares
app.use(express.json());
app.use(cors());

// mail verificatin
const mailVerify = require("./mailVerification");
const mailVerifyRoute = require("./routes/emailVerification.route");
app.use("/api/", mailVerifyRoute);

// mailVerify("akashsghadge06@gmail.com");
// mailVerify("akashsghadge06@gmail.com");

// adding mongoDB
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
mongoose.connect("mongodb://localhost/email-verification", {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
}).then((data) => {
    console.log("DB is connected..");
}).catch((err) => {
    console.log(err);
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database connected sucessfully");
})





http.listen(port, () => {
    const port = http.address().port;
    const address = http.address().address;
    console.log("server is listening at %s and at the %s adress", port, address);
})