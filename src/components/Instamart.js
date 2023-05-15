import { useState,useContext } from "react";
import userContext from "../Utils/UserContext";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="bg-orange-300 border-orange-600 w-[900px] justify-center items-center mx-auto rounded-md mt-5 mb-5 p-5">
      <h2 className="font-bold text-xl ">{title}</h2>
       
       {/* Building our own Accordian Components */}
       {/* Material UI Accordian i.e show/hide*/}

      {isVisible ? (
        <button
          className="mt-5 cursor-pointer bg-black py-1 px-3 rounded-md text-white"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
        className="mt-5 cursor-pointer bg-black py-1 px-3 rounded-md text-white"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p className="mt-5 ">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("About");
  const {user}=useContext(userContext);
  return (
    <>
      {/* <h1 style={{margin:"20px 500px"}}>Instamart</h1> */}
      <div className="flex flex-col justify-center overflow-x-hidden">
      <Section
        title={"About Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
        }
        isVisible={visibleSection==="About"}
        setIsVisible={() => {
          setIsVisibleSection("About")
        }}
      />

      <Section
        title={"Team Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
        }
        isVisible={visibleSection==="Team"}
        setIsVisible={() => {
          setIsVisibleSection("Team")
        }}
      />
      <Section
        title={"Careers in Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
        }
        isVisible={visibleSection==="Careers"}
        setIsVisible={() => {
           setIsVisibleSection("Careers")
        }}
      />

      </div>
      {/* <h1>{user.name}</h1>
      <h1>{user.email}</h1> */}
    </>
  );
};
export default Instamart;
