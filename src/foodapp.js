import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy } from "react";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";  // Redux Create bridge between store - application step -2 
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



/**
 * Header
 *   - Logo
 *   -Nav Item
 *
 * Body
 *
 *   -Search bar
 *   -RestaurantContainer
 *     -Restaurant Card
 *        -Img
 *        -Name of Restaurant, star rating, cuisine, delivery time
 *
 * Footer
 *    -Copyright
 *    -Links
 *    -Address
 *    -Contact
 *
 *
 */

const Grocerys = lazy(() => import("./components/Grocery"));


//Main Section
const FoodContainer = () => {

   const [userName, setUserName] = useState();

   //Authentication - UseContext
     useEffect(()=> {
       
      //Mak an API call and send username and password
      const data = {
         name : "Pankaj Jaiswal"
      }
      setUserName(data.name);
     }, []);



  return (
    <Provider store={appStore}>   
       <UserContext.Provider value={{ logInUser : userName, setUserName }}> {/**  {UserContext.Provider} wrap all the app  and if you want {UserContext.Provider} to use specific portion you can use too.. */}
        <div className="app">
          {/* <UserContext.Provider value={{ logInUser : "Elon Musk" }}> -"Elon Musk" will only contain in header component*/}
             <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>

  );
};

const appRouter = createBrowserRouter([
 {
  path: "/",
  element: <FoodContainer />,
  children: [
    {
      path: "/",  
      element: <Body />,
    },
    {
      path: "/aboutUs",  
      element: <AboutUs />,
    },                    
    {
      path: "/contactUs",  
      element:   <ContactUs />,
    },
    {
      path: "/restaurants/:resId",  
      element: <RestaurantMenu />,
    },
    {
      path: "/grocery",  
      element: 
      <Suspense fallback={<h2>It's Loading...</h2>}><Grocerys /></Suspense>,
    },
    {
      path: "/cart",  
      element: <Cart />,
    },
  ],
  errorElement: <Error />
 }
 

]);





const root = ReactDOM.createRoot(document.getElementById("root"));

//  In early we load the component 
// root.render(<FoodContainer />);

//  Load through the router component 
root.render(<RouterProvider router={appRouter} />);
