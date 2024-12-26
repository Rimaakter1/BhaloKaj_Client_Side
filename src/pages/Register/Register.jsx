import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import register from '../../assets/volunteerImg.avif'
import { Helmet } from 'react-helmet';

const Register = () => {


    const { handleRegister, manageProfile } = useContext(authContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoUrl.value;
        const password = e.target.password.value;


        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter")
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter")
            return;
        }

        if (password.length < 6) {
            toast.error("Password must contain at least 6 characters")
            return;
        }

        handleRegister(email, password)
            .then(result => {
                manageProfile(name, photo);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have registered successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(err => {
                toast.error(err.message);
            });
    };


    return (
        <div className='bg-gray-200 dark:bg-slate-800 p-2'>
            <Helmet>
                <title>BhaloKaj | Registration Page </title>
            </Helmet>
            <div className="flex flex-col-reverse lg:flex-row w-full md:w-10/12 mx-auto  pt-0 lg:pt-10">
                <div className="md:w-1/2 w-full lg:h-screen p-8 bg-white dark:bg-opacity-35 rounded-l-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-200 font-Exo">Registration</h2>
                    <form onSubmit={handleSubmit} className="lg:space-y-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white text-lg font-bold font-Exo">Name</span>
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white text-lg font-bold font-Exo">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white text-lg font-bold font-Exo">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter photo URL"
                                name='photoUrl'
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text dark:text-white text-lg font-bold font-Exo">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <button type="submit" className="btn hover:bg-orange-900 border-none bg-[#553739] text-white font-bold font-Exo text-lg w-full">
                            Register
                        </button>
                        <p className=" text-center  dark:text-white text-lg font-bold">
                            Already have an account?
                            <a href="/login" className="text-primary hover:underline">
                                Login
                            </a>
                        </p>
                    </form>
                </div>
                <div className='w-full md:w-1/2  lg:h-screen'>
                    <img className='lg:h-screen object-cover w-full rounded-r-lg' src={register} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;