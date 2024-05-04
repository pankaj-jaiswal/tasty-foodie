import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    
   
    const {logInUser} = useContext(UserContext);

    return (
      <div className="w-full border border-solid bg-black shadow-lg py-5 px-2">
        <p className="text-cyan-500 text-center">© 2024. All Rights Reserved </p>
        <p className="text-cyan-500 text-right font-bold">{logInUser}</p>
      </div>
    );
  };
  
  export default Footer;
  