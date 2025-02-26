import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authProvider } from '../Provider/Provider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { FaMoon, FaSun } from 'react-icons/fa';
import Swal from 'sweetalert2'; // Ensure Swal is imported

const Navbar = () => {
    const { user } = useContext(authProvider); // Using user context
    const navigate = useNavigate();

    // State for theme toggle
    const [isDark, setIsDark] = useState(false);

    // Apply the theme to the root HTML element
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    // Logout handler
    const submitLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/login');
                Swal.fire({
                    title: 'Logout success',
                    text: 'You have been logged out successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            })
            .catch((error) => console.error('Logout Error:', error));
    };

    const links = <>
    
        <li><Link to='/'>HOME</Link></li>
        <li><a className='uppercase' href='#contact'>Contact Us</a></li>
        <li><Link className='uppercase' to='/allCampaign'>All Campaign</Link></li>
        
        {user? <>
            <li><Link className='uppercase' to='/addCampaign'>Add New Campaign</Link></li>
            <li><Link className='uppercase' to='/myCampaign'>My Campaign</Link></li> </>  : ""}
    </>

    return (
        <div className="navbar fixed z-10 bg-[#38d0db]  text-[#051a1d] lg:py-3  lg:px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm bg-[#38d0db] dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><Link to='/'>ChangeMakers</Link></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex items-center">
                {/* Theme Toggle Button */}
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="btn btn-circle bg-base-200 shadow-md p-2 mr-4"
                    aria-label="Toggle Theme"
                >
                    {isDark ? <FaSun className="text-yellow-400 text-lg" /> : <FaMoon className="text-gray-800 text-lg" />}
                </button>

                {/* Login/Logout Button */}
                {user ? (
                    <button className="btn btn-primary text-black border-none hover:bg-gray-200 bg-[#ebaa8f]" onClick={submitLogout}>Logout</button>
                ) : (
                    <button>
                        <Link className="btn btn-primary text-black border-none hover:bg-gray-200 bg-[#ebaa8f]" to="/login">Login</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;