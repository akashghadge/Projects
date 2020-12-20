let getButton = document.getElementById("getButton");
let postButton = document.getElementById("postButton");
let GetElement = document.getElementById("GetElement");
let PostElement = document.getElementById("PostElement");
getButton.addEventListener("click", () => {
    // console.log("get is pressed");
    GetElement.classList.remove("hide");
    PostElement.classList.add("hide");
})
postButton.addEventListener("click", () => {
    // console.log("post is pressed");
    PostElement.classList.remove("hide");
    GetElement.classList.add("hide");
})


// get request
function getDisplay(data) {
    // data = JSON.parse(data);
    let displayGetBox = document.getElementById("displayGetRequest");
    let str = "";
    // let objKeys = Object.keys(data);
    // let objValues = Object.values(data);
    // console.log(objKeys);
    // console.log(objValues);
    str += `
            <div class="container-sm border border-secondary bg-dark font-italic text-white">
                <p>${data}</p>
            </div>
        `

    displayGetBox.innerHTML = str;
}

function getRequest(url) {
    fetch(url).then((response) => {
        return response.text();
    }).then((data) => {
        // console.log(JSON.parse(data));
        // console.log(data);
        getDisplay(data);
    })
}

let buttonSubmitGet = document.getElementById("buttonSubmitGet");
buttonSubmitGet.addEventListener("click", () => {
    let valueUrlGet = document.getElementById("urlGet").value;
    getRequest(valueUrlGet);
})


// post request
function postRequest(url, data) {
    url = "https://cors-anywhere.herokuapp.com/" + url;
    para = {
        method: "post",
        headers: {
            'content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, para).then((response) => {
        return response.json();
    }).then((data) => {
        console.log("request is send succesfully");
        // console.log("request is not resolve");
        console.log(data);
    })
}

let buttonSubmitPost = document.getElementById("buttonSubmitPost");
buttonSubmitPost.addEventListener("click", () => {
    console.log("post is send");
    let dataValue = document.getElementById("dataPostReq").value;
    let url = document.getElementById("urlPost").value;
    // console.log(dataValue, url);
    postRequest(url, dataValue);
})



// http://dummy.restapiexample.com/api/v1/create