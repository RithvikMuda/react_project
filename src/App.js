import React , {lazy , Suspense, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About"; 
import Contact from "./components/Contact"; 
import Error from "./components/Error"; 
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {  useState  } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";
// import Grocery from "./components/Grocery"; 

const Grocery = lazy(() => import("./components/Grocery"));

 const AppLayout = () => {
    const [userName,setUserName] = useState();
useEffect(()=>{
    const data = {
        name: "Rithvik Mooda",
    };
    setUserName(data.name);
},[])

    return (
        <Provider store={appStore}> 
        <div className="app">
           
           <UserContext.Provider value={{loggedInUser:userName , setUserName}}> 
            <Header />
            <Outlet />
            </UserContext.Provider>
        </div>
        </Provider>
    );
 }

 const appRouter = createBrowserRouter([
    {path: "/",
     element: <AppLayout />,
     children: [
        {path: "/",
        element: <Body />
        },
        {path: "/about",
        element:<About/>},
         {
          path:"/Contact",
          element:<Contact/>
        },
        {
            path: "/Grocery",
            element: <Suspense
            fallback= {<h1>Loading</h1>}
            ><Grocery /></Suspense> 
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu />
          },
          {
            path:"/Cart",
            element:<Cart/>
          }

    ],
     errorElement:<Error />

    }
 ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<RouterProvider router={appRouter}/>);

//react components
