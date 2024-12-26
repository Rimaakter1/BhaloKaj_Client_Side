import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { toast } from "react-toastify";
import axios from "axios";
import bgImg from "../../assets/pexels-shvetsa-5029855.jpg";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const BeAVolunteer = () => {
    const { user } = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
    const post = location.state?.post;
    const { _id, thumbnail, description, title, category, deadline, location: orgnizerLocation, volunteersNeeded, organizer } = post || {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const suggestion = form.suggestion.value;
        const postId = _id;
        const status = form.status.value;

        if (post.volunteersNeeded <= 0) {
            return toast.warning('No more volunteers needed for this post.');
        }
        if (user?.email === organizer?.email)
            return toast.error('Action not permitted!');



        const requestData = {
            thumbnail,
            description,
            title,
            category,
            deadline,
            location: orgnizerLocation,
            volunteersNeeded,
            organizer,
            postId,
            suggestion,
            status,
            volunteerEmail: user?.email,
            volunteerName: user?.displayName,
        };

        try {
            const { data } = await axios.post(`http://localhost:5000/volunteer-request`, requestData);
            form.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your request has been sent",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/manage-posts');
        } catch (err) {
            const errorMessage = err?.response?.data || 'An error occurred. Please try again.';
            toast.error(errorMessage);
        }
    };

    return (
        <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bgImg})` }}>
            <Helmet>
                <title>BhaloKaj | Be A Volunteer Page </title>
            </Helmet>

            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="py-10 relative z-10">
                <div className="max-w-3xl mx-auto p-8 dark:bg-black dark:bg-opacity-25 bg-white bg-opacity-60 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700 dark:text-gray-200">Volunteer Request Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Thumbnail</span>
                            </label>
                            <input
                                type="text"
                                value={thumbnail}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Post Title</span>
                            </label>
                            <input
                                type="text"
                                value={title}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Description</span>
                            </label>
                            <textarea
                                value={description}
                                readOnly
                                className="textarea textarea-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Category</span>
                            </label>
                            <input
                                type="text"
                                value={category}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Location</span>
                            </label>
                            <input
                                type="text"
                                value={orgnizerLocation}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Number of Volunteers Needed</span>
                            </label>
                            <input
                                type="number"
                                value={volunteersNeeded}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Deadline</span>
                            </label>
                            <input
                                type="text"
                                value={format(new Date(deadline), 'P')}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Organizer Name</span>
                            </label>
                            <input
                                type="text"
                                value={organizer?.name}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Organizer Email</span>
                            </label>
                            <input
                                type="email"
                                value={organizer?.email}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Volunteer Name</span>
                            </label>
                            <input
                                type="text"
                                value={user?.displayName}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Volunteer Email</span>
                            </label>
                            <input
                                type="email"
                                value={user?.email}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Status</span>
                            </label>
                            <input
                                type="text"
                                value="requested"
                                name="status"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Suggestion</span>
                            </label>
                            <textarea
                                placeholder="Your suggestion..."
                                name="suggestion"
                                className="textarea textarea-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <button className="btn border-none bg-[#553739] hover:bg-[#955E42] text-white w-full">Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BeAVolunteer;
