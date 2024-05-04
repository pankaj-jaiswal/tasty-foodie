import { useState,  useContext } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";
//Redux how to read the data(how many item add in cart) step - 4
import { useSelector } from "react-redux";

import Logo from "../../logo/logo1.png";




 
//Header section
const Header = () => {

    const [btnLoginToogle, setbtnLoginToogle] = useState("Login");

    const onlineStatus = useInternetStatus();

    const {logInUser} = useContext(UserContext);

    //Subscribing to the store using a selector step - 4.1

    const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className="flex justify-between shadow-lg to-blue-400 m-2 bg-slate-300">
        <div className="logo-container">
        <Link to="/"><img 
            className="w-20 m-5 rounded-full"
            src= {Logo}
            alt="check"
          /></Link> 
        </div>
        <div className="flex items-center px-4">
          <ul className="flex p-4 m-8">
            <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-4"><Link to="/aboutUs">About us</Link></li>
            <li className="px-4"><Link to="/contactUs">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold "><Link to="/cart"> 🛒 - {cartItems.length} item's </Link></li>
            <button className="login-btn" onClick= {() => {
             btnLoginToogle === "Login" ? setbtnLoginToogle("Logout") : setbtnLoginToogle("Login"); }}
            >{btnLoginToogle}</button>
            <li className="px-4 font-bold">{logInUser}</li>


           </ul>
        </div>
      </div>
    );
  };

  export default Header;