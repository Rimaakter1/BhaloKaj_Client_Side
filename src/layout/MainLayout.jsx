import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;