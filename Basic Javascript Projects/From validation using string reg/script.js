const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const userName = document.getElementById("username")
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");

firstName.addEventListener("blur", (event) => {
    event.preventDefault();
    let regFirstName = /^([a-zA-Z]{2,10})$/;
    let str = firstName.value;
    console.log(regFirstName, str);
    console.log(regFirstName.test(str));
    if (regFirstName.test(str)) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
});

lastName.addEventListener("blur", (event) => {
    event.preventDefault();
    let reg = /^([a-zA-Z]{2,10})$/;
    let str = lastName.value;
    console.log(reg, str);
    console.log(reg.test(str));
    if (reg.test(str)) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
});

email.addEventListener("blur", (event) => {
    event.preventDefault();
    let reg = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]{0,8})$/;
    let str = email.value;
    console.log(reg, str);
    console.log(reg.test(str));
    if (reg.test(str)) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
});


userName.addEventListener("blur", (event) => {
    event.preventDefault();
    let reg = /^([a-zA-Z0-9\@\-\_]{2,10})$/;
    let str = userName.value;
    console.log(reg, str);
    console.log(reg.test(str));
    if (reg.test(str)) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
});


phoneNumber.addEventListener("blur", (event) => {
    event.preventDefault();
    let reg = /^([0-9]){10}$/;
    let number = phoneNumber.value;
    console.log(reg, number);
    console.log(reg.test(number));
    if (reg.test(number)) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
});