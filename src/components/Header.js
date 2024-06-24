import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    const [ btnName , SetbBtnName] = useState("Login");
    const OnlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);

    //subscribing
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    return (
        <div className="Header flex justify-between bg-pink-100 shadow-lg ">
            <div>
                <img 
                className="Logo w-36"
                alt="res-logo"
                src= {LOGO_URL} />
            </div>
            <div className="nav-items flex items-center">
            <ul className="flex">
                <li className="m-4">Online Status : {OnlineStatus ? "Online" : "Offline" } </li>
                <li className="m-4"><Link to = "/">Home</Link></li>
                <li className="m-4"> <Link to = "/About">About us</Link> </li>
                <li className="m-4"> <Link to = "/Grocery">Grocery</Link> </li>
                <li className="m-4"><Link to = "/Contact">Contact us</Link></li>
                <li className="m-4 font-bold"> <Link to = "/Cart">cart  {cartItems.length} items </Link> </li>
                <li className="font-bold">{loggedInUser}</li>
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