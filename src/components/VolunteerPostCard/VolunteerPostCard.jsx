import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerPostCard = ({ post }) => {
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure>
                <img
                    src={post.thumbnail}
                    alt={post.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.deadline}</p>
                <div className="card-actions justify-end">
                    <Link to={`/volunteer-post/${post._id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default VolunteerPostCard;