import React from 'react';
import Header from '../Component/Header/Header';
import LatesNews from '../Component/LatestNews/LatesNews';
import Navbar from '../Component/Navbar/Navbar';
import LeftNavBar from '../Component/LayoutComponent/LeftNavBar/LeftNavBar';
import RightNavBar from '../Component/LayoutComponent/RightNavBar/RightNavBar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
           <header>
            <Header></Header>

            {/* letest news */}
            <section className='w-10/12 mx-auto'>
            <LatesNews></LatesNews>

            </section>
            


           </header>
           <nav className='w-10/12 mx-auto py-5'>
           <Navbar></Navbar>
           
           </nav>


           <main className='w-10/12 mx-auto grid md:grid-cols-12'>
           <aside className='col-span-3'><LeftNavBar></LeftNavBar> </aside>
           <section className='col-span-6'><Outlet></Outlet></section>
           <aside className='col-span-3'><RightNavBar></RightNavBar></aside>
             
           </main>
            
            
        </div>
    );
};

export default HomeLayout;