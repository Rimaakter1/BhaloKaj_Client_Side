import React from 'react';
import logo from "../../assets/logo.png"
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai';
import { FaSquareFacebook } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-base-200 text-base-content p-10 dark:bg-gray-950'>
            <div className="w-11/12 mx-auto flex lg:flex-row flex-col justify-between">
                <aside>
                    <img className='w-40' src={logo} alt="" />
                    <p className='dark:text-white'>
                        Making a difference, one step at a time.
                    </p>
                </aside>
                <nav className='flex flex-col dark:text-white space-y-3'>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Homepage</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Our Serve</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <nav className='flex flex-col dark:text-white space-y-3'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title dark:text-white">Subscribe Our Newslater
                    </h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text dark:text-white">Get Our Latest Update & New Offers Sales Discount

                            </span>
                        </label>
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Email"
                                className="input input-bordered rounded-full" />
                            <button className="btn border-none bg-[#553739] join-item ml-2 rounded-full text-white">Subscribe</button>
                        </div>
                    </fieldset>
                    <div className='flex items-center gap-5 text-3xl mt-5 dark:text-white'>
                        <a className='text-2xl' href="https://www.facebook.com/"><FaSquareFacebook /></a>
                        <a href="https://x.com/home?lang=en"><AiFillTwitterSquare /></a>
                        <a href="https://www.youtube.com/"><FaYoutube /></a>
                        <a href="https://www.instagram.com/"><AiFillInstagram /></a>
                    </div>
                </form>

            </div>
            <div className="mt-10  text-center p-4">
                <hr className='mb-4' />
                <aside>
                    <p className='dark:text-white'>Copyright © {new Date().getFullYear()} - All right reserved by Rima Akter</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;