import CategoryItemLists from "./CategoryItemLists";
import { useState } from "react";

const RestaurantCategory = ({ itemCategories, showItems, setShowIndex }) => {
  // console.log("Category :", itemCategories);
  
  // const [showItems, setShowItems] = useState(false) ;

  const handleClick = () =>{
  //   console.log("Clicked");
        setShowIndex();
 }
 
  return (
    <div>
      {/** Accordion Header Section */}
      <div className="w-6/12 bg-gray-300 !important shadow-lg  mx-auto my-4  p-2 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick} >
          <span className="font-bold text-lg">
            {itemCategories.title} ({itemCategories.itemCards.length})
          </span>
              {showItems ? <span >⩔</span> : <span >⩓</span> }
        </div> 

        {/** Accordian Body Section */}
        {showItems &&  < CategoryItemLists items={itemCategories.itemCards} parent ="menuItem" />

        }
      </div>
    </div>
  );
};

export default RestaurantCategory;
