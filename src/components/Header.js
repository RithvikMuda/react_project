import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [ btnName , SetbBtnName] = useState("Login");
    return (
        <div className="Header">
            <div>
                <img 
                className="Logo"
                alt="res-logo"
                src= {LOGO_URL} />
            </div>
            <div className="nav-items">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li> <Link to = "/About">About us</Link> </li>
                <li><Link to = "/Contact">Contact us</Link></li>
                <li>cart</li>
            </ul>
            <button className="Login" onClick={
            ()=>{
            btnName==="Login"? SetbBtnName("Logout") : SetbBtnName("Login")}           }>
            {btnName}</button>
            </div>
            
        </div>
             )
 };
 export default Header ;