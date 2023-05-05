import {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import useOnline from "../Utils/useOnline";
import { useSelector } from "react-redux";

const loggedInUser  = () => {
  // API call to checks authentication
  return true;
}
export const Title = () => (
    <a href="/">
    <img
    className="h-[100px]  w-[100px] ml-10"
    alt="logo"
     src="https://play-lh.googleusercontent.com/1mVQadySYUgJmfc3rE096mcQkEGCyia-jvp2foMbUcxUZhlDi4_JCi87D5LPbd594TY"
    />
    </a>
  ); 

  const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    
    const isOnline = useOnline();
    
    // redux toolkit
    const cartItems = useSelector(store => store.cart.items);

    return (
      <div className="flex justify-between place-items-center bg-white-50 shadow-lg ">
        <Title/>
      {/* <BrowserRouter> */}
      <div className="nav-items">
      <ul className="flex py-10"> 

       <Link to="/"> 
       <li className="px-4 text-xl font-bold">Home</li>
       </Link>

        <Link to="/about">
          <li className="px-4 text-xl font-bold">About</li>
        </Link>

        <Link to="/contact">
          <li className="px-4 text-xl font-bold">Contact</li>
        </Link>
         
        <Link to="/cart">
        <li className="px-4 text-xl font-bold">Cart- {cartItems.length}</li>
       </Link> 

        <Link to="/instamart">
          <li className="px-4 text-xl font-bold">Instamart</li>
        </Link>
      </ul>
      </div>
      {/* </BrowserRouter> */}
      
      {/* <h1>{isOnline? "✅" : "❌" }</h1> */}

      {/* using context anywhere  */}
      <span className="p-10 font-bold text-red-900"></span>

      {
        isLoggedIn ?   
        (<button className=" bg-orange-400 border-orange-700 hover:scale-105 text-white rounded-md text-lg  m-1 p-2 w-[100px] "
          onClick = { () => setIsLoggedIn(false) }>Logout</button>) 
        : 
        (<button className=" bg-orange-400 text-white rounded-md text-lg  m-1 p-2 w-[100px]"
          onClick = { () => setIsLoggedIn(true)}>Login</button>)
      }
      

      </div>
    );
  };

  export default Header;