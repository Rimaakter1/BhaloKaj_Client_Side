import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const UpdatePosts = () => {
    const { user } = useContext(authContext);
    const post = useLoaderData();
    console.log(post);
    const { id } = useParams();
    console.log(id);
    const { _id, thumbnail, title,
        location,
        volunteersNeeded,
        organizer,
        deadline,
        category,
        description,
    } = post || {};

    const [startDate, setStartDate] = useState(deadline);

    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteersNeeded = form.volunteersNeeded.value;
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
        }
        try {
            await axios.put(
                `http://localhost:5000/update-post/${_id}`,
                formData
            )
            form.reset()
            toast.success('Data Updated Successfully!!!')
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Add Volunteer Post</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Thumbnail</span>
                        </label>
                        <input
                            type="text"
                            name="thumbnail"
                            defaultValue={thumbnail}
                            placeholder="Enter thumbnail URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Post Title</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={title}
                            placeholder="Enter post title"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter description"
                            defaultValue={description}
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            name="category"
                            defaultValue={category}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">
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
                            <span className="label-text">Location</span>
                        </label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={location}
                            placeholder="Enter location"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Number of Volunteers Needed</span>
                        </label>
                        <input
                            type="number"
                            name="volunteersNeeded"
                            defaultValue={volunteersNeeded}
                            placeholder="Enter number of volunteers"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Organizer Name</span>
                        </label>
                        <input
                            type="text"
                            value={organizer?.name}
                            className="input input-bordered w-full bg-gray-100"
                            readOnly
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Organizer Email</span>
                        </label>
                        <input
                            type="email"
                            value={organizer?.email}
                            className="input input-bordered w-full bg-gray-100"
                            readOnly
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Update Post
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdatePosts;
