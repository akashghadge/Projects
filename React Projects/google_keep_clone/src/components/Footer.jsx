import React, { useState } from "react"
import ReactDOM from "react-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Footer = () => {
    let date = new Date
    let year = date.getFullYear()
    return (
        <>
            <footer class="footer mt-auto py-3">
                <div class="container">
                    <span class="text-muted">Place sticky footer content here.</span>
                </div>
            </footer>
        </>
    )
}
export default Footer;