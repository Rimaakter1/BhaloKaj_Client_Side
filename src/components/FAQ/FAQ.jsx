import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import faq from "../../assets/faq.jpg"

const FAQ = () => {
    return (
        <div className='dark:bg-slate-900'>
            <div className='w-11/12 mx-auto py-0 md:py-20 lg:py-28 flex lg:flex-row flex-col'>
                <div className='w-full lg:w-[40%] mt-20 mr-5'>
                    <div className='flex items-center gap-2'>
                        <hr className='w-1/12 text-[#553739]' />
                        <p className='text-lg text-gray-400 '>QUESTION ANSWER</p>

                    </div>
                    <div>
                        <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold font-Exo text-black mt-3 mb-6 dark:text-white'>Frequently Asked Question</h1>
                        <p className='text-gray-500 dark:text-gray-400 '>Find answers to common questions about our mission, services, and how you can get involved in making a difference.</p>
                    </div>


                    <button className='flex items-center gap-2 mb-4 px-10 py-3 bg-[#553739] hover:bg-[#955E42] rounded-full text-white text-lg mt-6 border-none'><IoIosArrowRoundForward />
                        GET ANSWERED</button>
                </div>
                <div className='w-full lg:w-3/5 lg:relative'>
                    <div className='lg:mr-56'> <img className='h-[600px] object-cover' src={faq} alt="" /></div>
                    <div className='lg:absolute lg:bottom-24 lg:left-80 mt-5 lg:mt-0'>
                        <div className="collapse collapse-arrow bg-base-200 mb-5">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium bg-[#955E42] text-white">How can I become a volunteer?</div>
                            <div className="collapse-content">
                                <p>You can join us as a volunteer by signing up on our platform, browsing available opportunities, and submitting your request to participate in causes that resonate with you.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-5">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-[#955E42] text-white">What kind of events does your organization support</div>
                            <div className="collapse-content">
                                <p>We support a variety of events, including community clean-ups, charity drives, education workshops, and emergency relief efforts.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-5">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-[#955E42] text-white">What skills or qualifications do I need to become a volunteer?</div>
                            <div className="collapse-content">
                                <p>Most volunteer opportunities do not require specific skills or qualifications, just a passion for helping others. However, certain roles may require specific expertise, such as teaching, medical knowledge, or language skills. Training is often provided to ensure you feel confident and prepared. If you're unsure, reach out, and we'll guide you to the right opportunity!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;