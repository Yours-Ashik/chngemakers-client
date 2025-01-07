import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RunningCampaignCard = ({runCam}) => {
    const { title, image, type, description, amount, deadline, _id } = runCam
    const navigate = useNavigate();
    return (
        <div className="card card-compact bg-[#D2F5F7] text-black shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title my-2">{title}</h2>
                <p className='my-2'> Campaign Type: {type}</p>
                <p className='my-2'>Minimum Amount: {amount}</p>

                <div className="card-actions justify-end my-2">
                    <Link className='w-full' to={`/details/${_id}`}> <button className="btn w-full btn-primary  bg-[#38D0DB] border-none text-black hover:bg-gray-200">See More </button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default RunningCampaignCard;