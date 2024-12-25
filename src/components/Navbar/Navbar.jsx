import React, { useContext } from 'react';
import logoImg from '../../assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip'
import ThemeToggle from '../ThemeToggle/ThemeToggle';


const Navbar = () => {

    const { user, logout } = useContext(authContext);
    const navigate = useNavigate();

    const links = <>
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-400 font-bold px-4" : "dark:text-white px-4")}>Home</NavLink>
        <NavLink to="/volunteer-posts" className={({ isActive }) => (isActive ? "text-red-400 font-bold px-4" : "dark:text-white px-4")}>All volunteer Need posts</NavLink>
        <div className="dropdown" >
            <NavLink tabIndex={0} role="button" className={({ isActive }) => (isActive ? "text-red-400 font-bold px-4" : "dark:text-white px-4")}>My Profile</NavLink>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 rounded-box z-[1] mt-3 w-52 p-2 shadow font-Open_Sans font-medium">
                <NavLink className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")} to="/add-volunteer">Add Volunteer need Post</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")} to="/manage-posts">Manage My Posts</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")} to="/volunteer-requests">My Volunteer Requests</NavLink>
            </ul>
        </div>
    </>


    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/');
            });
    };

    return (
        <div className='py-2 bg-base-100 dark:bg-slate-950'>
            <div className="lg:navbar lg:w-10/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown flex">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 dark:text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-Open_Sans font-medium text-lg dark:bg-slate-800">
                            {links}
                        </ul>
                        <img className='w-28' src={logoImg} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex mr-20">
                    <ul className="menu menu-horizontal font-Open_Sans font-medium text-lg">
                        {links}
                    </ul>
                </div>
                <div className="flex mt-10 lg:mt-0 justify-center items-center">
                    {

                        user ? (
                            <>
                                <img data-tooltip-id="my-tooltip"
                                    data-tooltip-content={user.displayName}
                                    data-tooltip-place="top" className='w-12 rounded-full mr-3' src={user.photoURL} alt="" />
                                <button onClick={handleLogout} className='btn bg-[#553739] text-white font-Exo text-lg font-semibold mr-2 border-none'>Logout</button>
                            </>
                        ) : (
                            <div>
                                <NavLink to="/login" className={({ isActive }) => (isActive ? "px-4 py-2 rounded-lg mr-2 bg-[#553739] text-white font-Exo text-lg font-semibold" : "dark:text-white px-4 py-2 rounded-lg text-black font-Exo text-lg font-semibold bg-gray-400 mr-2")} >Login</NavLink>
                                <NavLink to="/register" className={({ isActive }) => (isActive ? " px-4 py-2 rounded-lg mr-4 bg-[#553739] text-white font-Exo text-lg font-semibold" : "dark:text-white  px-4 py-2 rounded-lg bg-gray-400 text-black font-Exo text-lg font-semibold mr-4")}>Register</NavLink>
                            </div>)
                    }

                    <ThemeToggle></ThemeToggle>
                </div>
            </div>
            <Tooltip id="my-tooltip" />


        </div>

    );
};

export default Navbar;