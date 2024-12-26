import React, { useEffect, useState } from 'react';
import VolunteerNeedSection from '../../components/VolunteerNeedSection/VolunteerNeedSection';
import axios from 'axios';
import BannerSection from '../../components/BannerSection/BannerSection';
import AboutUs from '../../components/AboutUs/AboutUs';
import FAQ from '../../components/FAQ/FAQ';
import { Helmet } from 'react-helmet';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axios.get(`https://bhalo-kaj-server.vercel.app/volunteer-posts?limit=6&sort=deadline`);
            setPosts(data);
        };
        fetchPosts();
    }, []);


    return (
        <div>
            <Helmet>
                <title>BhaloKaj | Home </title>
            </Helmet>
            <BannerSection></BannerSection>
            <AboutUs></AboutUs>
            <VolunteerNeedSection posts={posts}></VolunteerNeedSection>
            <FAQ></FAQ>

        </div>
    );
};

export default Home;