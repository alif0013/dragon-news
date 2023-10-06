import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/AuthenticationSystem/Login/Login";
import Register from "../Pages/AuthenticationSystem/Regisiter/Register";
import Details from "../Pages/Details/Details";
import ProvateRoute from "../Pages/PrivateRoute/ProvateRoute";

 
const myCreatedRouter = createBrowserRouter ([

    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <ProvateRoute> <Details></Details> </ProvateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }


])

export default myCreatedRouter ;