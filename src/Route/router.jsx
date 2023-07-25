import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Colleges from "../Pages/colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import CollegeDetails from "../Pages/CollegeDetails";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./privateRoute";
import ErrorPage from "../components/ErrorPage";
import Loading from "../components/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            }, {
                path: "/colleges",
                element: <Colleges />
            }, {
                path: "/admission",
                element: <Admission />
            }, {
                path: "/my-college",
                element: <PrivateRoute><MyCollege /></PrivateRoute>
            },
            {
                path: "/collegeDetails/:id",
                element: <PrivateRoute><CollegeDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://collegeconnect-orpin.vercel.app/collegeDetails/${params.id}`)
            }
            , {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/loading",
                element: <Loading />
            }
        ]
    },
]);

export default router