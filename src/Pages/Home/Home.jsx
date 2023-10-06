import React from 'react';
import Header from '../../Shared/Header/Header';
import BreakingNews from '../../Components/Marquee/BreakingNews';
import Navbar from '../../Shared/Navbar/Navbar';
import RightNavigation from '../../Components/RightNavigation/RightNavigation';
import LeftNavigation from '../../Components/LeftNavigation/LeftNavigation';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';

const Home = () => {

    const news = useLoaderData();
    


    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className='grid grid-cols-4 gap-4 mt-10'>
                <div className='p-5'>
                    <h2 className='font-bold'>All Category</h2>
                    <LeftNavigation></LeftNavigation>
                </div>
                <div className='col-span-2 text-center justify-center p-5'>
                    <h2 className='font-bold'>Dragon News Home</h2>
                    {
                        news?.map(singleNews => <NewsCard news={singleNews}></NewsCard>)
                    }
                </div>
                <div className='p-5'>
                    <h3 className='font-bold'>Login With</h3>
                    <RightNavigation></RightNavigation>
                </div>
            </div>
        </div>
    );
};

export default Home;