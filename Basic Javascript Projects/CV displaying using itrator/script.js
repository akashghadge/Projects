let obj = [{
        Name: "Akash Ghage",
        Email: "akashghadge@gmail.com",
        MobileNo: 1234567899
    },
    {
        Name: "Ash Ghage",
        Email: "ashghadge@gmail.com",
        MobileNo: 1234567891
    },
    {
        Name: "Ak Ghage",
        Email: "akghadge@gmail.com",
        MobileNo: 1234567892
    }
]

console.log(obj);

function itrators(values) {
    let nextIndex = 0;

    return {
        next: function () {
            if (values.length > nextIndex) {
                return {
                    value: values[nextIndex++],
                }
            } else {
                return {
                    value: values[nextIndex = 0],
                }
            }

        }
    }
}

let akash = itrators(obj);
// console.log(akash.next().value);

function display(objShow) {
    let str = "";
    let displayCV = document.getElementById("displayCV");
    str = `
    <div class="contianer">
        <h2>Name : ${objShow.Name}</h2>
        <h2>Email : ${objShow.Email}</h2>
        <h2>Mobile No : ${objShow.MobileNo}</h2>
    </div>
    `
    displayCV.innerHTML = str;
}

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    let objShow = akash.next();
    let objShowValue = objShow.value;
    display(objShowValue);
})