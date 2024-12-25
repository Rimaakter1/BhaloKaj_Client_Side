import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageMyPosts = () => {
    const [myPosts, setMyPosts] = useState([]);
    const { user } = useContext(authContext);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/volunteer-posts/${user.email}`)
            .then((response) => {
                setMyPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching volunteer posts:", error);
            });
    }, [user?.email]);

    console.log(myPosts);


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
                    await Swal.fire({
                        title: "Deleted!",
                        text: "Your post has been deleted.",
                        icon: "success",
                    });

                    const remainingPosts = myPosts.filter(
                        (myPost) => myPost._id !== _id
                    );
                    setMyPosts(remainingPosts);
                }
            } catch (error) {
                console.error("Error deleting post:", error);
                await Swal.fire({
                    title: "Error!",
                    text: "There was an issue deleting your post.",
                    icon: "error",
                });
            }
        }
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPosts.map(post => (
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <Link to={`/update-posts/${post._id}`}>Update</Link>
                                        <button onClick={() => handleDelete(post._id)}>Delete</button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageMyPosts;