/*
Most important notice 
before using this website please chagne the location.href conditional condions as per ur file path 
when you use backend for your project it will became easy to serve pages but here 
i take help of the current location to route web pages 
:)
*/




// localStorage.clear();
console.log("hiiiii");
let userAdmin = new Array;
let userMember = new Array;
let bookObj = new Array;
// console.log(bookObj);
let newUser;
let currentUser;
let validiatResult = 0;

bookObj = localStorage.getItem("bookDetails");
bookObj = JSON.parse(bookObj);
localStorage.setItem("bookDetails", JSON.stringify(bookObj));
// userMember = localStorage.getItem("memberDetails");
// userMember = JSON.parse(userMember);
localStorage.setItem("memberDetails", JSON.stringify(userMember));
// userAdmin = localStorage.getItem("adminDetails");
// userAdmin = JSON.parse(userAdmin);
localStorage.setItem("adminDetails", JSON.stringify(userAdmin));

if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/adminOptions.html") {
    showBookList();
}
if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/memberOptions.html") {
    showBookListMember();
}
if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/index.html") {
    showBookListHome();
}

function issueBook(elementId) {
    bookObj = localStorage.getItem("bookDetails");
    bookObj = JSON.parse(bookObj);
    console.log(bookObj);
    // elementId = elementId.slice(1, 2);
    // // console.log(elementId);
    // elementId = Number(elementId);
    // console.log(elementId);
    let currentUser = localStorage.getItem("currentUser");
    currentUser = JSON.parse(currentUser);
    bookObj[elementId].status = `issued by ${currentUser.name}`;
    localStorage.setItem("bookDetails", JSON.stringify(bookObj));
    addToUserAccount(bookObj[elementId].name);
    showBookListMember();
}

function addToUserAccount(addedBookName) {
    console.log(addedBookName);
    let currentUser = localStorage.getItem("currentUser");
    currentUser = JSON.parse(currentUser);
    currentUser.issuedBooks.push(addedBookName);
    localStorage.setItem("currentUser", JSON.stringify(currentUser))

    let userMember = localStorage.getItem("memberDetails");
    userMember = JSON.parse(userMember);
    let tempIndex = 0;
    userMember.forEach(function (element, index) {
        if (element.name == currentUser.name) {
            console.log("this is called");
            tempIndex = index;
        }
    });
    console.log(userMember[tempIndex]);
    userMember[tempIndex].issuedBooks.push(addedBookName);
    localStorage.setItem("memberDetails", JSON.stringify(userMember));
    console.log(userMember);
}

function returnBook(elementId) {
    bookObj = localStorage.getItem("bookDetails");
    bookObj = JSON.parse(bookObj);
    // console.log(bookObj);
    // console.log(elementId);
    // // console.log(elementId);
    elementId = Number(elementId);
    // console.log(elementId);
    // let currentUser = localStorage.getItem("currentUser");
    // currentUser = JSON.parse(currentUser);
    let temp = bookObj[elementId].name;
    // console.log(temp);
    bookObj[elementId].status = `---`;
    localStorage.setItem("bookDetails", JSON.stringify(bookObj));
    removeBookCurrentUser(temp);
    showBookListMember();
}

function removeBookCurrentUser(removeBookName) {
    // console.log(removeBookName);
    userAdmin = localStorage.getItem("adminDetails");
    currentUser = localStorage.getItem("currentUser");
    userMember = localStorage.getItem("memberDetails");
    currentUser = JSON.parse(currentUser);
    userAdmin = JSON.parse(userAdmin);
    userMember = JSON.parse(userMember);
    let bookArray = currentUser.issuedBooks;
    // console.log(bookArray);
    bookArray.forEach(function (element, index) {
        if (element == removeBookName) {
            bookArray.splice(index, 1);
        }
    })
    // console.log(bookArray);
    currentUser.issuedBooks = bookArray;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));



    userMember.forEach(function (element, index) {
        bookArray = userMember[index];
        bookArray = bookArray.issuedBooks;
        bookArray.forEach(function () {
            if (element == removeBookName) {
                bookArray.splice(index, 1);
            }
            userMember.issuedBooks = bookArray;
        })

    })
    localStorage.setItem("memberDetails", JSON.stringify(userMember));

}



function deleteBook(elementId) {
    bookObj = localStorage.getItem("bookDetails");
    bookObj = JSON.parse(bookObj);
    bookObj.splice(elementId, 1);
    localStorage.setItem("bookDetails", JSON.stringify(bookObj));
    showBookList();
}

