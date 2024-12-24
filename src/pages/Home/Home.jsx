import React, { useEffect, useState } from 'react';
import VolunteerNeedSection from '../../components/VolunteerNeedSection/VolunteerNeedSection';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axios.get(`http://localhost:5000/volunteer-posts?limit=6&sort=deadline`);
            setPosts(data);
        };
        fetchPosts();
    }, []);


    console.log(posts);

    return (
        <div>
            <VolunteerNeedSection posts={posts}></VolunteerNeedSection>
        </div>
    );
};

export default Home;