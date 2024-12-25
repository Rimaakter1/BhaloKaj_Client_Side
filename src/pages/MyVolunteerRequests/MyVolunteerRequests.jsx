import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyVolunteerRequests = () => {
    const [myRequests, setMyRequests] = useState([]);
    const { user } = useContext(authContext);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/volunteer-request/${user.email}`)
            .then((response) => {
                setMyRequests(response.data);
            })
            .catch((error) => {
                console.error("Error fetching volunteer posts:", error);
            });
    }, [user?.email]);

    console.log(myRequests);


    const handleCancellation = async (_id) => {
        const confirmation = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!",
        });

        if (confirmation.isConfirmed) {
            try {
                const response = await axios.delete(`http://localhost:5000/request/${_id}`);
                if (response.data.deletedCount) {
                    await Swal.fire({
                        title: "Cancel!",
                        text: "Your post has been Cancel.",
                        icon: "success",
                    });

                    const remainingRequests = myRequests.filter(
                        (myRequest) => myRequest._id !== _id
                    );
                    setMyRequests(remainingRequests);
                }
            } catch (error) {
                console.error("Error deleting post:", error);
                await Swal.fire({
                    title: "Error!",
                    text: "There was an issue cancellation your post.",
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
                            myRequests.map(request => (
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
                                        <button onClick={() => handleCancellation(request._id)}>Cancel</button>
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

export default MyVolunteerRequests;