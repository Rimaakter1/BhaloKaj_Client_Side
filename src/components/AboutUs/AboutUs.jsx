import React from 'react';
import aboutImg1 from "../../assets/aboutUs-1.jpg";
import aboutImg2 from "../../assets/aboutUs-2.jpg";
import { SlFlag } from 'react-icons/sl';



const AboutUs = () => {
    return (
        <div className='dark:bg-slate-950'>
            <div className='w-11/12 lg:w-full mx-auto flex lg:flex-row flex-col pt-10 md:pt-20 lg:pt-40 gap-12 pb-8 '>
                <div className='w-full lg:w-[40%] ml-2 lg:ml-20 relative'>
                    <img className='rounded-2xl' src={aboutImg2} alt="" />
                    <div className='absolute  hidden lg:flex gap-4 bg-[#955E42] p-10 w-8/12 rounded-3xl bottom-24 -left-14'>
                        <SlFlag className='text-white text-5xl'></SlFlag>
                        <div className='text-white'>
                            <h4 className='font-bold text-xl mb-2'>we're making a difference
                            </h4>
                            <p>Empowering communities and creating lasting positive change.</p>
                        </div>

                    </div>
                </div>
                <div className='w-full lg:w-1/2 mt-4 lg:mt-6 mr-5'>
                    <div className='flex items-center gap-2'>
                        <hr className='w-1/12 text-[#553739]' />
                        <p className='text-lg text-gray-400 '>ABOUT US</p>

                    </div>
                    <div>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold font-Exo text-black mt-3 mb-5 dark:text-white'>Learn more about our mission, values, and the impact we've made.</h1>
                        <p className='text-gray-500 '>Discover our mission to inspire action and create positive change. Rooted in values of integrity, compassion, and community, we strive to make a meaningful impact. Learn how our efforts are shaping a brighter future for all.</p>
                    </div>

                    <div className='flex lg:flex-row flex-col mt-10'>
                        <div className='w-full lg:w-1/2 mt-4'>
                            <h3 className='text-[#955E42] font-bold text-4xl mb-6 font-Exo'>365</h3>
                            <h4 className='text-black text-xl font-bold mb-3 font-Open_Sans dark:text-white'>Charity Events Done</h4>
                            <p className='text-gray-500 font-Open_Sans'>Explore the inspiring charity events we've hosted, making a lasting impact and bringing communities together for a greater cause.</p>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <img className='rounded-3xl' src={aboutImg1} alt="" />
                        </div>
                    </div>

                    <button className='px-10 py-3 bg-[#553739] hover:bg-[#955E42] rounded-full text-white text-lg mt-4 border-none'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;