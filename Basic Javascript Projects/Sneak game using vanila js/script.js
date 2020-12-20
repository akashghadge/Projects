let sneak = document.getElementById("sneak");
let food = document.getElementById("food");
let scoreBoard = document.getElementById("scoreBoard");
let score = 0;

function checkGameOver(x, y) {
    if (x >= 450 || x <= 0 || y <= 10 || y >= 450) {
        console.log("border cross");
        window.location.reload();
        // break;
    }
}

function checkFoodEat(sneakTop, sneakLeftk, foodTop, foodLeft) {

    let offsetTop = Math.abs(sneakTop - foodTop);
    let offsetLeft = Math.abs(sneakLeftk - foodLeft);
    let foodElement = document.querySelector("#food");
    console.log(offsetTop, offsetLeft);
    if (offsetLeft <= 10 && offsetTop <= 10) {
        scoreBoard.innerHTML = `
        <h1>Score : ${score++}</h1>
        `
        foodElement.style.top = (350 * Math.random()) + "px"
        foodElement.style.left = (350 * Math.random()) + "px"
    }
}

let keyPressed;
setInterval(() => {
    let sneakElement = document.querySelector(".sneakPosition");
    // console.log(sneakElement);
    let foodElement = document.querySelector("#food");
    let sneakTop = parseFloat(window.getComputedStyle(sneakElement, null).getPropertyValue("top"));
    let sneakLeft = parseFloat(window.getComputedStyle(sneakElement, null).getPropertyValue("left"));
    let foodLeft = parseFloat(window.getComputedStyle(foodElement, null).getPropertyValue("left"));
    let foodTop = parseFloat(window.getComputedStyle(foodElement, null).getPropertyValue("top"));

    console.log(sneakTop, sneakLeft);
    document.onkeydown = function (event) {
        // 37 left
        // 38 top
        // 39 right
        // 40 bottom
        let keyValue = event.keyCode;
        keyPressed = keyValue;
        // console.log(keyPressed);
    }
    //    console.log(keyPressed);
    if (keyPressed == 39) {
        console.log("left");
        sneakElement.style.left = sneakLeft + 10 + "px";
    }
    if (keyPressed == 38) {

        sneakElement.style.top = sneakTop - 10 + "px";
        console.log("top");
    }
    if (keyPressed == 37) {
        console.log("right");
        sneakElement.style.left = sneakLeft - 10 + "px";

    }
    if (keyPressed == 40) {
        sneakElement.style.top = sneakTop + 10 + "px";
        console.log("bottom");

    }

    checkFoodEat((sneakTop - 2), (sneakLeft - 2), (foodTop), (foodLeft));
    checkGameOver(sneakTop, sneakLeft);

}, 100);