import React, { useState } from "react";
import PrevTask from "./PrevTask";
import Button from "@material-ui/core/Button/Button"
import Add from "@material-ui/icons/Add"
function MainDisplay() {
    const [currentDataInuputText, SetCurrentInputText] = useState("");
    function inputField(event) {
        SetCurrentInputText(event.target.value);
    }


    const [DataInputState, SetInputSet] = useState([]);
    function AddTask() {
        if (currentDataInuputText.length >= 3) {
            SetInputSet((prevTasks) => {
                let newTasks = [...prevTasks, currentDataInuputText];
                return (newTasks)
            });
            SetCurrentInputText("");
        }
    }
    // console.log(DataInputState);
    function deleteNote(event) {
        // console.log(event.currentTarget.id)
        const currIndex = event.currentTarget.id;
        SetInputSet((prevTasks) => {
            return prevTasks.filter((arrElem, index) => {
                return parseInt(currIndex) !== index;
            })
        })
    }
    return (
        <>

            <div id="mainDis">
                <h4 id="heading">TO DO List</h4>
                <div>
                    <input id="inputBox" type="text" name="inputText" onChange={inputField} value={currentDataInuputText} ></input>
                    <Button id="addTaskButton" onClick={AddTask}><Add /></Button>
                </div>
                {DataInputState.map((value, index) => {
                    {/* console.log(value, index) */ }
                    return (<PrevTask value={value} index={index} id={index} onSelect={deleteNote} ></PrevTask>)
                })}

            </div>
        </>
    )
}

export default MainDisplay;
