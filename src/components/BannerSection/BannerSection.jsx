import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";
import slider4 from "../../assets/slider-4.jpg";
import { Link } from 'react-router-dom';

const BannerSection = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="relative w-full h-screen">
                    <img className="w-full h-screen object-cover" src={slider1} alt="" />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-Exo mb-5">Join Hands for a <span className='text-orange-600'>Better Future</span> </h2>
                        <p className="mt-4 text-lg font-Open_Sans mb-5">Become a part of our volunteer community and make a lasting impact today.</p>
                        <Link to="/volunteer-posts" className='bg-orange-950 text-white px-10 py-3 rounded-lg lg:rounded-full mt-5'>Explore Volunteer Posts</Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative w-full h-screen">
                    <img className="w-full h-screen object-cover" src={slider2} alt="" />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-Exo mb-5">Give Time, Change <span className='text-orange-600'>Lives</span> </h2>
                        <p className="mt-4 text-lg font-Open_Sans mb-5">Your time and dedication can help create a world of positive change.</p>
                        <Link to="/volunteer-posts" className='bg-orange-950 text-white px-10 py-3 rounded-lg lg:rounded-full '>Explore Volunteer Posts</Link>

                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative w-full h-screen">
                    <img className="w-full h-screen object-cover" src={slider3} alt="" />
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-Exo mb-5">Be the Change You <span className='text-orange-600'>Want to See</span> </h2>
                        <p className="mt-4 text-lg font-Open_Sans mb-5">Volunteer with us today and take the first step toward a better tomorrow.</p>
                        <Link to="/volunteer-posts" className='bg-orange-950 text-white px-10 py-3 rounded-lg lg:rounded-full mt-5'>Explore Volunteer Posts</Link>

                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative w-full h-screen">
                    <img className="w-full h-screen object-cover" src={slider4} alt="" />
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-Exo mb-5">Volunteer Today, <span className='text-orange-600'>Impact Tomorrow</span></h2>
                        <p className="mt-4 text-lg font-Open_Sans mb-5">Make a difference by helping others and contributing to meaningful causes.</p>
                        <Link to="/volunteer-posts" className='bg-orange-950 text-white px-10 py-3 rounded-lg lg:rounded-full mt-5'>Explore Volunteer Posts</Link>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSection;