function createUser(givenName, givenPassword, a) {
    // bookObj = localStorage.getItem("bookDetails");
    // bookObj = JSON.parse(bookObj);
    if (givenName.length > 2 && givenPassword.length > 2) {
        let f = 1;
        let newUser = {
            name: givenName,
            password: givenPassword,
            issuedBooks: []
        }
        // console.log(newUser);
        if (a == 1) {
            userAdmin = localStorage.getItem("adminDetails");
            userAdmin = JSON.parse(userAdmin);
            userAdmin.forEach(function (element, index) {
                if (element.name == givenName) {
                    f = 0;
                }
            })
            if (f == 0) {
                console.log("adready exists"); //change is require
            } else {
                // console.log(newUser);
                userAdmin.push(newUser);
                localStorage.setItem("adminDetails", JSON.stringify(userAdmin));
            }
        } else {
            userMember = localStorage.getItem("memberDetails");
            userMember = JSON.parse(userMember);
            userMember.forEach(function (element, index) {
                if (element.name == givenName) {
                    f = 0;
                }
            })
            if (f == 0) {
                console.log("adready exists"); //change is require
            } else {
                // console.log(newUser);
                userMember.push(newUser);
                localStorage.setItem("memberDetails", JSON.stringify(userMember));
            }
        }
    } else {
        console.log("you cant add the user");
    }

}

function validiat(givenName, givenPassword, a) {
    // console.log("this is callled");
    let f = 0;
    if (a == 1) {
        userAdmin = localStorage.getItem("adminDetails");
        userAdmin = JSON.parse(userAdmin);
        console.log(userAdmin);
        Array.from(userAdmin).forEach(function (element, index) {
            if (element.name == givenName) {
                f = 1;
                if (userAdmin[index].password == givenPassword) {
                    // currentUser = element.name;
                    console.log("login succesfully");
                    validiatResult = 1;
                    // console.log(element.name);
                    let currentUser = element;
                    localStorage.setItem("currentUser", JSON.stringify(currentUser));
                    signInNotification(validiatResult, "Sign In Succesfully");
                    location.assign("adminOptions.html");
                }
            } else {
                f = 0;
            }
        })
        if (!f) {
            console.log("login unsuccesfully");
            validiatResult = 0;
        }
        // console.log(tempIndex);
    } else {
        userMember = localStorage.getItem("memberDetails");
        userMember = JSON.parse(userMember);
        console.log(userMember);
        Array.from(userMember).forEach(function (element, index) {
            if (element.name == givenName) {
                f = 1;
                if (userMember[index].password == givenPassword) {
                    currentUser = element.name;
                    console.log("login succesfully");
                    validiatResult = 1;
                    currentUser = element;
                    signInNotificationMember(validiatResult, "Sign In Succesfully");
                    localStorage.setItem("currentUser", JSON.stringify(currentUser));
                    location.assign("memberOptions.html");
                }
            } else {
                f = 0;
            }
        })
        if (!f) {
            console.log("login unsuccesfully");
            validiatResult = 0;
        }

    }
}

function showBookList() {
    bookObj = localStorage.getItem("bookDetails");
    bookObj = JSON.parse(bookObj);
    // console.log(bookObj);
    let bookList = document.getElementById("bookList");
    // console.log(bookList)
    bookList.innerHTML = "";
    bookObj.forEach(function (element, index) {
        inHtml = `<tr><th scope ="row" >${index}</th><td>${bookObj[index].name}</td><td>${bookObj[index].author}</td><td>${bookObj[index].status}</td><td><button type ="button" class = "btn-danger id="${index}" onclick="deleteBook(this.id)">Delete</button></td></tr>`
        bookList.innerHTML += inHtml;
    })
}

function showBookListMember() {
    bookObj = localStorage.getItem("bookDetails");
    bookObj = JSON.parse(bookObj);
    // console.log(bookObj);
    let bookList = document.getElementById("bookList");
    // console.log(bookList)
    bookList.innerHTML = "";
    bookObj.forEach(function (element, index) {
        inHtml = `<tr>
        <th scope="row">${index}</th>
        <td>${bookObj[index].name}</td>
        <td>${bookObj[index].author}</td>
        <td>${bookObj[index].status}</td>
        <td><input type="radio" name="bookStatus" id="${index}" onclick="issueBook(this.id)"><lable> Issue</lable><input type="radio" name="bookStatus" class="${index}" id="${index}" onclick="returnBook(this.id)"><lable> Return</lable></td>
        </tr>`
        bookList.innerHTML += inHtml;
    })

}

function showBookListHome() {
    bookObj = localStorage.getItem("bookDetails");
    bookObj = JSON.parse(bookObj);
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    bookObj.forEach(function (element, index) {
        inHtml = `<tr>
        <th scope="row">${index}</th>
        <td>${bookObj[index].name}</td>
        <td>${bookObj[index].author}</td>
        <td>${bookObj[index].status}</td>
        </tr>`
        bookList.innerHTML += inHtml;
    })

}


