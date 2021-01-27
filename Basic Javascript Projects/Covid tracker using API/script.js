// console.log("project 3");
if (location.href == "https://akashghadge.github.io/Covid-Tracker-Using-Fetch-API/covidTracker.html") {
    console.log("we are on covid page");
    let source = "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
    console.log("helllo");

    function loadingEffect() {
        // console.log("hi this is loaidn");
        let str = "";
        let covidDetailsShow = document.getElementById("covidDetailsShow");
        str = `
            <p>content is loading</p>
        `
        covidDetailsShow.innerHTML = str;
    }

    function signInNotification(element, text) {
        let notification = document.getElementById("notificationLoad");
        signNotificationSucces = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>${text}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button> 
                </div>`

        signNotificationdanger = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Somthing Is Wrong</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button> 
        </div>`
        if (element) {
            notification.innerHTML = signNotificationSucces;
        } else {
            notification.innerHTML = signNotificationdanger;
        }
        setTimeout(() => {
            notification.innerHTML = "";
        }, 2000);
    }

    function displsyContent(obj) {
        // console.log("displaying content");
        let str = "";
        let covidDetailsShow = document.getElementById("covidDetailsShow");
        obj = Array.from(obj);
        obj.forEach(function (element, index) {
            str += `
            <div class="col-md-4" id=${index}>
                <h2 class="align-content-center">${element.country}</h2>
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">infected</th>
                        <th scope="col">recovered</th>
                        <th scope="col">deceased</th>
                    </tr>
                </thead>
                <tr class=>
                <td>${element.infected}</td>
                <td>${element.recovered}</td>
                <td>${element.deceased}</td>
                </tr>
            </table>
            <hr>
            </div> `
        });
        covidDetailsShow.innerHTML = str;
    }
    // console.log("hello");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", source, true);
    xhr.onprogress = function () {
        let covidDetailsShow = document.getElementById("covidDetailsShow")
        covidDetailsShow.innerHTML = `<h3>Loading ...</h3>`
        loadingEffect();
    }
    xhr.onload = function () {
        if (this.status == 200) {
            // console.log("succefull");
            let obj = this.responseText;
            obj = JSON.parse(obj);
            // console.log(obj);
            displsyContent(obj);
            signInNotification(1, "Succesfully Added content")
        } else {
            signInNotification(0, "Something Went Wrong")
            console.log("fetching is not possible");
        }
    };
    xhr.send();

}

if (location.href == "https://akashghadge.github.io/Covid-Tracker-Using-Fetch-API/unitConversion.html") {

    function displayCurr(obj) {
        console.log(obj);
        let keysObj = Object.keys(obj.rates);
        let valuesObj = Object.values(obj.rates);
        let baseCurr = obj.base;
        // console.log(keysObj);
        // console.log(valuesObj);
        // console.log(baseCurr);
        let tableDisplay = document.getElementById("unitTable");
        let str = ""
        keysObj.forEach(function (element, index) {
            str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${keysObj[index]}</td>
                <td>${valuesObj[index]}</td>
            </tr>
            `
        });
        tableDisplay.innerHTML = str;
    }
    let newApi = 'https://cors-anywhere.herokuapp.com/https://currencyapi.net/api/v1/rates?key=fQ598ihEKurte3Dmqm4XdPfNyK6Kc16gvc95';
    const xhr1 = new XMLHttpRequest();
    xhr1.open("GET", newApi, true);
    xhr1.onload = function () {
        if (this.status == 200) {
            let obj = this.responseText;
            obj = JSON.parse(obj);
            displayCurr(obj);
        } else {
            console.log("fetching is not possible");
        }
    };
    // console.log("hello");
    xhr1.send();



    // let objCurr = localStorage.getItem("currency");
    // objCurr = JSON.parse(objCurr);
    // displayCurr(objCurr);

}

if (location.href == "https://akashghadge.github.io/Covid-Tracker-Using-Fetch-API/index.html") {
    // console.log("helloe");
    console.log("on home page");
    function displayQuotes(objQuote) {
        let quoteDiv = document.getElementById("quotes");
        let str = "";
        Array.from(objQuote);
        objQuote.forEach(function (element, index) {
            if (element.rating == undefined) {
                element.rating = "N/A";
            }
            str += `
              <div class="card-deck mb-3 text-center">
                <div class="card mb-4 shadow-sm">
                    <div class="card-header">
                  <h4 class="my-0 font-weight-normal">Vote: ${element.rating}</h4>
                </div>
                <div class="card-body">
                  <ul class="list-unstyled mt-3 mb-4">
                    <div class="bg-light align-content-center text-center">
                        <br>
                        <li>${element.author}</li>
                        <br>
                    </div>
                        <br><br>
                    <li>" ${element.en} "</li>
                  </ul>
                </div>
              </div>
            `
        });
        quoteDiv.innerHTML = str;
    }
    let newApi = 'https://programming-quotes-api.herokuapp.com/quotes';
    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", newApi, true);
    xhr2.onload = function () {
        if (this.status == 200) {
            let obj = this.responseText;
            obj = JSON.parse(obj);
            // console.log(obj);
            displayQuotes(obj);
        } else {
            console.log("fetching is not possible");
        }
    };
    xhr2.send();
    // console.log("hello");


    // console.log("index page");
    // let objQuote = localStorage.getItem("quotes");
    // objQuote = JSON.parse(objQuote);
    // displayQuotes(objQuote);

}