import {useDispatch, useSelector} from "react-redux";
import FoodItem from "./FoodItem";
// import { useDispatch } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
     
    // subscribe to our store using useSelector
    const cartItems = useSelector(store => store.cart.items);
    
    // dispatching an clearCart action
    const dispatch = useDispatch();
    const handleClearCart = () => {
         dispatch(clearCart());
    };


    return (
        <div className="flex flex-col h-[450px]">
            {/* <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
            <button className="bg-orange-400 text-white rounded-md p-2 m-4"
            onClick = {()=> handleClearCart()}> Clear Cart</button> */}
            
            <div className="flex">
            {cartItems.map((item) => (                
            <FoodItem key={item.id} item={item} />
            ))} 
            </div>
            <div>
            
            <button className="bg-green-500 border-green-900 text-white rounded-md p-2 m-4 hover:scale-105 w-48"
            onClick = {()=> handleClearCart()}> Clear Cart</button>
            {/* <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1> */}
            </div>
            
            
        </div>
    )
};

export default Cart;