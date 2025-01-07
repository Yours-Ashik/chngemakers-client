import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authProvider } from '../Provider/Provider';
import Swal from 'sweetalert2';

const UpdateCampaign = () => {
    const campaign = useLoaderData();
    const { title, image, type, description, amount, deadline, _id } = campaign;
    const {user} = useContext(authProvider);
    const handleUpdateCampaign = (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;
        const image = form.image.value;

        const UpdatedCampaign = { title, type, description, amount, deadline, email, name, image }
        console.log(UpdatedCampaign)

        fetch(`https://y-khaki-five.vercel.app/campaign/${_id}`, {
            method: 'PUT',
            headers:{
                "content-type":"application/json"
            },
            
            body: JSON.stringify(UpdatedCampaign)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'Your campaign updated successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }

            })
    }



    return (
        <div className='w-[80%] mx-auto py-20'>
            <h2 className='text-3xl my-5 text-center font-bold'>Update Your Campaign</h2>
            <div className=" bg-base-100 w-full lg:my-10 rounded-xl  shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateCampaign} className="card-body bg-[#F8F5F2]">
                    <div className="lg:flex gap-4 lg:my-3">
                        {/* title Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">campaign title</span>
                            </label>
                            <input type="text" name='title' defaultValue={title} placeholder="title" className="input input-bordered" required />
                        </div>

                        {/* type Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">campaign type</span>
                            </label>
                            <input type="text" defaultValue={type} name='type' placeholder="campaign type" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="lg:flex gap-4 lg:my-3">
                        {/* description Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">description</span>
                            </label>
                            <input type="text" defaultValue={description} placeholder="description" name='description' className="input input-bordered" required />
                        </div>

                        {/* amount Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Minimum donation amount</span>
                            </label>
                            <input type="number" placeholder="Minimum donation amount" name='amount' defaultValue={amount} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="lg:flex gap-4 lg:my-3">
                        {/* Deadline Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" defaultValue={deadline} placeholder="Deadline" name='deadline' className="input input-bordered" required />
                        </div>

                        {/* email Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text" value={user?.email} placeholder="User Email" name='email' className="input input-bordered" required />
                        </div>

                    </div>
                    <div className="lg:flex gap-4 lg:my-3">
                        {/* name Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" value={user?.displayName} placeholder="User Name" name='name' className="input input-bordered" required />
                        </div>

                        {/* image Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">image</span>
                            </label>
                            <input type="text" name='image' defaultValue={image} placeholder="image" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* Forgot Password and Login Button */}
                    <div className="form-control mt-4">

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary border-none hover:bg-gray-200 bg-[#ebaa8f] text-black">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCampaign;