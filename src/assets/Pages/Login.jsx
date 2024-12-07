import React, { useContext } from 'react';
import { authProvider } from '../Provider/Provider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Login = () => {
    const { handleLogin, handleGoogleLogin } = useContext(authProvider)
    const navigate = useNavigate();

    const submitLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        handleLogin(email, password)
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'success',
                    text: 'You have logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                form.reset();
                
                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const submitGoogleLogin = (e) => {
        e.preventDefault();
        handleGoogleLogin()
            .then(() => {
                Swal.fire({
                    title: 'success',
                    text: 'You have logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/')
            })

    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-10'>Please Login Your Account</h2>
            <div className="min-h-screen lg:w-[40%]  mx-auto my-10">
                <form onSubmit={submitLogin} className="card-body mx-auto shadow-xl bg-white rounded-lg">
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
                    </div>
                    <button onClick={submitGoogleLogin} className="btn btn-warning">Login With Google</button>
                    <h2 className='my-3'>Don't have an account please <Link className='text-blue-600' to='/register'>Register</Link></h2>
                </form>

            </div>
        </div>
    );
};

export default Login;