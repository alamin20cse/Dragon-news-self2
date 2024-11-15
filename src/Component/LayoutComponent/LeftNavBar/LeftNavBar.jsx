import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavBar = () => {

    const [Category,setCategory]=useState([]);

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategory(data.data.news_category))

    },[])

    
    return (
        <div>
            <h1>All Caterogy({Category.length})</h1>
            <div className='flex flex-col gap-3'>
                {
                    Category.map(catagory=><NavLink to={`/category/${catagory.category_id}`} className='btn' key={catagory.catagory}>{catagory.category_name}</NavLink>)
                }


            </div>
            
        </div>
    );
};

export default LeftNavBar;