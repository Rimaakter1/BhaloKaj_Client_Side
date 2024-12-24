import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VolunteerPostCard from '../../components/VolunteerPostCard/VolunteerPostCard';

const AllVolunteerPosts = () => {

    const posts = useLoaderData();
    console.log(posts);

    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    posts.map(post => <VolunteerPostCard key={post._id} post={post}></VolunteerPostCard>)
                }

            </div>

        </div>
    );
};

export default AllVolunteerPosts;