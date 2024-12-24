import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VolunteerPostCard from '../../components/VolunteerPostCard/VolunteerPostCard';
import axios from 'axios';

const AllVolunteerPosts = () => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const allPosts = async () => {
            const { data } = await axios.get(
                `http://localhost:5000/volunteer-posts${search ? `?title=${search}` : ""}`
            )
            setPosts(data)
        }
        allPosts()
    }, [search])


    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>


            <div className='flex'>
                <label className="input input-bordered flex items-center gap-2">
                    <input name='search'
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        placeholder='Enter Post Title' className="grow" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>

                <button>Search</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    posts.map(post => <VolunteerPostCard key={post._id} post={post}></VolunteerPostCard>)
                }

            </div>

        </div>
    );
};

export default AllVolunteerPosts;