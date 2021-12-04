import React from 'react';
import Menu from "@material-ui/icons/Menu";
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary p-2">
            <a class="navbar-brand" href="/">
                <Menu />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/">Profile</a>
                    <a class="nav-item nav-link" href="/training">Training</a>
                    <a class="nav-item nav-link" href="/stats">Stats</a>
                    <a class="nav-item nav-link" href="/shedule">Shedule</a>
                    <a class="nav-item nav-link" href="/shedule">Finance</a>
                    <a class="nav-item nav-link" href="/shedule">Properties</a>
                    <a class="nav-item nav-link" href="/shedule">Next Match</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
