import React from 'react';
import { BiLogoGoogle, BiLogoGithub, BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone2.png';


const RightNavigation = () => {
    return (
        <div>
            <div className='mt-4'>
                <div className='flex text-blue-800 border-solid border-2 border-indigo-600 py-2 justify-center rounded'>
                    <BiLogoGoogle className='mt-1 mr-1'></BiLogoGoogle> <p>Login With Google</p>

                </div>
                <div className='flex mt-3 border-black border py-2 justify-center rounded'>
                    <BiLogoGithub className='mt-1 mr-1'></BiLogoGithub> <p>Login With Github</p>
                </div>
            </div>

            {/* find us on */}
            <div className='py-8'> 
                <h2 className='font-bold'>Find Us On</h2>

                <div>
                <div className='mt-4'>
                <div className='flex  border py-2 justify-center rounded'>
                    <BiLogoFacebook className='mt-1 mr-1 text-blue-600'></BiLogoFacebook> <p>Facebook</p>

                </div>
                <div className='flex mt-3 border  py-2 justify-center rounded'>
                    <BiLogoTwitter className='mt-1 mr-1 text-[#58A7DE]'></BiLogoTwitter> <p>Twitter</p>
                </div>
                <div className='flex mt-3 border  py-2 justify-center rounded'>
                    <BiLogoInstagram className='mt-1 mr-1 text-pink-500'></BiLogoInstagram> <p>Instagram</p>
                </div>
            </div>
                </div>




            </div>

        {/* Q Zone section */}
        <div>
            <h1 className='font-bold'>Q Zone</h1>

            <div>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>



        </div>



        </div>
    );
};

export default RightNavigation;