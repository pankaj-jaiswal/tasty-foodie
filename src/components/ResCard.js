
//RestaurantCard - repeating the cards so create function

import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData?.info; //?. - optional chaining
    return (
      <div className="res-card p-1">
        <img
          className="m-1  res-logo"
          alt="res-1"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold my-4">  {name}</h3>
        <p> - {cuisines.join(", ")}</p>
        <p> - {avgRating} rating</p>
        <p> - {costForTwo}</p>
        <p> - {resData.info.sla.deliveryTime} minutes</p>
      </div>
    );
  };


  //Higher order Component

 export const isOpened = (ResCard) => {
    return (props) =>{
       return( 
          <div>
            <label className = "absolute bg-black text-white m-2 p-2 rounded-lg">Is Open</label>
            <ResCard {...props}/>
          </div>
       )
    }
 }

  export default ResCard;