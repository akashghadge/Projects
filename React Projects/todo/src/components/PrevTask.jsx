import React, { useState } from "react";
import Delete from "@material-ui/icons/Delete"
import Button from "@material-ui/core/Button/Button"
import Add from "@material-ui/icons/Add"

function PrevTask(props) {
    let value = props.value;
    let index = props.index;
    let id = props.id;

    let [lineState, SetLineState] = useState(false);
    function lineThrough() {
        SetLineState(!lineState);
    }
    return (

        <>
            <div className="notes">
                <Button id={index} onClick={lineThrough} onWheel={props.onSelect}>
                    {
                        !lineState ? (<Delete className="ButtonDelete" />) : (<Add className="ButtonAdd" />)
                    }
                </Button>
                <p className="noteText" style={lineState ? { textDecoration: "line-through" } : { textDecoration: "none" }} id={id}>{value}</p>
            </div>
        </>
    );
}

export default PrevTask;