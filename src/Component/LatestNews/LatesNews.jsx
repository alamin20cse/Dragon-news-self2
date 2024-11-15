import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatesNews = () => {
    return (
        <div className='flex '>
            <h1 className='bg-red-950 text-white px-3 py-2'>Latest:</h1>
            <Marquee pauseOnHover={true} speed={100} className='space-x-10 bg-base-200 p-2'>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam fuga ea harum nostrum </Link>

                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam fuga ea harum nostrum </Link>

                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam fuga ea harum nostrum </Link>


            </Marquee>
            
        </div>
    );
};

export default LatesNews;