// // localStorage.clear();
let userAdmin = new Array;
let userMember = new Array;
let bookObj = new Array;
// console.log(bookObj);
let newUser;
let currentUser;
localStorage.setItem("bookDetails", JSON.stringify(bookObj));
localStorage.setItem("adminDetails", JSON.stringify(userAdmin));
localStorage.setItem("memberDetails", JSON.stringify(userMember));

// function showBookList() {
//     bookObj = localStorage.getItem("bookDetails");
//     bookObj = JSON.parse(bookObj);
//     // console.log(bookObj);
//     let bookList = document.getElementById("bookList");
//     // console.log(bookList)
//     bookList.innerHTML = "";
//     bookObj.forEach(function (element, index) {
//         inHtml = `<tr>
//         <th scope="row">${index}</th>
//         <td>${bookObj[index].name}</td>
//         <td>${bookObj[index].author}</td>
//         <td>${bookObj[index].status}</td>
//         <td><button type="button" class=" btn-danger id="${index}" onclick="deleteBook(this.id)">Delete</button></td>
//         </tr>`
//         bookList.innerHTML += inHtml;
//     })
// }

// function showBookListMember() {
//     bookObj = localStorage.getItem("bookDetails");
//     bookObj = JSON.parse(bookObj);
//     // console.log(bookObj);
//     let bookList = document.getElementById("bookList");
//     // console.log(bookList)
//     bookList.innerHTML = "";
//     bookObj.forEach(function (element, index) {
//         inHtml = `<tr>
//         <th scope="row">${index}</th>
//         <td>${bookObj[index].name}</td>
//         <td>${bookObj[index].author}</td>
//         <td>${bookObj[index].status}</td>
//         <td><input type="radio" name="statusBook" id="${index}" onclick="issueBook(this.id)"><label for="">issued</label>
//         <input type="radio" name="statusBook" id="${index}" onclick="returnBook(this.id)"><label>Not issued</label></td>
//         </tr>`
//         bookList.innerHTML += inHtml;
//     })
// }

// function clearCurrentUser() {
//     let temp = null;
//     let currentUser = localStorage.setItem("currentUser", JSON.stringify(temp))
// }
// console.log("admin page log");

// //set up for  the current sign in user account.
// if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/adminOptions.html") {

//     let userInfo = document.querySelector(".userInfo")
//     let currentUser = localStorage.getItem("currentUser");
//     let temp = document.createElement("div");
//     temp.id = "userInfoIn";
//     currentUser = JSON.parse(currentUser);
//     temp.innerHTML = `  <div class="media text-muted pt-3">
//     <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"/><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
//     <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
//       <strong class="d-block text-gray-dark">${currentUser.name}</strong>
//       <p class ="container">Books Issued:${currentUser.issuedBooks}</p>
//   </div>`
//     userInfo.appendChild(temp);
//     showBookList();

// }
// if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/memberOptions.html") {

//     let userInfo = document.querySelector(".userInfo");
//     let currentUser = localStorage.getItem("currentUser");
//     let temp = document.createElement("div");
//     temp.id = "userInfoIn";
//     currentUser = JSON.parse(currentUser);
//     temp.innerHTML = `  <div class="media text-muted pt-3">
//     <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"/><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
//     <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
//       <strong class="d-block text-gray-dark">${currentUser.name}</strong>
//       <p class ="container">Books Issued:${currentUser.issuedBooks}</p>
//   </div>`
//     userInfo.appendChild(temp);
//     showBookListMember();

//     // function issueBook(elementId) {
//     //     bookObj = localStorage.getItem("bookDetails");
//     //     bookObj = JSON.parse(bookObj);
//     //     if (bookObj[elementId].status == "-") {
//     //         bookObj[elementId].status = `issued by ${currentUser.name}`;
//     //         localStorage.setItem("bookDetails", JSON.stringify(bookObj));
//     //         showBookListMember();
//     //     } else {

//     //     }
//     // }

