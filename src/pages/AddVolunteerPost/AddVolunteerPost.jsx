import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import addPostImg1 from "../../assets/addPost-1.webp";
import addPostImg2 from "../../assets/addPost-2.jpeg";
import addPostImg3 from "../../assets/addPost-3.jpeg";
import addPostImg4 from "../../assets/addPost-4.jpeg";
import { Helmet } from "react-helmet";

const AddVolunteerPost = () => {
    const { user } = useContext(authContext);
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());

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
            await axios.post(`https://bhalo-kaj-server.vercel.app/add-volunteer`, formData, { withCredentials: true });
            form.reset();
            navigate("/manage-posts");
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your volunteer need post has been successfully submitted.",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen dark:bg-slate-800 bg-gray-50 py-6 pb-10">
            <Helmet>
                <title>BhaloKaj | My Profile | Add Volunteer Post </title>
            </Helmet>
            <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid grid-cols-2 gap-4 w-full">
                    <img
                        src={addPostImg1}
                        alt="Image 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <img
                        src={addPostImg2}
                        alt="Image 2"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <img
                        src={addPostImg3}
                        alt="Image 3"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <img
                        src={addPostImg4}
                        alt="Image 4"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="w-full p-8 dark:bg-opacity-40 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                        Add Volunteer Post
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Thumbnail</span>
                            </label>
                            <input
                                type="text"
                                name="thumbnail"
                                placeholder="Enter thumbnail URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Post Title</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter post title"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Description</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Enter description"
                                className="textarea textarea-bordered w-full"
                                required
                            ></textarea>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Category</span>
                            </label>
                            <select
                                name="category"
                                className="select select-bordered w-full"
                                required
                            >
                                <option disabled value="">
                                    Select category
                                </option>
                                <option value="healthcare">Healthcare</option>
                                <option value="education">Education</option>
                                <option value="social service">Social Service</option>
                                <option value="animal welfare">Animal Welfare</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Location</span>
                            </label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Enter location"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Number of Volunteers Needed</span>
                            </label>
                            <input
                                type="number"
                                name="volunteersNeeded"
                                placeholder="Enter number of volunteers"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Deadline</span>
                            </label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Organizer Name</span>
                            </label>
                            <input
                                type="text"
                                value={user?.displayName}
                                className="input input-bordered w-full bg-gray-100"
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Organizer Email</span>
                            </label>
                            <input
                                type="email"
                                value={user?.email}
                                className="input input-bordered w-full bg-gray-100"
                                readOnly
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn bg-[#553739] border-none text-white w-full"
                        >
                            Add Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddVolunteerPost;
