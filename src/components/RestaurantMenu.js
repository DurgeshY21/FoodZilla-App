import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    //  how to read a dynamic URL params
    const {resId} = useParams();

    // creating our own custom hook
    const restaurant = useRestaurant(resId);


    // Logic for dispatching and actions
    // dispatch is coming from a hook called useDispatch()
    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));  
        // grapes passing as action.payload
    }
   
return (!restaurant) ? <Shimmer/> :(
    <div  className="flex flex-col   justify-evenly">
    
        <div className="flex flex-row bg-orange-300 h-[300px] place-items-center  items-center justify-evenly ">
            <div>
            <h1 className="text-sm font-semibold">Restaurant id: {resId}</h1>
            <h2 className="text-lg font-bold">{restaurant?.info?.name}</h2>
            <img className="h-48 rounded-md"
            src = {IMG_CDN_URL + restaurant?.info?.cloudinaryImageId}/>
            </div>

            <div className=" ">
            <h3 className="text-3xl font-bold underline">{restaurant?.info?.areaName}</h3>
            <h3 className="pt-4 text-sm font-semibold">{restaurant?.info?.city}</h3>
            <h3 className="pt-3 text-sm font-semibold">{restaurant?.info?.avgRating}⭐</h3>
            <h3 className="pt-3 text-sm font-semibold">{restaurant?.info?.costForTwoMessage}</h3> 
            </div>

        </div>

            {/* Dispatch an actions now:- */}
            
        <div className="w-screen">
            <div className="align-items:center">
            <h1 className="text-2xl font-bold underline mx-80 p-8">Menu</h1>
            <ul>
                {
            Object.values(restaurant?.menu).map((item) => {
                return (
                    <>
                    
                    <li className="text-xl font-bold w-[855px] items-center mx-auto  p-5 shadow-xl hover:scale-105" key={item?.id}>{item?.title} ({item?.itemCards?.length})</li>
                    {item?.itemCards?.map((card) => (
                    <div className="flex flex-row w-[855px] items-center mx-auto  justify-between m-10">
                        <div className="">
                             
                             <h2 className="text-lg font-medium " key={card?.id}>{card?.card?.info?.name}</h2>
                             <h2 className="text-sm mt-1 w-[500px]">{card?.card?.info.description}</h2> 
                             <h2 className="font-bold text-sm mt-1">Rs.{card?.card?.info.price/100}</h2>
                             
                             
                        </div>

                       <div>
                            <img className="w-20  " src={IMG_CDN_URL + card?.card?.info.imageId} alt="Not Shown" />
                            <button className="px-6 text-white mx-auto  hover:scale-105 duration-800 cursor-pointer bg-green-500 rounded-md"
                            onClick = {() =>  addFoodItem(card)}>  Add</button>
                        </div>
                     </div>
                     
                ))}
                
            
                    </>
                )
            }
            )
            }
            </ul>
            </div>
        
        </div>
    
    </div>
    )
};

export default RestaurantMenu;