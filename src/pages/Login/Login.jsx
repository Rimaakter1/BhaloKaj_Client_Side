import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import loginImg from '../../assets/authImg.jpg';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { handleGoogleLogin, handleLogin } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();

    const googleLogin = async () => {
        try {
            const result = await handleGoogleLogin();
            if (result) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged in successfully with Google!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/");
            }
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed to login with Google!",
                text: error.message || "Please try again.",
                showConfirmButton: true
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleLogin(email, password)
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged in successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                toast.error(err.message);
            });
    };

    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${loginImg})` }}>
            <Helmet>
                <title>BhaloKaj | Login Page </title>
            </Helmet>
            <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-gray-500"></div>

            <div className="relative z-10 flex items-center justify-center  md:gap-12 h-full">
                <div className="w-full  max-w-md p-2 md:p-6 lg:p-8 dark:bg-black dark:bg-opacity-40 bg-white bg-opacity-80 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white md:mb-2 lg:mb-6">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4 lg:space-y-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white text-black text-lg font-bold">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white text-black text-lg font-bold">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <button type="submit" className="btn border-none hover:bg-orange-900 bg-[#553739] w-full text-white text-lg font-Exo mt-4">
                            Login
                        </button>
                    </form>
                    <button
                        onClick={googleLogin}
                        className="btn btn-outline w-full dark:text-white  text-lg font-bold text-gray-700 hover:bg-primary border-none hover:text-white mt-4"
                    >
                        Login with Google
                    </button>

                    <p className="text-lg text-center  mt-1 md:mt-4 lg:mt-6 dark:text-white text-blackfont-bold">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-primary font-semibold hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
