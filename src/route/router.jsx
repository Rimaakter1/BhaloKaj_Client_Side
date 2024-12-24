import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import PrivateRoute from "./PrivateRoute";
import AllVolunteerPosts from "../pages/AllVolunteerPosts/AllVolunteerPosts";
import VolunteerPostDetails from "../pages/VolunteerPostDetails/VolunteerPostDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "add-volunteer",
                element: <PrivateRoute> <AddVolunteerPost></AddVolunteerPost></PrivateRoute>
            },
            {
                path: "volunteer-posts",
                element: <AllVolunteerPosts></AllVolunteerPosts>,
                loader: () => fetch("http://localhost:5000/volunteer-posts")
            },
            {
                path: "volunteer-post/:id",
                element: <PrivateRoute> <VolunteerPostDetails></VolunteerPostDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/volunteer-post/${params.id}`)
            }


        ]
    },

]);

export default router;