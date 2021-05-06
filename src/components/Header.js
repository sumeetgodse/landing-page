import React from 'react'
import "../styles/header.css"
import logo from "./Mark.png"

export default function Header() {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
        <div className="topnav" id="myTopnav">
            <a href="#home"><img src={logo} className="logo" /></a>
            <a href="#product" className="product">Product</a>
            <a href="#features">Features</a>
            <a href="#market">Marketplace</a>
            <a href="#about">Company</a>
            <a href="#free__trial" className="free__trial">Start free trial</a>
            <a href="#login" className="login">Login</a>
            <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}
