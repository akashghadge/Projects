if (location.href == "http://localhost:5000/api/upload") {
    location.replace("http://localhost:5000/");
}

let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (e) => {
    // e.preventDefault();

});


// fetch("http://localhost:5000/api/download").then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

async function getData() {
    let url = "http://localhost:5000/api/download";
    // response is just variable u can change it 
    const response = await fetch(url); //fetch returns the promise to and await wait to get response from api 
    const data = await response.json(); //json also returns the promise
    return data;
}

let akash = getData();
akash.then(data => {
    console.log(data);
    let serverImage = document.getElementById("serverImages");
    let str = "";
    data.map((elem, index) => {
        str += `<img src=${elem.url} alt=${elem.name}>`
    });
    serverImage.innerHTML = str;
});