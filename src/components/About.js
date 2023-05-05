import { Outlet } from "react-router-dom";
import Profile from "./Profile";
const About = () => {
   return (
    <div className="border-orange-600 bg-orange-400  text-center rounded-lg w-[800px] h-[550px] justify-center items-center mx-auto mt-11 mb-11 p-10 sm:flex-1 sm:flex-wrap">
        <h1 className="text-3xl font-bold ">About Us</h1>
        <h2 className="text-xl font-bold mt-8 "> Welcome to Food Zilla</h2>
        <p className="text-lg mt-5 overflow-x-hidden">Food Zilla app allow you to order from a nearby restaurant at their convenience. The customers can get their order delivered, they can pick it up themselves or they can dine in. The restaurants receive the order on the restaurant app and prepare the meal.</p>
        <p className="text-lg mt-5">Food-delivery apps allow customers to order from a nearby restaurant at their convenience. The customers can get their order delivered, they can pick it up themselves or they can dine in. The restaurants receive the order on the restaurant app and prepare the meal.</p>
        <p className="text-lg mt-5">The ability to pick up the customer's order anywhere is the Seamless app's most cherished feature. For instance, if you are traveling to the office, you might request your oder to be delivered there instead of at your residence.</p>
    </div>
   )
}


export default About;