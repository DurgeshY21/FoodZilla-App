import './App.css';
import React, { Suspense } from "react";
import {useState} from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import { lazy } from 'react';
import UserContext from './Utils/UserContext';
import Shimmer from './components/Shimmer';
import { Provider } from 'react-redux';
import store from './Utils/store';
import Cart from './components/Cart';

// structure of our app: Planning
//  Header
//   -logo
//   -List-items
//   -cart
// Body
//     -Search Bar
//        -RestaurantList
//        -RestaurantCard (many card)
//           -Image
//           -Name
//           -rating
//           -cuisines
// Footer

// Dynamic import, lazy loading, dynamic binding, on-demand loading of instagram
const Instamart = lazy(() => import("./components/Instamart"));

function App() {
  
  // local state 
  // LoggedIn User
  const [user, setUser] = useState({
    name: "Durgesh",
    email: "durgeshy5226@gmail.com",
  });
  

  
  return (
    <Provider store={store}>
    <UserContext.Provider 
    value={{
      user: user,
      setUser: setUser,
    }}
    >
      <Header/>
      <Outlet/>
      <Footer/>
    </UserContext.Provider>
    </Provider>
  )
};

// creating our router

 const appRouter = createBrowserRouter([
  {
    // App component
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        // About component
        // now about is children of app component
        path: "/about",
        element: <About/>,
        errorElement: <Error/>,
        children : [
          {
          path: "profile",
          element: <Profile/>,
          },
        ],
      },
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path: "/instamart",
        element: ( <Suspense fallback={<Shimmer/>}>
                     <Instamart/>
                 </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// render acc to appRouter configuration using RouterProvider
 root.render(<RouterProvider router={appRouter} />);
 

 
export default App;
