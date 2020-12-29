import React, { useState } from "react"
import ReactDOM from "react-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from "@material-ui/core/Card/Card"
import Button from "@material-ui/core/Button/Button"
import Add from '@material-ui/icons/Add';
import Alert from "./Alert"
import Notes from "./Notes"
const Create = () => {
    let [inputValue, setInputValue] = useState({
        title: "",
        content: ""
    })
    function inputChange(event) {
        let { name, value } = event.target;
        setInputValue((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    let [finalInputValue, setFinalInputValue] = useState([])
    function submitData() {
        if (inputValue.title.length >= 3 && inputValue.content.length >= 3) {
            setFinalInputValue((prev) => {
                return ([...prev, inputValue])
            })
            setInputValue({
                title: "",
                content: ""
            })
        }
    }


    const deleteNote = (event) => {
        const currIndex = event.currentTarget.name;
        setFinalInputValue((prevTasks) => {
            return prevTasks.filter((arrElem, index) => {
                return parseInt(currIndex) !== index;
            })
        })
    }

    console.log(finalInputValue);
    return (
        <>
            <div class="position-relative overflow-hidden text-center bg-light createNotes" >
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal" id="addNoteHead">Add Note</h1>
                    <input type="text" placeholder="type a title" id="titleInput" name="title" onChange={inputChange} value={inputValue.title}></input>
                    <textarea placeholder="type a note" id="textInput" name="content" onChange={inputChange} value={inputValue.content}></textarea>
                    <br></br>
                    <Button id="addButton" onClick={submitData}><Add></Add></Button>
                </div>

            </div>
            {
                finalInputValue.map((element, index, arr) => {
                    return (
                        <Notes title={element.title} content={element.content} id={index} onSelect={deleteNote}></Notes>
                    )
                })
            }
        </>
    )
}
export default Create;
