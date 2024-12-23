import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
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
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter photo URL"
                            name='photoUrl'
                            className="input input-bordered w-full"
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
                        Register
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-primary hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;