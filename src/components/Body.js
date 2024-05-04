import ResCard, { isOpened } from "./ResCard";
//import ResLists from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import Footer from "./Footer";
import UserContext from "../utils/UserContext";
import { IoSearch } from "react-icons/io5";




//Bodysection
const Body = () => {
  let [listOfRestaurant, setlistOfRestaurant] = useState([]);

  let [filterRestaurant, setfilterRestaurant] = useState([]);

  let [searchText, setsearchText] = useState("");
    //console.log("Checked :",listOfRestaurant);

  const RestaurantCardIsOpened = isOpened(ResCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Custom hooks - for online status
  const onlineStatus = useInternetStatus();

  if (onlineStatus === false)
    return (
      <h2>
       
        Looks like you're offline !!! Please do check your internet
        connection....
      </h2>
    );

  // UseContext - To update the user name.... 

  const {logInUser, setUserName}  = useContext(UserContext);

  // Conditional rendering - using ternary operator
  return listOfRestaurant.length === 0 ?  (
    <Shimmer />
  ) : (
    <div className="mb-10 flex flex-col items-center min-h-[80px]">
      <div className="flex justify-center mt-6 max-[539px]:w-80 max-[539px]:h-10 h-12">
        <div className="mr-6 w-96 flex border-orange-600 border-solid border-2 rounded-md overflow-hidden">
          <input
            type="text" placeholder="Search....."
            className=" px-4 py-2 w-60 rounded-lg focus:outline-none flex-1 max-[539px]:w-40"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button className="px-4 py-2 bg-orange-600 text-white"
            onClick={() => {
              // Filter the restraunt cards and updte the UI
              //Search Text
              const filterRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterRestaurant(filterRestaurant);
              //console.log(searchText);
            }}
          >
             
             <IoSearch />
          </button>
        </div>

        <button
          className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-400 max-[539px]:text-xs max-[539px]:flex max-[539px]:items-center "
          onClick={() => {
            topRatedRestaurants = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilterRestaurant(topRatedRestaurants);
           // console.log("pankaj", topRatedRestaurants);
          }}
        >
           
          Top Rated Restaurant
        </button>
        <div className="search m-4 p-4 flex items-center">
          <label> User Name : </label>
          <input type="text" className=" border border-solid border-black p-1"  value={logInUser} onChange={(e)=> setUserName(e.target.value)} />
        </div>
      </div>
      <div className=" flex flex-wrap ">
        {filterRestaurant.map((restaurant) => (
          <Link
            className="m-3 p-3 w-60 bg-gray-200 shadow-md rounded-lg"
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant.info.id}
          >

            {
              restaurant.info.isOpen ? (<RestaurantCardIsOpened resData={restaurant}/>) : (<ResCard resData={restaurant} />) 
            }
             
            
            
          </Link>
        ))}
      </div>
      <Footer/>

        
    </div>
    
  );
 

};

export default Body;