// }
// //ading the new book by admin user
// if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/adminOptions.html?") {
//     console.log("hiiiiiiiiiiiiiiiiiii");
//     let addBook = document.querySelector("#addBook");
//     addBook.addEventListener("click", function (element) {
//         element.preventDefault();
//         let inputBookName = document.querySelector("#inputBookName");
//         let inputBookAuthor = document.querySelector("#inputBookAuthor");
//         bookObj = localStorage.getItem("bookDetails");
//         bookObj = JSON.parse(bookObj);
//         console.log(bookObj);

//         let newBook = {
//             name: inputBookName.value,
//             author: inputBookAuthor.value,
//             status: "-"
//         }
//         if (newBook.name.length > 2 && newBook.author.length > 2) {
//             bookObj.push(newBook);
//             localStorage.setItem("bookDetails", JSON.stringify(bookObj));
//             // console.log(bookObj);
//             inputBookName.value = null;
//             inputBookAuthor.value = null;
//             obj.bookAddedNotification(1, "Succesfully Added a Book")
//             showBookList();

//         } else {
//             obj.bookAddedNotification(0);
//         }

//     })

//     function deleteBook(elementId) {
//         bookObj = localStorage.getItem("bookDetails");
//         bookObj = JSON.parse(bookObj);
//         bookObj.splice(elementId, 1);
//         localStorage.setItem("bookDetails", JSON.stringify(bookObj));
//         showBookList();
//     }

// }

// let validiatResult = 0;
// class Admin {
//     validiat(givenName, givenPassword, a) {
//         // console.log("this is callled");
//         let f = 0;
//         if (a == 1) {
//             userAdmin = localStorage.getItem("adminDetails");
//             userAdmin = JSON.parse(userAdmin);
//             console.log(userAdmin);
//             Array.from(userAdmin).forEach(function (element, index) {
//                 if (element.name == givenName) {
//                     f = 1;
//                     if (userAdmin[index].password == givenPassword) {
//                         // currentUser = element.name;
//                         console.log("login succesfully");
//                         validiatResult = 1;
//                         console.log(element.name);
//                         let currentUser = element;
//                         localStorage.setItem("currentUser", JSON.stringify(currentUser));
//                         location.assign("adminOptions.html");
//                     }
//                 } else {
//                     f = 0;
//                 }
//             })
//             if (!f) {
//                 console.log("login unsuccesfully");
//                 validiatResult = 0;
//             }
//             // console.log(tempIndex);
//         } else {
//             userMember = localStorage.getItem("memberDetails");
//             userMember = JSON.parse(userMember);
//             console.log(userMember);
//             Array.from(userMember).forEach(function (element, index) {
//                 if (element.name == givenName) {
//                     f = 1;
//                     if (userMember[index].password == givenPassword) {
//                         currentUser = element.name;
//                         console.log("login succesfully");
//                         validiatResult = 1;
//                         currentUser = element;
//                         localStorage.setItem("currentUser", JSON.stringify(currentUser));
//                         location.assign("memberOptions.html");
//                     }
//                 } else {
//                     f = 0;
//                 }
//             })
//             if (!f) {
//                 console.log("login unsuccesfully");
//                 validiatResult = 0;
//             }

//         }
//         // console.log(detail);
//         // console.log(detailAdmin);
//         // console.log(detailMember);

//     }
//     signInNotification(element, text) {
//         console.log("in sign in notification ", element);

//         let signNotificationSucces = `
//             <div class="alert alert-success alert-dismissible fade show" role="alert">
//             <strong>${text}</strong>
//             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button> 
//             </div>`

//         let signNotificationdanger = `
//             <div class="alert alert-danger alert-dismissible fade show" role="alert">
//             <strong>Somthing Is Wrong</strong> You should check in on some of those fields below.
//             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button> 
//             </div>`

