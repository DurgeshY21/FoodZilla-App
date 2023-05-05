import {useState, useEffect} from "react";

// custom hook from scratch
const useOnline = () => {
     const [isOnline, setIsOnline] = useState(true);
     
    //  but we want this to be called only once when the page loads i.e we will do this by using useEffect
     useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        };
        const handleOffline = () => {
            setIsOnline(false);
        };
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };

     }, []);

    // return boolean value either true/false
  return isOnline;
};

export default useOnline;