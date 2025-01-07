import React from 'react';
import Banner from '../Components/Banner';
import HowWeWorks from '../Components/HowWeWorks';
import RunningCampaign from '../Components/RunningCampaign';
import CampaignCard from '../Components/CampaignCard';
import { useLoaderData } from 'react-router-dom';
import Slider from '../Components/Slider';
import ContactUs from '../Components/ContactUs';

const Home = () => {
    
    const data = useLoaderData();

    return (
        <div>
            <div className=''>
                <Slider></Slider>
            </div>
            <div className='w-[80%] mx-auto lg:my-20 my-10'>
            <Banner></Banner>
            </div>
            <div className='w-[80%] mx-auto lg:my-20 my-10'>
                <RunningCampaign data={data}></RunningCampaign>
            </div>
            <div className='w-[80%] mx-auto lg:my-20 my-10'>
                <ContactUs></ContactUs>
            </div>
            <div className='w-[80%] mx-auto lg:my-20 my-10'>
                <HowWeWorks></HowWeWorks>
            </div>
        </div>
        
    );
};

export default Home;