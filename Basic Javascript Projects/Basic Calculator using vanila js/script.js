let prevAns;
let display = document.getElementById("display");
let button_Clear = document.getElementById("clear");
let button_ON = document.getElementById("ON");
let flag = 0;
// display.value = "akash"
button_ON.addEventListener("click", (event) => {
    event.preventDefault();
    let isOn = button_ON.classList.contains("buttonPressed");
    if (isOn) {
        button_ON.classList.remove("buttonPressed");
    } else {
        button_ON.classList.add("buttonPressed");
        calculatorOn(1)
    }
})

function calculatorOn(flag) {
    if (flag) {
        let buttons = document.querySelectorAll("button");
        for (const iterator of buttons) {
            // console.log("hi");
            iterator.addEventListener("click", () => {
                if (display.value.length > 15) {
                    display.classList.remove("displayNormal");
                    display.classList.add("displayExceed");
                } else {
                    display.classList.remove("displayExceed");
                    display.classList.add("displayNormal");

                }
                if (iterator.innerText == "Clear") {
                    // display.value = "akash";
                    display.value = "";
                } else if (iterator.innerText == "Delete") {
                    let temp = display.value;
                    display.value = temp.slice(0, (temp.length - 1));
                } else if (iterator.innerText == "=") {
                    let exp = display.value;
                    exp = eval(exp);
                    prevAns = exp;
                    display.value = exp;
                } else if (iterator.innerText == "Ans") {
                    display.value = prevAns;
                } else if (iterator.innerText == "ON") {

                } else {
                    display.value += `${iterator.innerText}`
                }
            })
        }
    }
}