import React from 'react';
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <li className='px-4'>Home</li>
        <li className='px-4'>All volunteer Need posts</li>
        <li className='px-4'>My Profile</li>
    </>

    return (
        <div className='w-11/12 md:w-10/12 mx-auto py-2'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className='w-28' src={logoImg} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-Open_Sans font-medium text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className='btn mr-4'>Login</Link>
                    <Link to="/register" className='btn'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;