import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='text-center pt-6'>
                <img className='mx-auto' src={logo} alt="logo" />
                <p className='pt-3 text-[#706F6F]'>Journalism Without Fear or Favour</p>
                <p className='pt-2 mb-5 text-[#706F6F]'>{moment().format("dddd, MMMM D, YYYY")}</p>
               
            </div>
        </div>
    );
};

export default Header;