import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authProvider } from '../Provider/Provider';
import Swal from 'sweetalert2'

const Register = () => {
    const navigate = useNavigate();

    const { handleRegister } = useContext(authProvider);

    const submitRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        handleRegister(email, password)
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Success',
                    text: 'Register Success',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                form.reset();
                navigate('/')

            })

    }

    return (

        <div>
            <h2 className='text-2xl font-bold my-10 text-center'>Register Your Account</h2>
            <div className="min-h-screen lg:w-[40%]  mx-auto my-10 lg:my-15">
                <form onSubmit={submitRegister} className="card-body mx-auto shadow-xl bg-white rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <h2 className='my-5'>Already have an account please <Link className='text-yellow-500' to='/login'>login</Link></h2>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;