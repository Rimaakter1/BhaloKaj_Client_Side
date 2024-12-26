import { format } from 'date-fns';
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const VolunteerPostDetails = () => {

    const { id } = useParams();
    const post = useLoaderData();
    const { thumbnail, description, title, category, deadline, location, volunteersNeeded, organizer } = post || {};

    return (
        <div className="flex justify-center bg-gray-50 dark:bg-slate-800 py-8 px-4 md:px-6 lg:px-8">
            <div className="w-11/12 lg:w-10/12">
                <div className="bg-white dark:bg-black dark:bg-opacity-20 rounded-lg shadow-xl overflow-hidden">
                    <div className="lg:flex">
                        <div className="lg:w-1/2">
                            <img
                                src={thumbnail}
                                alt="Volunteer post"
                                className="w-full h-full object-cover rounded-t-lg lg:rounded-none lg:rounded-l-lg"
                            />
                        </div>

                        <div className="p-6 lg:w-1/2">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h2>
                            <p className=" text-gray-600 mt-2 dark:text-gray-100">{description}</p>
                            <div className="mt-4 space-y-2">
                                <p className='dark:text-white'><span className='font-bold dark:text-gray-300'>Category:</span> {category}</p>
                                <p className='dark:text-white'><span className='font-bold dark:text-gray-300'>Location:</span> {location}</p>
                                <p className='dark:text-white'><span className='font-bold dark:text-gray-300'>Volunteers Needed:</span> {volunteersNeeded}</p>
                                <p className='dark:text-white'><span className='font-bold dark:text-gray-300'>Deadline:</span> {format(new Date(deadline), 'P')}</p>
                                <p className='dark:text-white'><span className='font-bold dark:text-gray-300'>Organizer Name:</span> {organizer?.name}</p>
                                <p className='dark:text-white'><span className='font-bold dark:text-gray-300'>Organizer Email:</span> {organizer?.email}</p>
                            </div>
                            <div className="mt-6">
                                <Link
                                    to={`/volunteer-request/${id}`}
                                    state={{ post }}
                                    className="inline-block px-8 py-3 bg-[#553739] text-white rounded-lg shadow-md hover:bg-[#45302f] transition duration-200"
                                >
                                    Be a Volunteer
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerPostDetails;
