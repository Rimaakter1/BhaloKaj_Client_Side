import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import VolunteerPostCard from '../../components/VolunteerPostCard/VolunteerPostCard';
import { format } from 'date-fns';

const AllVolunteerPosts = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [isTableLayout, setIsTableLayout] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axios.get(
                `https://bhalo-kaj-server.vercel.app/volunteer-posts${search ? `?title=${search}` : ""}`
            );
            setPosts(data);
        };
        fetchPosts();
    }, [search]);

    return (
        <div className='bg-gray-50 dark:bg-slate-800'>
            <Helmet>
                <title>BhaloKaj | All Volunteer Need Posts Page </title>
            </Helmet>
            <div className="w-11/12 md:w-10/12 mx-auto py-6">
                <div className="flex lg:flex-row flex-col mb-6 justify-between items-center">
                    <div className="relative w-full lg:w-[74%]">
                        <label className="label absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300">
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
                            className="input input-bordered w-full pl-8 pr-4 py-2 rounded-lg dark:bg-opacity-70 dark:placeholder:text-gray-50 text-black"
                            placeholder="Enter Post Title"
                        />
                    </div>

                    <button
                        className="px-6 py-3 bg-[#553739] text-white rounded-lg hover:bg-[#955E42] my-4 lg:my-0"
                        onClick={() => setSearch(search)}
                    >
                        Search
                    </button>

                    <button
                        onClick={() => setIsTableLayout(!isTableLayout)}
                        className="px-6 py-3 bg-[#955E42] text-white rounded-lg hover:bg-[#955E42]"
                    >
                        {isTableLayout ? "Show Cards" : "Show Table"}
                    </button>
                </div>

                {isTableLayout ? (
                    <div className="overflow-x-auto bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
                        <table className="table-auto w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
                            <thead className="bg-gray-200 dark:bg-slate-700">
                                <tr>
                                    <th className="p-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">Thumbnail</th>
                                    <th className="p-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">Title</th>
                                    <th className="p-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">Description</th>
                                    <th className="p-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">Category</th>
                                    <th className="p-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.length > 0 ? (
                                    posts.map((post) => (
                                        <tr key={post._id}>
                                            <td className="p-2 border border-gray-300 dark:border-gray-700">
                                                <img
                                                    src={post.thumbnail}
                                                    alt={post.title}
                                                    className="w-full h-12 object-cover rounded"
                                                />
                                            </td>
                                            <td className="p-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">{post.title}</td>
                                            <td className="p-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">
                                                {post.description.slice(0, 50)}...
                                            </td>
                                            <td className="p-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">{post.category}</td>
                                            <td className="p-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">
                                                {format(new Date(post.deadline), 'P')}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="p-2 text-center text-gray-500 dark:text-gray-400">
                                            No posts available.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    // Card
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <VolunteerPostCard key={post._id} post={post} />
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500 font-semibold">
                                No posts available.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllVolunteerPosts;