//         let notification = document.getElementsByClassName("temp");
//         if (element) {
//             notification.innerHTML = signNotificationSucces;
//         } else {
//             notification.innerHTML = signNotificationdanger;
//         }
//         setTimeout(() => {
//             notification.innerHTML = "";
//         }, 2000);
//     }
//     signInNotificationMember(element, text) {
//         console.log("in sign in notification ", element);

//         let signNotificationSucces = `
//             <div class="alert alert-success alert-dismissible fade show" role="alert">
//             <strong>${text}</strong>
//             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button> 
//             </div>`

//         let signNotificationdanger = `
//             <div class="alert alert-danger alert-dismissible fade show" role="alert">
//             <strong>Somthing Is Wrong</strong> You should check in on some of those fields below.
//             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button> 
//             </div>`

//         let notification = document.getElementsByClassName("temp");
//         if (element) {
//             notification.innerHTML = signNotificationSucces;
//         } else {
//             notification.innerHTML = signNotificationdanger;
//         }
//         setTimeout(() => {
//             notification.innerHTML = "";
//         }, 2000);
//     }
//     bookAddedNotification(element, text) {
//         let signNotificationSucces = `
//         <div class="alert alert-success alert-dismissible fade show" role="alert">
//         <strong>${text}</strong>
//         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//         </button> 
//         </div>`

//         let signNotificationdanger = `
//         <div class="alert alert-danger alert-dismissible fade show" role="alert">
//         <strong>Somthing Is Wrong</strong> You should check in on some of those fields below.
//         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//         </button> 
//         </div>`

//         let notification = document.getElementById("tempAdmin");
//         if (element) {
//             notification.innerHTML = signNotificationSucces;
//         } else {
//             notification.innerHTML = signNotificationdanger;
//         }
//         setTimeout(() => {
//             notification.innerHTML = "";
//         }, 2000);
//     }
//     // bookIssuedNotification(element, text) {
//     //     let signNotificationSucces = `
//     //     <div class="alert alert-success alert-dismissible fade show" role="alert">
//     //     <strong>${text}</strong>
//     //     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//     //         <span aria-hidden="true">&times;</span>
//     //     </button> 
//     //     </div>`

//     //     let signNotificationdanger = `
//     //     <div class="alert alert-danger alert-dismissible fade show" role="alert">
//     //     <strong>Somthing Is Wrong</strong> You should check in on some of those fields below.
//     //     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//     //         <span aria-hidden="true">&times;</span>
//     //     </button> 
//     //     </div>`

//     //     let notification = document.getElementById("tempAdmin");
//     //     if (element) {
//     //         notification.innerHTML = signNotificationSucces;
//     //     } else {
//     //         notification.innerHTML = signNotificationdanger;
//     //     }
//     //     setTimeout(() => {
//     //         notification.innerHTML = "";
//     //     }, 2000);
//     // }
//     createUser(givenName, givenPassword, a) {
//         if (givenName.length > 2 && givenPassword.length > 2) {
//             let f = 1;
//             newUser = {
//                 name: givenName,
//                 password: givenPassword,
//                 issuedBooks: "harry potter"
//             }
//             // console.log(newUser);
//             if (a == 1) {
//                 userAdmin = localStorage.getItem("adminDetails");
//                 userAdmin = JSON.parse(userAdmin);
//                 userAdmin.forEach(function (element, index) {
//                     if (element.name == givenName) {
//                         f = 0;
//                     }
//                 })
//                 if (f == 0) {
//                     console.log("adready exists"); //change is require
//                 } else {
//                     // console.log(newUser);
//                     userAdmin.push(newUser);
//                     localStorage.setItem("adminDetails", JSON.stringify(userAdmin));
//                 }
//             } else {
//                 userMember = localStorage.getItem("memberDetails");
//                 userMember = JSON.parse(userMember);
//                 userMember.forEach(function (element, index) {
//                     if (element.name == givenName) {
//                         f = 0;
//                     }
//                 })
//                 if (f == 0) {
//                     console.log("adready exists"); //change is require
//                 } else {
//                     // console.log(newUser);
//                     userMember.push(newUser);
//                     localStorage.setItem("memberDetails", JSON.stringify(userMember));
//                 }
//             }
//         } else {
//             console.log("you cant add the user");
//         }

