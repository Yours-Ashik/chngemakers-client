import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../Components/CampaignCard';

const AllCampaign = () => {
    // Get campaign data from loader
    const campaignData = useLoaderData();

    // Create a state to store the sorted campaign data
    const [campaigns, setCampaigns] = useState(campaignData);

    // Sort function
    const sortByAmount = () => {
        const sortedData = [...campaigns].sort((a, b) => a.amount - b.amount);
        setCampaigns(sortedData);
    };

    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-5 lg:my-20'>Here are all our campaigns</h2>
            <button onClick={sortByAmount} className='btn btn-primary'>Sort by minimum amount</button>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-5 lg:my-20'>
                {campaigns.map(campaign => (
                    <CampaignCard key={campaign._id} data={campaign}></CampaignCard>
                ))}
            </div>
        </div>
    );
};

export default AllCampaign;
