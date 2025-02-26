import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { authProvider } from '../Provider/Provider';
const AddCampaign = () => {
    const {user} = useContext(authProvider);

    const handleAddCampaign = (e) => {
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

        const campaign = { title, type, description, amount, deadline, email, name, image }
        console.log(campaign)

        fetch(`https://y-khaki-five.vercel.app/campaign`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(campaign)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully added',
                        text: 'Your campaign added successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                        })
                }

            })
    }

    return (
        <div className='w-[80%] mx-auto min-h-screen '>
            <h2 className='text-3xl lg:pt-32 pt-28 pb-10 text-center font-bold'>Add Your Campaign</h2>
            <div className=" bg-[#F8F5F2] w-full lg:my-10 rounded-xl  shrink-0 shadow-2xl">
                <form onSubmit={handleAddCampaign} className="card-body">
                    <div className="lg:flex gap-4 lg:my-3">
                        {/* title Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">campaign title</span>
                            </label>
                            <input type="text" name='title' placeholder="title" className="input input-bordered" required />
                        </div>

                        {/* type Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">campaign type</span>
                            </label>
                            <input type="text" name='type' placeholder="campaign type" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="lg:flex gap-4 lg:my-3">
                        {/* description Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">description</span>
                            </label>
                            <input type="text" placeholder="description" name='description' className="input input-bordered" required />
                        </div>

                        {/* amount Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Minimum donation amount</span>
                            </label>
                            <input type="number" placeholder="Minimum donation amount" name='amount' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="lg:flex gap-4 lg:my-3">
                        {/* Deadline Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" placeholder="Deadline" name='deadline' className="input input-bordered" required />
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
                            <input type="text" name='image' placeholder="image" className="input input-bordered" required />
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

export default AddCampaign;