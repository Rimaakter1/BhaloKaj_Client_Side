import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Login = () => {

    const { handleGoogleLogin, handleLogin } = useContext(authContext);
    const navigate = useNavigate();
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
                navigate('/');

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
                navigate('/');

            })
            .catch(err => {
                toast.error(err.message)
            });
    };



    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        Login
                    </button>
                </form>
                <div className="divider">OR</div>
                <button onClick={googleLogin} className="btn btn-outline w-full">
                    Login with Google
                </button>
                <p className="text-sm text-center mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;