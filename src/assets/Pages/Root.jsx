import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <div className='w-[80%] mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='w-[80%] mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;