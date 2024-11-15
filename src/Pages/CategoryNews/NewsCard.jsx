import React from 'react';

const NewsCard = ({ news }) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden border">
            <img className="w-full h-48 object-cover" src={news.thumbnail_url} alt="News Thumbnail" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                    {news.author.published_date ? `Published on: ${news.author.published_date}` : 'Published date not available'}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                    Views: {news.total_view} | Rating: {news.rating.number} ({news.rating.badge})
                </p>
                <p className="text-gray-700 text-base mb-4">{news.details.slice(0, 100)}...</p>
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">Read More</a>
            </div>
            <div className="px-4 pb-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-8 h-8 rounded-full mr-2" src={news.author.img} alt="Author" />
                    <span className="text-gray-700">{news.author.name || 'Unknown Author'}</span>
                </div>
                <div className="flex items-center">
                    <span className="text-orange-500 mr-2">⭐ {news.rating.number}</span>
                    <span className="text-gray-500">👁️ {news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
