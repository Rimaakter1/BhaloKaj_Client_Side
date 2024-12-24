import React from 'react';
import VolunteerPostCard from '../VolunteerPostCard/VolunteerPostCard';
import { Link } from 'react-router-dom';

const VolunteerNeedSection = ({ posts }) => {

    console.log(posts);

    return (
        <div>

            <div>
                {
                    posts.map(post => <VolunteerPostCard key={post._id} post={post}></VolunteerPostCard>)
                }

                <Link to="/volunteer-posts">All Posts</Link >

            </div>

        </div>
    );
};

export default VolunteerNeedSection;