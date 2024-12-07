import React from 'react';
import Banner from '../Components/Banner';
import HowWeWorks from '../Components/HowWeWorks';
import RunningCampaign from '../Components/RunningCampaign';
import CampaignCard from '../Components/CampaignCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <div>
            <Banner></Banner>
            </div>
            <div>
                <RunningCampaign data={data}></RunningCampaign>
            </div>
            <div>
                <HowWeWorks></HowWeWorks>
            </div>
        </div>
        
    );
};

export default Home;