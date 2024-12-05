import React from 'react';

const CampaignCard = ({data}) => {
    const {title,image,type,description,amount,deadline, _id} = data
    
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-bold text-gray-400'> Campaign Type: {type}</p>
                <p className='font-bold text-gray-400'>Minimum Amount: {amount}</p>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;