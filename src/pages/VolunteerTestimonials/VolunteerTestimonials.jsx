import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const VolunteerTestimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            feedback: "It was a great experience volunteering at the event. I met amazing people and made a positive impact.",
            event: "Beach Cleanup",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Jane Smith",
            feedback: "Volunteering at the fundraiser was an eye-opening experience. I felt incredibly fulfilled.",
            event: "Charity Fundraiser",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Mark Johnson",
            feedback: "Helping at the local animal shelter was a rewarding experience, and I can't wait to volunteer again!",
            event: "Animal Shelter Support",
            image: "https://via.placeholder.com/150",
        },
        // Add more testimonials here...
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-screen-lg">
            <h1 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-10">
                Volunteer Testimonials
            </h1>
            <Swiper
                spaceBetween={30}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="p-4 flex justify-center">
                        <div className="testimonial-card w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 p-8 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 opacity-20"></div>

                            {/* Testimonial Content */}
                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mr-4"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold text-white tracking-wider">{testimonial.name}</h3>
                                        <p className="text-sm text-white opacity-80">{testimonial.event}</p>
                                    </div>
                                </div>
                                <p className="text-white text-lg leading-relaxed">{testimonial.feedback}</p>

                                {/* Badge / Icon for emphasis */}
                                <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg text-gray-800 text-xl font-bold">
                                    ⭐
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default VolunteerTestimonials;
