// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")
const app = express();
require("./DB/conn")
// handlebars
var hbs = require('express-handlebars');
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
}))

// models
const Detail = require("./model/Detail")


// Route to display device details using Handlebars template
app.get('/', (req, res) => {
    const deviceDetails = {
        userAgent: req.headers['user-agent'],
        browserLanguage: req.headers['accept-language'],
        platform: process.platform
    };
    res.render('device-details', { deviceDetails });
});
app.post("/api/device-data", (req, res) => {
    const details = {
        agent: req.headers['user-agent'],
        lang: req.headers['accept-language'],
        platform: process.platform,
        width: req.body.screenWidth,
        height: req.body.screenHeight,
        pixelRatio: req.body.devicePixelRatio,
        isTouch: req.body.isTouchSupported,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }
    const newDetails = new Detail(details);
    newDetails.save()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/api/device-data/all', async (req, res) => {
    let data = await Detail.find({});
    res.json(data);
})

// Start the server
const port = 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}/`));
