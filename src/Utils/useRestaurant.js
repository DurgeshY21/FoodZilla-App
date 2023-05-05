import {useState, useEffect} from "react";
import { FETCH_MENU_URL } from "../config";


// creating our custom hook
// useRestaurant will return restaurant data i.e
// Get data from API

const useRestaurant = (resId) => {
   const [restaurant, setRestaurant] = useState(null);
   
// Get data from API
   useEffect(() => {
    getRestaurantInfo();
},[restaurant]);

const getRestaurantInfo = async () => {
    try {
      /* Live Data */
      const response = await fetch(FETCH_MENU_URL + resId);
      const res_data = await response.json();
      const menuItemsList = res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
      const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

      /* Mock Data */
      //const res_data =  restaurantMenu;

      const menu = menuItemsList.map(item => {
        if((item.card.card["@type"] === itemCategory) || (item.card.card["@type"] === NestedItemCategory) ) {
          return item.card.card;
        }
      })

      const modifiedData = {
        info : res_data.data.cards[0].card.card.info,
        menu : menu.filter(value => value !== undefined)
      };

      setRestaurant(modifiedData)
    } catch (error) {
      console.log(error);
    }
  };

  return restaurant;
};

export default useRestaurant;