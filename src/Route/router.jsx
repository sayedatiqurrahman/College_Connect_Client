import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Colleges from "../Pages/colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

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
            }
            , {
                path: "/login",
                element: <Login />
            }
        ]
    },
]);

export default router