//     }

// }
// // Admin.validiat("akash", "Akash0");
// // let c = new Admin;
// // c.createUser("pranali", "lawand", 0);
// // c.createUser("akash", "ghadge", 1);
// // // console.log(userMember);
// // // console.log(userAdmin);
// // // console.log(localStorage.getItem("adminDetails"));
// // // console.log(localStorage.getItem("memberDetails"));
// // // c.validiat("akash", "ghadge", 1);
// // // c.createUser("akash", "", 1)


// let obj = new Admin;
// obj.createUser("akash", "ghadge", 1);
// obj.createUser("ash", "ghadge", 0);
// obj.createUser("ash1", "ghadge", 0);




// // let adminOpton = document.getElementById("adminOption");
// // let memberOption = document.getElementById("memberOption");

// // adminOpton.addEventListener("click", function (event) {
// //     // console.log("ad");
// //     // event.preventDefault();

// //     let temp = document.getElementById("temp");
// //     temp.innerHTML = "";
// //     let inHtml = `
// //     <br>
// //     <br>
// //     <hr>
// //     <div class="text-centet container-sm">
// //     <form class="form-signin" id="formSignInAdmin">
// //     <h1 class="h3 mb-3 font-weight-normal " id="tagLineSignIn">Admin Sign In</h1>
// //     <label for="inputEmail" class="sr-only">Admin Name</label>
// //     <input type="name" id="adminName" class="form-control" placeholder="User Name" required autofocus>
// //     <label for="inputPassword" class="sr-only">Password</label>
// //     <input type="password" id="adminPassword" class="form-control" placeholder="Password" required>
// //     <div class="checkbox mb-3">
// //     </div>
// //     <button class="btn btn-lg btn-primary btn-block" type="submit" id="loginAdmin" value="submit">Sign
// //     in</button>
// //     <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
// //     </form>
// //     </div>`
// //     temp.innerHTML = inHtml;
// //     // console.log(temp);
// // });
// // memberOption.addEventListener("click", function (event) {
// //     // event.preventDefault();
// //     let temp = document.getElementById("temp");
// //     temp.innerHTML = "";
// //     let inHtml = ` 
// //     <br>
// //     <br>
// //     <hr>
// //     <div class="text-centet container-sm">
// //         <form class="form-signin" id="formSignInMember">
// //             <h1 class="h3 mb-3 font-weight-normal " id="tagLineSignIn">Member Sign In</h1>
// //             <label for="inputEmail" class="sr-only">Admin Name</label>
// //             <input type="name" id="memberName" class="form-control" placeholder="User Name" required autofocus>
// //             <label for="inputPassword" class="sr-only">Password</label>
// //             <input type="password" id="memberPassword" class="form-control" placeholder="Password" required>
// //             <div class="checkbox mb-3">
// //             </div>
// //             <button class="btn btn-lg btn-primary btn-block" type="submit" id="loginMember" value="submit">Sign
// //                 in</button>
// //             <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
// //         </form>
// //     </div>`
// //     temp.innerHTML = inHtml;
// //     // console.log(temp);
// // })

// // login admin fucntion
// let loginAdminButton = document.getElementById("loginAdmin");
// loginAdminButton.addEventListener("click", function (event) {
//     // console.log("hi");
//     event.preventDefault();
//     let Name = document.querySelector("#adminName");
//     let mameValue = Name.value;
//     let Password = document.querySelector("#adminPassword");
//     let passwordValue = Password.value;
//     Name.value = "";
//     Password.value = "";
//     obj.validiat(mameValue, passwordValue, 1);
//     obj.signInNotification(validiatResult, "Sign In Succesfully");
//     validiatResult = 0;
//     // console.log(Name);
//     // console.log(Password);
// });


