import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import PrivateRoute from "./PrivateRoute";
import AllVolunteerPosts from "../pages/AllVolunteerPosts/AllVolunteerPosts";
import VolunteerPostDetails from "../pages/VolunteerPostDetails/VolunteerPostDetails";
import BeAVolunteer from "../pages/BeAVolunteer/BeAVolunteer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/volunteer-posts")
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
            },
            {
                path: "volunteer-post/:id",
                element: <PrivateRoute> <VolunteerPostDetails></VolunteerPostDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/volunteer-post/${params.id}`)
            },
            {
                path: "volunteer-request/:id",
                element: <BeAVolunteer></BeAVolunteer>
            }


        ]
    },

]);

export default router;