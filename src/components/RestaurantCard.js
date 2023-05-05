import { IMG_CDN_URL } from "../config"
import {useContext} from "react";
import UserContext from "../Utils/UserContext";
export const RestaurantCard = ({
    name,
    cuisines, 
    cloudinaryImageId, 
    lastMileTravelString,
  }) => {
    
    const {user} = useContext(UserContext);
    
    return (
      <div className="grid grid-flow-row  p-2 my-5 ml-11  rounded shadow-lg shadow-gray-200 bg-white dark:bg-gray-800 duration-300 hover:scale-110">
       {/* Lets see how you can use any other react element of an array-make it dynamic */}
        <img src={IMG_CDN_URL + cloudinaryImageId} className="rounded-t h-82 max-w-[430px] object-cover p-5 aspect-auto"/>
        <h2 className="text-base font-bold w-3/5 tracking-normal">{name}</h2>
        <h3 className="text-gray-dark text-xs w-4/5 overflow-hidden h-[32px]">{cuisines.join(",")}</h3>
        <h4 className="text-gray-500 dark:text-gray-400">{lastMileTravelString}</h4>
        
         
      </div>
    )
  }

  // grid grid-flow-row
  // p-2 my-5