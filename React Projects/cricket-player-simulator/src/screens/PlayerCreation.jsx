import React from 'react';
import "./PlayerCreation.css"
const Playercreation = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center h-vh-100">
                <div className="card p-3">
                    <h1>Create Player</h1>
                    <form>
                        <div className="row">
                            <input placeholder="First Name" className="form-control col-lg-6 my-2" />
                            <input placeholder="Last Name" className="form-control col-lg-6 my-2" />
                            <select className="form-select col-12 col-lg-6 my-2">
                                <option>Batsman</option>
                                <option>Bowler</option>
                                <option>Allrounder</option>
                                <option>Wicket-Keeper</option>
                            </select>
                            <select className="form-select col-12 col-lg-6 my-2">
                                <option defaultChecked={true} disabled>Country</option>
                                <option>India</option>
                                <option>Austarila</option>
                            </select>
                            <button className="btn btn-outline-success my-3 text-center w-auto">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Playercreation;
