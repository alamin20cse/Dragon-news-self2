import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 py-2'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <h1 className='text-gray-300 '>Journalism Without Fear or Favour</h1>
            <p>{moment().format('MMMM Do YYYY, h:mm:ss a')} </p>
            
        </div>
    );
};

export default Header;