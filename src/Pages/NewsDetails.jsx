import React from 'react';
import RightNavBar from '../Component/LayoutComponent/RightNavBar/RightNavBar';
import Header from '../Component/Header/Header';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {

    const data=useLoaderData();
    const news=data.data[0];
    console.log(news);
    return (
        <div>
          
            <header>
                <Header></Header>

            </header>
            <main className='w-10/12 mx-auto grid grid-cols-12 gap-4'>

            <section className='col-span-9'>
                
                
                {/* dfff */}

                <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={news?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{news?.title}</h2>
    <p>{news?.details}</p>
    <div className="card-actions">
    

<Link to={`/category/${news?.category_id}`} className="btn btn-primary">
  Back to category
</Link>

    </div>
  </div>
</div>

                {/* sdff */}
                
              
                
                
                
                
                
                  </section>
            <aside className='col-span-3'>

<RightNavBar></RightNavBar>
            </aside>

            </main>
        </div>
    );
};

export default NewsDetails;