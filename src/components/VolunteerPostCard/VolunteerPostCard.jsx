import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerPostCard = ({ post }) => {

    const { thumbnail, title, category, deadline } = post || {};

    return (
        <div className="card bg-base-100 w-full shadow-xl hover:border hover:border-[#553739] hover:border-dashed dark:bg-gray-900 ">
            <figure className='p-5'>
                <img className='w-full h-56 object-cover rounded-xl'
                    src={thumbnail}
                    alt={title} />
            </figure>
            <div className="text-center pb-5">
                <h2 className="text-xl font-bold text-center text-black font-Exo  dark:text-gray-300">{title}</h2>
                <h4 className='dark:text-white'>{category}</h4>
                <h4 className='dark:text-white'>{format(new Date(deadline), 'P')}
                </h4>
                <div className="card-actions justify-center mt-5 mx-5">
                    <Link to={`/volunteer-post/${post._id}`} className="btn bg-[#553739] border-none text-white text-lg font-bold w-full hover:bg-[#955E42]hover:bg-[#955E42]">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default VolunteerPostCard;