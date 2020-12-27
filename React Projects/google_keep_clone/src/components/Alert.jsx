import React, { useState } from "react"
import ReactDOM from "react-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from "@material-ui/core/Button/Button"
import Delete from "@material-ui/icons/Delete"
const Alert = (props) => {
    let colorClass = `alert alert-${props.status}  fade show`
    let [displayIn, setDislay] = useState("")
    function deleteAlert() {
        setDislay("none")
    }
    return (
        <>
            <div className={colorClass} role="alert" style={{ display: displayIn, height: "maxContent" }}>
                <Button style={{ left: "0px", display: "inline", width: "10px", outline: "none" }} onClick={deleteAlert}>
                    <Delete></Delete>
                </Button>
                <strong>{props.status.toUpperCase()}</strong> {props.text}
            </div>
        </>
    )
}
export default Alert;
