import React from 'react';
import VolunteerPostCard from '../VolunteerPostCard/VolunteerPostCard';
import { Link } from 'react-router-dom';
import { div } from 'motion/react-client';

const VolunteerNeedSection = ({ posts }) => {

    return (
        <div className='py-10 md:py-20 lg:py-40 bg-gray-100 dark:bg-slate-800'>
            <div className='w-11/12 md:w-10/12 mx-auto '>
                <div className='text-center'>
                    <h1 className='text-4xl text-black dark:text-white font-bold font-Exo mb-6'>Current Volunteer Opportunities</h1>
                    <p className='text-black mb-10 font-Open_Sans dark:text-white'>There are numerous opportunities to volunteer and support communities in need. Browse through the current volunteer posts and select the ones that best match your skills, interests, and availability. Whether you can give an hour a week or dedicate more time, your contribution makes a significant impact.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        posts.map(post => <VolunteerPostCard key={post._id} post={post}></VolunteerPostCard>)
                    }


                </div>
                <div className='text-center mt-8'>
                    <Link className='btn text-xl bg-[#955E42] text-white border-none' to="/volunteer-posts">See All</Link >

                </div>
            </div>
        </div>
    );
};

export default VolunteerNeedSection;