// console.log("hello");
let player = document.getElementById("player");
let playerLeft = parseFloat(window.getComputedStyle(player, null).getPropertyValue("left"));
let playerTop = parseFloat(window.getComputedStyle(player, null).getPropertyValue("top"));
let obstacle = document.getElementById("obstacale");
let obsLeft = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
let obsTop = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("top"));
let score = 0;

let scoreDisplay = document.getElementById("scoreDisplay");
document.onkeydown = function (event) {
    let keyPressed = event.keyCode;
    console.log(keyPressed);
    let offset = 150;
    if (keyPressed == 37) {
        player.style.left = (playerLeft -= offset) + "px";
    }
    if (keyPressed == 38) {
        player.style.top = (playerTop -= offset) + "px"
    }
    if (keyPressed == 39) {
        player.style.left = (playerLeft += offset) + "px";
    }
    if (keyPressed == 40) {
        player.style.top = (playerTop += offset) + "px"
    }
}

function isGameOver() {
    if (playerLeft < 10 || playerLeft > 700 || playerTop > 700 | playerTop < -10) {
        location.reload();
    }
    let top1 = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("top"));
    let top2 = parseFloat(window.getComputedStyle(player, null).getPropertyValue("top"));
    let side1 = parseFloat(window.getComputedStyle(player, null).getPropertyValue("left"));
    let side2 = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    let diffTop = Math.abs(top1 - top2);
    let diffLeft = Math.abs(side1 - side2);
    // console.log(diffTop, diffLeft);
    if (diffTop < 40 && !diffLeft) {
        location.reload();
    }
}

function sendObs() {
    let offset = 150;

    let num = Math.random();
    if (num > 0.80) {
        obstacle.style.left = obsLeft + (offset * 0) + "px";
    } else if (num > 0.60) {
        obstacle.style.left = obsLeft + (offset * 1) + "px";
    } else if (num > 0.40) {
        obstacle.style.left = obsLeft + (offset * 2) + "px";

    } else if (num > 0.20) {
        obstacle.style.left = obsLeft + (offset * 3) + "px";

    } else {
        obstacle.style.left = obsLeft + (offset * 4) + "px";
    }
}
setInterval(() => {
    sendObs();
    score++;
    str = `
    <h1>Score : ${score}</h1>
    `
    scoreDisplay.innerHTML = str;
}, 900);
setInterval(() => {
    isGameOver();
}, 100);