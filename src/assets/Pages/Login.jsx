import React, { useContext } from 'react';
import { authProvider } from '../Provider/Provider';
import { Link } from 'react-router-dom';


const Login = () => {
    const info = useContext(authProvider)


    return (
        <div className="min-h-screen lg:w-[40%]  mx-auto flex items-center justify-center">
            <form className="card-body mx-auto shadow-xl bg-white rounded-lg">
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-5">Login</button>
                    <button className="btn btn-warning">Login With Google</button>
                    <h2 className='my-5'>Don't have an account please <Link className='text-blue-600' to='/register'>Register</Link></h2>
                </div>
            </form>
        </div>
    );
};

export default Login;