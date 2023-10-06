import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='bg-[#F3F3F3] flex py-3 rounded-sm'>
            <button className='bg-[#D72050] ml-5 w-[150px] text-white  py-2 rounded-sm'>Latest News</button>
            <Marquee className='text-[16px] text-[#403F3F]'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default BreakingNews;