import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import profilePic from '../../assets/user.png'
import { AuthContext } from '../../Pages/Providers/AuthProvider';
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () =>{
        logOut()
        .then()
        .catch()
    }





    const navlinks = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>About</NavLink></li>
        <li><NavLink to='/'>Carrer</NavLink></li>
    </>

    return (
        <div className='mt-4'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="avatar online">
                        <div className="w-[45px] rounded-full">
                            <img src={profilePic} />
                        </div>
                    </div>
                    {
                        user ? 
                        <button onClick={handleLogout} to='/' className="bg-[#403F3F] ml-3 px-5 py-1 rounded text-white">Sign Out</button>
                        :
                        <Link to='/login' className="bg-[#403F3F] ml-3 px-5 py-1 rounded text-white">Login</Link>
                    }
                  
                </div>
            </div>
        </div>
    );
};

export default Navbar;