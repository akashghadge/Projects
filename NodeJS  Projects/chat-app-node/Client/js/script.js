const socket = io("http://localhost:5001");
// window of chat which we wanted to add
let chatAppWindow = document.getElementById("chatAppWindow");
let buttonAdd = document.getElementById("submitButton");
let inputMes = document.getElementById("inputField");

// getting current user from prompt
const currentUser = prompt("Please enter the username");
if (currentUser == null) {
    location.reload();
    window.location.reload(true);
}

// message adding function 
function addMessage(username, message, flag, time) {
    let chatBox = document.createElement("div");
    chatBox.classList.add("chat");
    // console.log(time);
    // converting milisec to the understandable
    let date = new Date(time);
    chatBox.innerHTML =
        `
    <p class="timeFont">${username}: </p>
    ${message}
    <p class="timeFont" >Time : ${date}</p>
    `
    // according to flag set the message position and css
    if (flag == 0 || username == currentUser) {
        chatBox.classList.add("rightChat");
    }
    else if (flag == 1) {
        chatBox.classList.add("leftChat");
    }
    else if (flag == 2) {
        chatBox.classList.add("middleChat");
    }

    chatAppWindow.appendChild(chatBox);
}

// for registering and getting update of new user
socket.emit("new-user", currentUser);
socket.on("user-joined", (name) => {
    // genrating current time for new-user join cause we do not save user-join message
    let time = Date.now();
    addMessage(name, "user Join", 2, time)
})

// recievig all priveous messages
socket.on("pre-message", props => {
    // console.log(props);
    props.map((v, i, arr) => {
        let cUsername = v.username;
        let cMessage = v.message;
        let cTime = v.time;
        addMessage(cUsername, cMessage, 1, cTime);
    })


})

// message input
socket.on("rec-message", props => {
    addMessage(props.username, props.message, 1, props.time);
})
// emiting event of typing ... 
inputMes.addEventListener("input", () => {
    // console.log("hello");
    socket.emit("typing", currentUser);
})

// geting who is typing 
socket.on("user-typing", (username) => {
    let infoBox = document.getElementById("infoBox");
    let str = `
        <p>${username} typing ...</p>
    `
    infoBox.innerHTML = str;
})
// for seting default value of the chat field every time
setInterval(() => {
    let infoBox = document.getElementById("infoBox");
    let str = "";
    infoBox.innerHTML = str;
}, 10000);


buttonAdd.addEventListener("click", () => {
    let message = inputMes.value;
    let username = currentUser;
    let time = Date.now();
    const props = { username: username, message: message, time: time }
    socket.emit("send-message", props);
    inputMes.value = "";
})