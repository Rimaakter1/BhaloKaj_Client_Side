import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const VolunteerPostDetails = () => {

    const { id } = useParams();
    const post = useLoaderData();

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={post.thumbnail}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <Link to={`/volunteer-request/${id}`}
                            state={{ post }}
                            className="btn btn-primary">Be a Volunteer</Link >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerPostDetails;