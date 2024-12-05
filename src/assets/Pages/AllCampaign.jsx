import React from 'react';
import { data, useLoaderData } from 'react-router-dom';
import CampaignCard from '../Components/CampaignCard';

const AllCampaign = () => {
    const campaignData = useLoaderData();
    console.log(campaignData)
    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-5 lg:my-20'>Hares our all campaign</h2>
            <div className='grid lg:grid-cols-3 gap-5 my-5 lg:my-20'>
                {
                    campaignData.map(campaign => <CampaignCard key={campaign._id} data={campaign}></CampaignCard>)
                }
            </div>
        </div>
    );
};

export default AllCampaign;