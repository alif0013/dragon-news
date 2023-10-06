import React, { useContext } from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const location = useLocation() 
    const navigate = useNavigate()
    console.log(location);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // signIn/ log in 
        signIn(email, password)
        .then(res =>{
            console.log(res.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.log(error);
        })



    }

    return (

        <div>

            <Navbar></Navbar>

            <h1 className='text-center text-5xl'>Please Login</h1>

            <form onSubmit={handleLogin} className='w-[550px] mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Login</button>
                </div>
                <div>
                    <h3 className='text-center mt-6'>new user please <p className='bg-slate-200 px-2 py-1 rounded'><Link to='/register'>register</Link></p></h3>
                </div>
            </form>
        </div>
    );
};

export default Login;