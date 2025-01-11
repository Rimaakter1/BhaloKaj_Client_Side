import React from 'react';
import volunteer1 from '../../assets/team-1.jpg';
import volunteer2 from '../../assets/team-2.jpg';
import volunteer3 from '../../assets/team-3.jpg';
import volunteer4 from '../../assets/team-4.jpg';

const VolunteerGroup = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                    Meet Our Incredible Volunteers
                </h2>
                <p className="text-lg text-gray-600 mb-12 px-6 md:px-0">
                    Our volunteers are the heart and soul of our community. Get to know the passionate people behind our impactful projects.
                </p>
            </div>

            <div className="px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="hover:border hover:border-[#553739] hover:border-dashed bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <img
                            src={volunteer1}
                            alt="Volunteer 1"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <div className='p-6'>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h4>
                            <p className="text-gray-600 mb-4">
                                John has been with us for over 3 years. He loves organizing community events and helping young people get involved.
                            </p>
                            <button className="bg-[#553739] text-white p-2 rounded-lg  font-bold">
                                View Profile
                            </button>
                        </div>
                    </div>


                    <div className="hover:border hover:border-[#553739] hover:border-dashed bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <img
                            src={volunteer2}
                            alt="Volunteer 2"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <p className='p-6'>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h4>
                            <p className="text-gray-600 mb-4">
                                Jane is passionate about environmental conservation and leads our beach cleanup initiatives.
                            </p>
                            <button className="bg-[#553739] text-white p-2 rounded-lg  font-bold">
                                View Profile
                            </button>
                        </p>
                    </div>

                    <div className="hover:border hover:border-[#553739] hover:border-dashed bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <img
                            src={volunteer3}
                            alt="Volunteer 3"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <div className='p-6'>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Mark Johnson</h4>
                            <p className="text-gray-600 mb-4">
                                Mark has been an integral part of our fundraising team, raising awareness and funds for several causes.
                            </p>
                            <button className="bg-[#553739] text-white p-2 rounded-lg  font-bold">
                                View Profile
                            </button>
                        </div>
                    </div>

                    <div className="hover:border hover:border-[#553739] hover:border-dashed bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <img
                            src={volunteer4}
                            alt="Volunteer 4"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <div className='p-6'>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Emily Davis</h4>
                            <p className="text-gray-600 mb-4">
                                Emily organizes community outreach programs to ensure everyone has the opportunity to volunteer.
                            </p>
                            <button className="bg-[#553739] text-white p-2 rounded-lg  font-bold">
                                View Profile
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default VolunteerGroup;
