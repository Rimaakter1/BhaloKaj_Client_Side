import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const VolunteerPostDetails = () => {

    const { id } = useParams();
    const post = useLoaderData();
    console.log(id, post);

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
                        <button className="btn btn-primary">Be a Volunteer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerPostDetails;