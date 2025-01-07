import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className=''>
            <div className='w-full bg-[#3b74cd]'>
                <Navbar></Navbar>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <div className='mt-10 lg:mt-20'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;