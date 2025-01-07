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
        <div className='w-[80%] mx-auto'>
            <h2 className='text-3xl  text-center font-bold  pt-28 '>All Campaign</h2>
            <button onClick={sortByAmount} className='btn btn-primary text-black border-none hover:bg-gray-200 bg-[#ebaa8f] my-10'>Sort by minimum amount</button>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5  '>
                {campaigns.map(campaign => (
                    <CampaignCard key={campaign._id} data={campaign}></CampaignCard>
                ))}
            </div>
        </div>
    );
};

export default AllCampaign;
