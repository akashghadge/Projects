const { get } = require("../routes/upload.route");

let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (e) => {
    // e.preventDefault();

});


let serverImage = document.getElementById("serverImages");
fetch("http://localhost:5000/api/download/image").then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})