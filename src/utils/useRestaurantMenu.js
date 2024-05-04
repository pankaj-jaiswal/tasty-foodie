// Custom hooks -useRestaurantMenu()


import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constant";



const useRestaurantMenu = (resId) => {
   
     const[restInfo, setRestInfo] = useState(null);

    useEffect(()=>{
      
        fetchData();

    },[]);

    const fetchData = async () =>{
       const data = await fetch(MENU_API + resId);
       const json = await data.json();

       setRestInfo(json.data);
       console.log("pankaj",json);
       
    }

  return restInfo;
}


export default useRestaurantMenu;