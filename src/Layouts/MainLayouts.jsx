import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div className='lg:w-[1250px] mx-auto font-poppins'>
      
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;