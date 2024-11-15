import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {


    const {data:news}=useLoaderData();
    console.log(news);

    return (
        <div>
            <h1>Dragon News Home</h1>
            <div>

                {
                    news.map(singlenews=><NewsCard key={singlenews._id} news={singlenews} ></NewsCard>)
                }
            </div>
           
            
        </div>
    );
};

export default CategoryNews;