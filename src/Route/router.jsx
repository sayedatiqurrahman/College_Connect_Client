import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Colleges from "../Pages/colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import CollegeDetails from "../Pages/CollegeDetails";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
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
                element: <MyCollege />
            },
            {
                path: "/collegeDetails/:id",
                element: <CollegeDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/collegeDetails/${params.id}`)
            }
            , {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            }
        ]
    },
]);

export default router