import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            <div className='lg:w-[80%] mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='w-[80%] mx-auto'>
                <Outlet></Outlet>
            </div>
            <div className='mt-10 lg:mt-20'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;