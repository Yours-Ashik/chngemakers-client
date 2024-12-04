import React from 'react';

const AddCampaign = () => {
    return (
       <div>
        <h2 className='text-3xl my-5 text-center font-bold'>Add Your Campaign</h2>
         <div className=" bg-base-100 w-full lg:my-10 rounded-xl  shrink-0 shadow-2xl">
            <form className="card-body">
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
                        <input type="date" placeholder="Deadline" name='Deadline' className="input input-bordered" required />
                    </div>

                    {/* email Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="text" placeholder="User Email" name='email' className="input input-bordered" required />
                    </div>

                </div>
                <div className="lg:flex gap-4 lg:my-3">
                    {/* name Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" placeholder="User Name" name='name' className="input input-bordered" required />
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
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
       </div>

    );
};

export default AddCampaign;