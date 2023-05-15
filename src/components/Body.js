import { restaurantList } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";

// props- properties
const Body = () => {
    
    // this is how you create a variable in javascript
    // searchText is a local variable
    // const searchTxt = "KFC";

    // useState is used to create a state variables.
    // this is how you create a state variable in React
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    // useEffect Hook
    useEffect(() => {
      // API call
      getRestaurants();
     
    }, []);

    async function getRestaurants() {
      const data = await fetch(
 "https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999");
      const json = await data.json();
      console.log(json);

      // optional chaining
      // below code will give you all the restaurants i.e rendering our whole page
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    console.log("render");
   
    // custom hook i.e useOnline()
    const isOnline = useOnline();
    if(!isOnline) {
      return <h1>OFFLINE- Please check your internet connection</h1>
    }

    // Conditional Rendering
    // 1. If restaurants is empty => Shimmer UI
    // 2. If restaurants has data => Actual data UI

    if (!allRestaurants) return null;

return allRestaurants?.length === 0  ? (<Shimmer/> ) :  (
<>
{/* Search Bar */}
      <div className=" flex flex-row search-container p-5 bg-white my-5 items-center justify-center overflow-x-hidden ">
          <input
            type="text"
            className="focus:outline-orange-300 p-3 m-2 text-xl w-[500px] border-solid border-2 border-orange-300 text-slate-300 "
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
             } }
          />

         <button className="p-3 m-2 bg-orange-400 hover:bg-gray-300 text-white rounded-md w-[200px]" 
          onClick={() => {
            // here we need to filter the data i.e restaurantList
            const data = filterData(searchText, allRestaurants);
            // Update the state also i.e. restaurants
            setFilteredRestaurants(data);
          }}>
          Search</button>
      </div>


{/* Restaurant List */}
      <div className="flex flex-wrap">
        {/* write logic for no restaurants found here */}
     { 
       filteredRestaurants.map((restaurant) => {
        return (
        <Link to={"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}>
          <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
        </Link>
        );
      })
     }
     {/* you can also do this using spread operator */}
     {/* <RestaurantCard {...restaurantList[0].data}/>
     <RestaurantCard {...restaurantList[1].data}/>
     <RestaurantCard {...restaurantList[2].data}/>
     <RestaurantCard {...restaurantList[3].data}/>
     <RestaurantCard {...restaurantList[4].data}/>
      */}
     </div>
</>
    )
  };

  export default Body;