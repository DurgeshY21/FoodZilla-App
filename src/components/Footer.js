import {FaInstagram}  from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

const Footer =() =>{
    return(
      <>
      <div className="bottom-0  flex flex-col bg-black text-white cursor-pointer overflow-x-hidden">
           <div className="flex flex-col md:flex-row justify-evenly my-12 md:my-8 ">
		           <div className="flex flex-col gap-3 cursor-pointer">
                   <h1 className="font-semibold text-2xl">Company</h1>
                      <ul className="flex flex-col gap-3">
                         <li >About</li>
                         <li>Team</li>
                         <li>Careers</li>
                         <li>Contact</li>
                      </ul>
                </div>
            <div className="flex flex-col gap-3 cursor-pointer">
                    <h1 className="font-semibold text-2xl">Contact</h1>
                       <p>Help & Support </p>
                       <p>Partner with Us</p>
                       <p>Ride with Us</p>
      
             </div>
             <div className="flex flex-col gap-3 cursor-pointer">
                    <h1 className="font-semibold text-2xl">Legal</h1>
                      <p>Privacy policy</p>
                      <p>Terms</p>
                      <p>Security</p>
                      <p>Sitemap</p>
             </div>
            <div className="flex flex-col gap-3 cursor-pointer">
                <h1 className="font-semibold text-2xl">Social Links</h1>
                   <ul className="flex flex-row gap-5 w-[200px] " >
                       <FaInstagram/>
                       <FaLinkedin/>
                       <FaGithub/>
                       <FaTwitter/>
                   </ul>
             </div>
          </div>
          <div className="h-1 bg-white m-5 p-0"></div>
            <div className="flex flex-col justify-around items-center p-9 cursor-pointer">
               <p>Copyright © 2023  Made By Durgesh</p>
               
    </div>
   </div>
  </>

    );
};



    export default Footer;