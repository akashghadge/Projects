// localStorage.clear();
console.log("hi");
let myobj = new Array; //making the array for storing the data locally
let myobjTitle = new Array;
let htmlIn = document.querySelector("#remCont"); //targeting the div for adding notes
// localStorage.setItem("notes", "hi");
// localStorage.clear();
// showNotes();
let addButton = document.querySelector("#addtask");
addButton.addEventListener("click", function (element) {
    // console.log("hi");
    let text = document.querySelector("#textarea");
    let title = document.querySelector("#title");
    console.log("text value is ", text.value);
    if (localStorage.notes == null) {
        // console.log(typeof myobj);
        if (text.value != "" || title.value != "") {
            myobj.push(text.value);
            myobjTitle.push(title.value);
            // console.log("notes are empty");
        }
        // console.log(myobj);
        localStorage.setItem("notes", JSON.stringify(myobj));
        localStorage.setItem("title", JSON.stringify(myobjTitle));
        // console.log(localStorage.getItem("notes"));
        text.value = null;
        title.value = null;
    } else {
        // myobj.push(text.value);
        if (text.value != "" || title.value != "") {
            myobj.push(text.value);
            myobjTitle.push(title.value);
        }
        // console.log("notes are empty");
        console.log(myobj);
        console.log(myobjTitle);
        localStorage.setItem("notes", JSON.stringify(myobj));
        localStorage.setItem("title", JSON.stringify(myobjTitle));
        // console.log(localStorage.getItem("notes"));
        text.value = null;
        title.value = null;
    }
    showNotes();
});


function showNotes() {
    // console.log("hibhi");
    let temp = localStorage.getItem("notes");
    let tempTitle = localStorage.getItem("title");
    let html = "";
    temp = JSON.parse(temp);
    tempTitle = JSON.parse(tempTitle);
    Array.from(temp);
    Array.from(tempTitle);
    // console.log(temp.length);
    if (temp.length && tempTitle.length) {
        console.log("hiiiiiiiiiiii");
        // console.log(temp, "this is the temp");
        temp.forEach(function (element, index) {
            // console.log(html);
            html += `<div class="addednote" id="${index}">
            <h2 id="h${index}">"${tempTitle[index]}"</h2>
            <p id="p${index}">${temp[index]}</p>
            <button id="b${index}" onclick="deleteNote(this.id)">DELETE NOTE</button><br>
            <input type="radio" onclick="showImp(${index})" name="impcheck" "><lable>IMPORTANT</lable><br>
            <input type="radio" onclick="showUnImp(${index})" name="impcheck" "><lable>UNIMPORTANT</lable>
            </div>`
            htmlIn.innerHTML = html;
        });
    } else {
        htmlIn.innerHTML = "";
    }
}

function deleteNote(index) {
    // console.log("deleting node", index);
    let temp = localStorage.getItem("notes");
    let tempTitle = localStorage.getItem("notes");
    myobj = JSON.parse(temp);
    myobjTitle = JSON.parse(temp);
    // console.log(myobj);
    myobj.splice(index, 1);
    myobjTitle.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(myobj));
    localStorage.setItem("title", JSON.stringify(myobjTitle));
    showNotes();
}

function showImp(index) {
    // index = String(index);
    // let temp = localStorage.getItem("notes");
    // console.log(temp);
    // myobj = JSON.parse(temp);
    // temp = myobj[index];
    // console.log(myobj);
    // myobj.splice(index, 1);
    // myobj.unshift(temp);
    // localStorage.setItem("notes", JSON.stringify(myobj));
    let indexh = "h" + index;
    let indexp = "p" + index;

    document.getElementById(indexh).style.color = "red";
    document.getElementById(indexp).style.color = "red";
    document.getElementById(index).style.backgroundColor = "yellow";

}

function showUnImp(index) {
    let indexh = "h" + index;
    let indexp = "p" + index;
    console.log(index);
    document.getElementById(indexh).style.color = "black";
    document.getElementById(indexp).style.color = "black";
    document.getElementById(index).style.backgroundColor = "white";
}