function clearCurrentUser() {
    let temp = null;
    let currentUser = localStorage.setItem("currentUser", JSON.stringify(temp))
}

function bookAddedNotification(element, text) {
    let signNotificationSucces = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>${text}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button> 
            </div>`

    let signNotificationdanger = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Somthing Is Wrong</strong> You should check in on some of those fields below.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button> 
            </div>`

    let notification = document.getElementById("temp");
    if (element) {
        notification.innerHTML = signNotificationSucces;
    } else {
        notification.innerHTML = signNotificationdanger;
    }
    setTimeout(() => {
        notification.innerHTML = "";
    }, 2000);
}

function signInNotification(element, text) {
    let notification = document.getElementById("temp");
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

function signInNotificationMember(element, text) {
    let notification = document.getElementById("tempMember");
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

function bookIssuedNotification(element, text) {
    let signNotificationSucces = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>${text}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button> 
        </div>`

    let signNotificationdanger = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Somthing Is Wrong</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button> 
        </div>`

    let notification = document.getElementById("tempAdmin");
    if (element) {
        notification.innerHTML = signNotificationSucces;
    } else {
        notification.innerHTML = signNotificationdanger;
    }
    setTimeout(() => {
        notification.innerHTML = "";
    }, 2000);
}


createUser("akash", "ghadge", 1);
createUser("pranali", "lawand", 0);
createUser("ash", "ghadge", 0);





if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/Sign%20In%20admin.html") {
    let loginAdminButton = document.getElementById("loginAdmin");
    loginAdminButton.addEventListener("click", function (event) {
        // console.log("hi");
        event.preventDefault();
        let Name = document.querySelector("#adminName");
        let mameValue = Name.value;
        let Password = document.querySelector("#adminPassword");
        let passwordValue = Password.value;
        Name.value = "";
        Password.value = "";
        validiat(mameValue, passwordValue, 1);
        validiatResult = 0;
    });
}

// login member fucntion
if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/Sign%20In%20member.html") {
    let loginMemberButton = document.getElementById("loginMember");
    loginMemberButton.addEventListener("click", function (event) {
        event.preventDefault();
        let Name = document.querySelector("#memberName");
        let memberName = Name.value;
        let Password = document.querySelector("#memberPassword");
        let memberPassword = Password.value;
        // console.log(Name);
        // console.log(Password);
        Name.value = "";
        Password.value = "";

        console.log("hiiiiiii");
        validiat(memberName, memberPassword, 0);
        validiatResult = 0;
    })
}

//ading the new book by admin user
if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/adminOptions.html") {
    let addBook = document.querySelector("#addBook");
    addBook.addEventListener("click", function (element) {
        element.preventDefault();
        let inputBookName = document.querySelector("#inputBookName");
        let inputBookAuthor = document.querySelector("#inputBookAuthor");
        bookObj = localStorage.getItem("bookDetails");
        bookObj = JSON.parse(bookObj);
        // console.log(bookObj);
        let newBook = {
            name: inputBookName.value,
            author: inputBookAuthor.value,
            status: "-"
        }
        if (newBook.name.length > 2 && newBook.author.length > 2) {
            bookObj.push(newBook);
            localStorage.setItem("bookDetails", JSON.stringify(bookObj));
            // console.log(bookObj);
            inputBookName.value = null;
            inputBookAuthor.value = null;
            bookAddedNotification(1, "Succesfully Added a Book")
            showBookList();

        } else {
            bookAddedNotification(0);
        }

    })
}

if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/adminOptions.html") {

    let userInfo = document.querySelector(".userInfo")
    let currentUser = localStorage.getItem("currentUser");
    let temp = document.createElement("div");
    temp.id = "userInfoIn";
    currentUser = JSON.parse(currentUser);
    temp.innerHTML = `  <div class="media text-muted pt-3">
            <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"/><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">${currentUser.name}
            Signed</strong>
                <p class ="container">Books Issued:${currentUser.issuedBooks}</p>
    </div>`
    userInfo.appendChild(temp);
    showBookList();

}

if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/memberOptions.html") {

    let userInfo = document.querySelector(".userInfo")
    let currentUser = localStorage.getItem("currentUser");
    let temp = document.createElement("div");
    temp.id = "userInfoIn";
    currentUser = JSON.parse(currentUser);
    temp.innerHTML = `  <div class="media text-muted pt-3">
            <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"/><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">${currentUser.name}
            Signed</strong>
                <p class ="container">Books Issued:${currentUser.issuedBooks}</p>
    </div>`
    userInfo.appendChild(temp);
    showBookListMember();

}