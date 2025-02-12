import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import VolunteerPostCard from '../../components/VolunteerPostCard/VolunteerPostCard';
import { format } from 'date-fns';
import Loading from '../../components/Loading/Loading';

const AllVolunteerPosts = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [isTableLayout, setIsTableLayout] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `https://bhalo-kaj-server.vercel.app/volunteer-posts${search ? `?title=${search}` : ""}`
                );
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
            setLoading(false);
        };
        fetchPosts();
    }, [search]);

    const sortedPosts = () => {
        let sorted = [...posts];

        if (sortOption === 'name-asc') {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === 'name-desc') {
            sorted.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortOption === 'volunteers-asc') {
            sorted.sort((a, b) => a.volunteersNeeded - b.volunteersNeeded);
        } else if (sortOption === 'volunteers-desc') {
            sorted.sort((a, b) => b.volunteersNeeded - a.volunteersNeeded);
        }

        return sorted;
    };

    return (
        <div className='bg-gray-50 dark:bg-slate-800'>
            <Helmet>
                <title>BhaloKaj | All Volunteer Need Posts Page </title>
            </Helmet>
            <div className="w-11/12 md:w-10/12 mx-auto py-6">
                {loading ? <Loading></Loading> : (
                    <>
                        <div className="flex lg:flex-row flex-col mb-6 justify-between items-center">
                            <input
                                type="text"
                                name="search"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="input input-bordered w-full lg:w-[60%] pl-8 pr-4 py-2 rounded-lg dark:bg-opacity-70 dark:placeholder:text-gray-50 text-black"
                                placeholder="Enter Post Title"
                            />
                            <select
                                className="px-4 py-3 bg-white dark:bg-gray-700 dark:text-white rounded-lg border"
                                onChange={(e) => setSortOption(e.target.value)}
                                value={sortOption}
                            >
                                <option value="">Sort By</option>
                                <option value="name-asc">Name (A-Z)</option>
                                <option value="name-desc">Name (Z-A)</option>
                                <option value="volunteers-asc">Volunteers Needed (Low to High)</option>
                                <option value="volunteers-desc">Volunteers Needed (High to Low)</option>
                            </select>
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
                                            <th className="p-2 border">Thumbnail</th>
                                            <th className="p-2 border">Title</th>
                                            <th className="p-2 border">Description</th>
                                            <th className="p-2 border">Category</th>
                                            <th className="p-2 border">Volunteers Needed</th>
                                            <th className="p-2 border">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sortedPosts().length > 0 ? (
                                            sortedPosts().map((post) => (
                                                <tr key={post._id}>
                                                    <td className="p-2 border">
                                                        <img src={post.thumbnail} alt={post.title} className="w-12 h-12 object-cover rounded" />
                                                    </td>
                                                    <td className="p-2 border">{post.title}</td>
                                                    <td className="p-2 border">{post.description.slice(0, 50)}...</td>
                                                    <td className="p-2 border">{post.category}</td>
                                                    <td className="p-2 border">{post.volunteersNeeded}</td>
                                                    <td className="p-2 border">{format(new Date(post.deadline), 'P')}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="p-2 text-center text-gray-500">No posts available.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {sortedPosts().length > 0 ? (
                                    sortedPosts().map((post) => (
                                        <VolunteerPostCard key={post._id} post={post} />
                                    ))
                                ) : (
                                    <div className="col-span-full text-center text-gray-500 font-semibold">
                                        No posts available.
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default AllVolunteerPosts;
