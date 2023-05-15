import { IMG_CDN_URL } from "../config";

const FoodItem = ({item}) => {
  return (
    <div className="w-56 p-2 m-5 shadow-lg border overflow-x-hidden">
      <img className="rounded-md mb-2" src= {IMG_CDN_URL + item.card.info.imageId} />
      <h2 className="font-bold text-xl">{item.card.info.name}</h2>
      <h4>Rs. {item.card.info.price / 100}</h4>
      <button className="bg-green-500 items-center w-52 rounded-md text-white h-8 mt-5 mb-2 hover:scale-105">Order Now</button>
       
    </div>
  );
};

export default FoodItem;



