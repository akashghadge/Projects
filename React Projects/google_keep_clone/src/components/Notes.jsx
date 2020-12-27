import React, { useState } from "react"
import ReactDOM from "react-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from "@material-ui/core/Button/Button"
import Delete from "@material-ui/icons/Delete"
const Notes = (props) => {
    return (
        <>
            <div className="container-sm Notes">
                <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h1 className="my-0 font-weight-normal">{props.title}</h1>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title pricing-card-title">{props.content}</h4>
                        <Button id="deleteNotes" name={props.id} onClick={props.onSelect}>
                            <Delete></Delete>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notes;
