import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const AuthLayout = () => {
    return (
        <div className='font-poppins bg-[#F3F3F3]'>
            <h1>outh leyout</h1>
            <header>
                <Navbar></Navbar>


            </header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;