import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AddVolunteerPost = () => {

    const { user } = useContext(authContext);
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());



    const handleSubmit = async e => {
        e.preventDefault()
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
            thumbnail
        }
        console.log(formData);

        try {
            await axios.post(`http://localhost:5000/add-volunteer`, formData)
            form.reset()
            navigate('/')
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your volunteer need post has been successfully submitted.",
                showConfirmButton: false,
                timer: 1500
            });
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
                            <span className="label-text">Location</span>
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
                            <span className="label-text">Number of Volunteers Needed</span>
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
                            value={user?.displayName}
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
                            value={user?.email}
                            className="input input-bordered w-full bg-gray-100"
                            readOnly
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Add Post
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddVolunteerPost;
