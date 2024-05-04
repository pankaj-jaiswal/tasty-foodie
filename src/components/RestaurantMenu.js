import Shimmer from "./Shimmer";
import { useParams}  from "react-router-dom"
import  useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./Restaurantcategory";
import { useState } from "react";
const RestaurantMenu = () => {
   
    const { resId } = useParams();

    const restInfo = useRestaurantMenu(resId);  //Custom hooks -useRestaurantMenu()

    const[showIndex, setShowIndex] = useState(null); 
 
   // console.log("pankaj",restInfo);

 const { name, cuisines, costForTwoMessage, avgRating  } = restInfo?.cards[2]?.card?.card?.info || {};

 const { itemCards } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

 
 const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => e?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    return (restInfo === null) ? <Shimmer /> :(
         <div className="text-center">
            <h1 className="font-bold m-2 p-2 text-2xl">{name}</h1>
            <p className="font-bold  text-lg">{cuisines.join(" , ")} - {costForTwoMessage}</p>

           {/** categories Accordions */}
           {/* Controlled Component */}
           {categories.map((category, index) => (
                <RestaurantCategory key ={category?.card?.card?.title}   itemCategories ={category?.card?.card} showItems= {index === showIndex && true}  setShowIndex={() => setShowIndex(index)}/> 
           ))}    
     
         </div>
    );
};

export default RestaurantMenu;