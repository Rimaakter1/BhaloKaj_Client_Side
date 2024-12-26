import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import updateImg from "../../assets/updateImg.jpg";
import updateImg2 from "../../assets/updateImg-2.jpeg";
import updateImg3 from "../../assets/updateImg-3.jpg";
import updateImg4 from "../../assets/updateImg-4.jpg";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdatePosts = () => {
    const { user } = useContext(authContext);
    const post = useLoaderData();
    const { id } = useParams();
    const { _id, thumbnail, title, location, volunteersNeeded, organizer, deadline, category, description } = post || {};

    const [startDate, setStartDate] = useState(deadline);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteersNeeded = parseInt(form.volunteersNeeded.value);
        const deadline = startDate;

        const formData = {
            thumbnail,
            title,
            location,
            volunteersNeeded,
            organizer: {
                email: user?.email,
                name: user?.displayName,
            },
            deadline,
            category,
            description,
        };

        try {
            await axios.put(`http://localhost:5000/update-post/${_id}`, formData);
            form.reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Post updated successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8 dark:bg-gray-800">
            <Helmet>
                <title>BhaloKaj | Update Volunteer Post </title>
            </Helmet>
            <div className="lg:w-10/12 mx-auto flex flex-row items-center">
                <div className="w-1/2  hidden lg:block">
                    <div className="grid grid-cols-2 gap-2">
                        <img
                            src={updateImg}
                            alt="Volunteer Image"
                            className="h-screen w-full object-cover"
                        />
                        <img
                            src={updateImg2}
                            alt="Volunteer Image"
                            className="h-screen w-full object-cover"
                        />
                        <img
                            src={updateImg3}
                            alt="Volunteer Image"
                            className="h-screen w-full object-cover"
                        />
                        <img
                            src={updateImg4}
                            alt="Volunteer Image"
                            className="h-screen w-full object-cover"
                        />
                    </div>
                </div>


                <div className="w-full lg:w-1/2  bg-white rounded-r-lg shadow-lg dark:bg-gray-700">

                    <div className="w-full p-8">
                        <h2 className="text-2xl font-bold text-center mb-7 text-gray-800 dark:text-white">Update Volunteer Post</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="form-control">
                                <label className="label text-gray-600 dark:text-gray-300">
                                    <span className="label-text dark:text-white">Thumbnail</span>
                                </label>
                                <input
                                    type="text"
                                    name="thumbnail"
                                    defaultValue={thumbnail}
                                    placeholder="Enter thumbnail URL"
                                    className="input input-bordered w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label text-gray-600 dark:text-gray-300">
                                    <span className="label-text dark:text-white">Post Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={title}
                                    placeholder="Enter post title"
                                    className="input input-bordered w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label text-gray-600 dark:text-gray-300">
                                    <span className="label-text dark:text-white">Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="Enter description"
                                    defaultValue={description}
                                    className="textarea textarea-bordered w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                    required
                                ></textarea>
                            </div>

                            <div className="form-control">
                                <label className="label text-gray-600 dark:text-gray-300">
                                    <span className="label-text dark:text-white">Category</span>
                                </label>
                                <select
                                    name="category"
                                    defaultValue={category}
                                    className="select select-bordered w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                    required
                                >
                                    <option value="">Select category</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="education">Education</option>
                                    <option value="social service">Social Service</option>
                                    <option value="animal welfare">Animal Welfare</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label text-gray-600 dark:text-gray-300">
                                    <span className="label-text dark:text-white">Location</span>
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    defaultValue={location}
                                    placeholder="Enter location"
                                    className="input input-bordered w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label text-gray-600 dark:text-gray-300">
                                    <span className="label-text dark:text-white">Number of Volunteers Needed</span>
                                </label>
                                <input
                                    type="number"
                                    name="volunteersNeeded"
                                    defaultValue={volunteersNeeded}
                                    placeholder="Enter number of volunteers"
                                    className="input input-bordered w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label text-gray-600 dark:text-gray-300">
                                    <span className="label-text dark:text-white">Deadline</span>
                                </label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    className="input input-bordered w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label text-gray-600 dark:text-gray-300">
                                    <span className="label-text dark:text-white">Organizer Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={organizer?.name}
                                    className="input input-bordered w-full p-3 rounded-md bg-gray-100 cursor-not-allowed dark:bg-gray-700 dark:text-white"
                                    readOnly
                                />
                            </div>
                            <div className="form-control">
                                <label className="label text-gray-600 dark:text-gray-300">
                                    <span className="label-text dark:text-white">Organizer Email</span>
                                </label>
                                <input
                                    type="email"
                                    value={organizer?.email}
                                    className="input input-bordered w-full p-3 rounded-md bg-gray-100 cursor-not-allowed dark:bg-gray-700 dark:text-white"
                                    readOnly
                                />
                            </div>

                            <button type="submit" className="btn bg-[#553739] border-none hover:bg-[#955E42] w-full py-3 rounded-md text-white transition duration-300">
                                Update Post
                            </button>
                        </form>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default UpdatePosts;
