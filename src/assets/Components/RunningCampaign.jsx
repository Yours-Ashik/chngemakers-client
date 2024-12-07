import React from 'react';
import RunningCampaignCard from './RunningCampaignCard';


const RunningCampaign = ({ data }) => {
    console.log(data)
    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-5 lg:my-20'>Hares our running campaign</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-5 lg:my-20'>
                {
                    data.slice(0, 6).map(runCam =>
                        <RunningCampaignCard key={runCam.id} runCam={runCam} />
                    )
                }
            </div>
        </div>
    );
};

export default RunningCampaign;