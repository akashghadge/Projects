import React from "react";

function PrevTask(props) {
    let value = props.value;
    let index = props.index;
    let id = props.id;
    return (
        <>
            <div className="notes">
                <button className="buttonDelete" name={index} onClick={props.onSelect}>Delete</button>
                <p className="noteText" id={id}>{value}</p>
            </div>
        </>
    );
}

export default PrevTask;