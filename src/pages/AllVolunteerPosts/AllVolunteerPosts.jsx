import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VolunteerPostCard from '../../components/VolunteerPostCard/VolunteerPostCard';
import axios from 'axios';

const AllVolunteerPosts = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const allPosts = async () => {
            const { data } = await axios.get(
                `http://localhost:5000/volunteer-posts${search ? `?title=${search}` : ""}`
            );
            setPosts(data);
        };
        allPosts();
    }, [search]);

    return (
        <div className='bg-gray-50 dark:bg-slate-800'>
            <div className="w-11/12 md:w-10/12 mx-auto py-6">
                <div className="flex mb-6">
                    <div className="relative w-full">
                        <label className="label absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-5 w-5 dark:text-white">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                        <input
                            type="text"
                            name="search"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="input input-bordered w-full pl-8 pr-4 py-2 rounded-lg dark:bg-opacity-70 dark:placeholder:text-gray-50 text-white"
                            placeholder="Enter Post Title"
                        />
                    </div>

                    <button
                        className="ml-4 px-6 py-2 bg-[#553739] text-white rounded-lg hover:bg-[#955E42]"
                        onClick={() => setSearch(search)}
                    >
                        Search
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        posts.length > 0 ?
                            posts.map(post => (
                                <VolunteerPostCard key={post._id} post={post} />
                            ))
                            :
                            <div className="col-span-full text-center text-gray-500 font-semibold">
                                No posts available.
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllVolunteerPosts;