// // login member fucntion
// let loginMemberButton = document.getElementById("loginMember");
// loginMemberButton.addEventListener("click", function (event) {
//     event.preventDefault();
//     let Name = document.querySelector("#memberName");
//     let memberName = Name.value;
//     let Password = document.querySelector("#memberPassword");
//     let memberPassword = Password.value;
//     // console.log(Name);
//     // console.log(Password);
//     Name.value = "";
//     Password.value = "";

//     console.log("hiiiiiii");
//     obj.validiat(memberName, memberPassword, 0);
//     obj.signInNotificationMember(validiatResult, "Sign In Succesfully");
//     validiatResult = 0;
// })


// // signUp admin
// {

//     // let userInfo = document.querySelector(".userInfo")
//     // let currentUser = localStorage.getItem("currentUser");
//     // let temp = document.createElement("div");
//     // temp.id = "userInfoIn";
//     // temp.innerHTML = `<h1>${currentUser.name}</h1>`
//     // currentUser = JSON.parse(currentUser);
//     // userInfo.appendChild(temp);


// }




let validiatResult = 0;
let notification;
class AdminMain {
    deleteBook(elementId) {
        bookObj = localStorage.getItem("bookDetails");
        bookObj = JSON.parse(bookObj);
        bookObj.splice(elementId, 1);
        localStorage.setItem("bookDetails", JSON.stringify(bookObj));
        showBookList();
    }
    createUser(givenName, givenPassword, a) {
        if (givenName.length > 2 && givenPassword.length > 2) {
            let f = 1;
            newUser = {
                name: givenName,
                password: givenPassword,
                issuedBooks: "harry potter"
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
    validiat(givenName, givenPassword, a) {
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
                        console.log(element.name);
                        let currentUser = element;
                        localStorage.setItem("currentUser", JSON.stringify(currentUser));
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
    showBookList() {
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
            <td><button type="button" class=" btn-danger id="${index}" onclick="deleteBook(this.id)">Delete</button></td>
            </tr>`
            bookList.innerHTML += inHtml;
        })
    }

    clearCurrentUser() {
        let temp = null;
        let currentUser = localStorage.setItem("currentUser", JSON.stringify(temp))
    }
    bookAddedNotification(element, text) {
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
    signInNotification(element, text) {
        console.log("in sign in notification ", element);
        notification = document.getElementById("tempAdmin");
        console.log(notification);
        let temp = document.createElement("div");
        temp.id = "temp";
        console.log(temp);
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
            temp.innerHTML = signNotificationSucces;
        } else {
            temp.innerHTML = signNotificationdanger;
        }
        console.log(temp.innerHTML);
        notification.appendChild(temp);
        console.log(notification);
        setTimeout(() => {
            notification.innerHTML = "";
        }, 2000);
    }

}
let obj = new AdminMain;
obj.createUser("akash", "ghadge", 1);
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
    obj.validiat(mameValue, passwordValue, 1);
    obj.signInNotification(validiatResult, "Sign In Succesfully");
    validiatResult = 0;
});

if (location.href == "http://127.0.0.1:5501/tutorials/projects/project%202%20tut33/adminOptions.html") {

    let userInfo = document.querySelector(".userInfo")
    let currentUser = localStorage.getItem("currentUser");
    let temp = document.createElement("div");
    temp.id = "userInfoIn";
    currentUser = JSON.parse(currentUser);
    temp.innerHTML = `  <div class="media text-muted pt-3">
<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"/><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
<strong class="d-block text-gray-dark">${currentUser.name}</strong>
<p class ="container">Books Issued:${currentUser.issuedBooks}</p>
</div>`
    userInfo.appendChild(temp);
    showBookList();

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
        console.log(bookObj);

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
            obj.bookAddedNotification(1, "Succesfully Added a Book")
            showBookList();

        } else {
            obj.bookAddedNotification(0);
        }

    })
}