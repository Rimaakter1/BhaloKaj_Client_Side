import React, { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";
import { compareAsc } from 'date-fns'
import { toast } from "react-toastify";
import axios from "axios";


const BeAVolunteer = () => {
    const { user } = useContext(authContext);
    const location = useLocation();
    const post = location.state?.post;
    // const [status] = useState("requested");



    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target
        // const status = form.status.value
        const suggestion = form.suggestion.value
        const postId = post._id

        // if (user?.email ===email)
        //     return toast.error('Action not permitted!')

        // if (compareAsc(new Date(), new Date(post.deadline)) === 1)
        //     return toast.error('Deadline Crossed, Bidding Forbidden!')


        const requestData = {
            postId,
            suggestion,
            status: 'requested',
            volunteerEmail: user?.email,
            volunteerName: user?.displayName,
        }

        console.log(requestData);

        try {
            const { data } = await axios.post(
                `http://localhost:5000/volunteer-request`, requestData)
            form.reset()
            toast.success('request Successful!!!')
            console.log(data)
        } catch (err) {
            console.log(err)
            toast.error(err?.response?.data)
        }
    }


    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Volunteer Request Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Thumbnail</span>
                    </label>
                    <input
                        type="text"
                        value={post.thumbnail}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Post Title</span>
                    </label>
                    <input
                        type="text"
                        value={post.title}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        value={post.description}
                        readOnly
                        className="textarea textarea-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input
                        type="text"
                        value={post.category}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        value={post.location}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number of Volunteers Needed</span>
                    </label>
                    <input
                        type="number"
                        value={post.volunteersNeeded}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input
                        type="text"
                        value={new Date(post.deadline).toLocaleDateString()}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Organizer Name</span>
                    </label>
                    <input
                        type="text"
                        value={post.organizerName}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Organizer Email</span>
                    </label>
                    <input
                        type="email"
                        value={post.organizerEmail}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Volunteer Name</span>
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
                        <span className="label-text">Volunteer Email</span>
                    </label>
                    <input
                        type="email"
                        value={user?.email}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                {/* <div className="form-control mb-4">
                    <label className="label">Status</label>
                    <input
                        type="text"
                        value={status}
                        name="statuss"
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div> */}


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Suggestion</span>
                    </label>
                    <textarea
                        placeholder="Your suggestion..."
                        name="suggestion"
                        className="textarea textarea-bordered w-full"
                    />
                </div>



                <div className="form-control">
                    <button className="btn btn-primary w-full">Request</button>
                </div>
            </form>
        </div>
    );
};

export default BeAVolunteer;
