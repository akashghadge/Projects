// console.log("hello");
const fs = require("fs");
const http = require("http");

let homeFile = fs.readFileSync("./index.html", "utf-8");
console.log(homeFile);
const server = http.createServer((req, res) => {
    let currentUrl = req.url;
    res.writeHead(200, {
        "content-type": "text/html"
    })
    res.write(homeFile);
    res.end();
});


server.listen(8000, "127.0.0.1", () => {
    console.log("hello this is server");
})