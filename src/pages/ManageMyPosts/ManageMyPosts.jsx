import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { ImCancelCircle } from 'react-icons/im';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

const ManageMyPosts = () => {
    const [myPosts, setMyPosts] = useState([]);
    const [myRequests, setMyRequests] = useState([]);
    const { user } = useContext(authContext);

    // volunteer need posts
    useEffect(() => {
        axios
            .get(`http://localhost:5000/volunteer-posts/${user.email}`, { withCredentials: true })
            .then((response) => {
                setMyPosts(response.data);
            })
            .catch((error) => {
                toast.error("Error fetching volunteer posts:", error);
            });
    }, [user?.email]);

    // volunteer requests
    useEffect(() => {
        axios
            .get(`http://localhost:5000/volunteer-request/${user.email}`, { withCredentials: true })
            .then((response) => {
                setMyRequests(response.data);
            })
            .catch((error) => {
                toast.error("Error fetching volunteer requests:", error);
            });
    }, [user?.email]);

    // post delete 
    const handleDelete = async (_id) => {
        const confirmation = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (confirmation.isConfirmed) {
            try {
                const response = await axios.delete(`http://localhost:5000/post/${_id}`);
                if (response.data.deletedCount) {
                    Swal.fire("Deleted!", "Your post has been deleted.", "success");
                    setMyPosts(myPosts.filter((myPost) => myPost._id !== _id));
                }
            } catch (error) {
                Swal.fire("Error!", "There was an issue deleting your post.", "error");
            }
        }
    };

    // request cancel 
    const handleCancellation = async (_id) => {
        const confirmation = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!",
        });

        if (confirmation.isConfirmed) {
            try {
                const response = await axios.delete(`http://localhost:5000/request/${_id}`);
                if (response.data.deletedCount) {
                    Swal.fire("Canceled!", "Your request has been canceled.", "success");
                    setMyRequests(myRequests.filter((request) => request._id !== _id));
                }
            } catch (error) {
                Swal.fire("Error!", "There was an issue canceling your request.", "error");
            }
        }
    };

    return (
        <div className="bg-slate-50 dark:bg-gray-900">
            <Helmet>
                <title>BhaloKaj | My Profile | Manage My Posts </title>
            </Helmet>
            <div className="w-full md:w-10/12 mx-auto py-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        My Volunteer Posts
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Here are the posts you have created for volunteering opportunities.
                        Manage them as needed!
                    </p>
                </div>

                {myPosts.length === 0 ? (
                    <div className="text-center text-gray-600 dark:text-gray-400 font-semibold py-6">
                        <h2>No volunteer posts available. Create your own!</h2>
                    </div>
                ) : (
                    <div className="overflow-x-auto mt-6">
                        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
                            <thead>
                                <tr className="bg-gradient-to-r from-gray-400 to-gray-600 text-white text-sm font-medium dark:bg-gray-700">
                                    <th className="py-3 px-4"></th>
                                    <th className="py-3 px-4 text-left">Post Title</th>
                                    <th className="py-3 px-4 text-left">Description</th>
                                    <th className="py-3 px-4 text-left">Category</th>
                                    <th className="py-3 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myPosts.map((post) => (
                                    <tr
                                        className="text-sm border-b hover:bg-gray-50 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        key={post._id}
                                    >
                                        <td className="py-3 px-4">
                                            <div className="avatar">
                                                <div className="mask h-16 w-16 rounded-full overflow-hidden border-2 border-gray-400 dark:border-gray-600">
                                                    <img
                                                        src={post.thumbnail}
                                                        alt={post.title}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-300">
                                            {post.title}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                                            {post.description.length > 30
                                                ? post.description.substring(0, 30) + "..."
                                                : post.description}
                                        </td>
                                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{post.category}</td>
                                        <td className="py-6 px-4 flex justify-center gap-3">
                                            <Link
                                                to={`/update-posts/${post._id}`}
                                                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md transition duration-200 ease-in-out flex items-center gap-2 dark:bg-green-800 dark:hover:bg-green-700"
                                            >
                                                <FaEdit />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(post._id)}
                                                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md transition duration-200 ease-in-out flex items-center gap-2 dark:bg-red-800 dark:hover:bg-red-700"
                                            >
                                                <RiDeleteBin6Fill />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <div className="w-full md:w-10/12 mx-auto py-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        My Volunteer Requests
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Below are the volunteer requests you have made. Cancel them if
                        necessary.
                    </p>
                </div>

                {myRequests.length === 0 ? (
                    <div className="text-center text-gray-600 dark:text-gray-400 font-semibold py-6">
                        <h2>No volunteer requests found. Start by making a new request!</h2>
                    </div>
                ) : (
                    <div className="overflow-x-auto mt-6">
                        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
                            <thead>
                                <tr className="bg-gradient-to-r from-gray-400 to-gray-600 text-white text-sm font-medium dark:bg-gray-700">
                                    <th className="py-3 px-4"></th>
                                    <th className="py-3 px-4 text-left">Post Title</th>
                                    <th className="py-3 px-4 text-left">Suggestion</th>
                                    <th className="py-3 px-4 text-left">Category</th>
                                    <th className="py-3 px-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myRequests.map((request) => (
                                    <tr
                                        className="text-sm border-b hover:bg-gray-50 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        key={request._id}
                                    >
                                        <td className="py-3 px-4">
                                            <div className="avatar">
                                                <div className="mask h-16 w-16 rounded-full overflow-hidden border-2 border-gray-400 dark:border-gray-600">
                                                    <img
                                                        src={request.thumbnail}
                                                        alt={request.title}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-300">
                                            {request.title}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                                            {request.suggestion.length > 30
                                                ? request.suggestion.substring(0, 30) + "..."
                                                : request.suggestion}
                                        </td>
                                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{request.category}</td>
                                        <td className="py-6  flex justify-center gap-3">
                                            <button
                                                onClick={() => handleCancellation(request._id)}
                                                className="text-red-600 hover:text-red-700 text-2xl font-semibold py-2 rounded-md transition duration-200 ease-in-out flex items-center gap-2 "
                                            >
                                                <ImCancelCircle />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>

    );
};

export default ManageMyPosts;
