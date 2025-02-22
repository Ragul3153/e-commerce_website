import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Adminpanel from "../pages/Adminpanel";
import Register from "../Components/Register";
import Allproduct from "../pages/Allproduct";
import Allusers from "../pages/Allusers"

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "register",
                element : <Register/>
            },
            {
                path : "admin-panel",
                element : <Adminpanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <Allusers/>
                    },
                    {
                        path : "all-product",
                        element : <Allproduct/>
                    }
                ]
            }
        ]
    }
])

export default router