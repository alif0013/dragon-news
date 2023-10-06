import React from 'react';
import Header from '../../Shared/Header/Header';
import RightNavigation from '../../Components/RightNavigation/RightNavigation';
import { useParams } from 'react-router-dom';

const Details = () => {

    const {id} = useParams()


    return (
        <div>
            <Header></Header>

            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                <h2 className='font-bold'>Dragon News</h2>

                    <p>{id}</p>


                </div>
                <div className='col-span-1'>
                    <h2 className='font-bold'>Login With</h2>
                    <RightNavigation></RightNavigation>
                </div>
            </div>
        </div>
    );
};

export default Details;