import { createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ServiceDetails from "../pages/service details/ServiceDetails";
import PrivateRoute from "./private route/PrivateRoute";
import ErrorPage from "../pages/error page/ErrorPage";
import Profile from "../pages/profile/Profile";
import LoginSuccess from "../pages/login success/LoginSuccess";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/login-success',
                element: <PrivateRoute>
                    <LoginSuccess></LoginSuccess>
                </PrivateRoute>
            }
        ]
    }
])

export default router;