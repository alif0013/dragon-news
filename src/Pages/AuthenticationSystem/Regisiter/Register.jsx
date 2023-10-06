import { useContext } from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const Register = () => {

    const {creatUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, email, password, photo);

        // creat user
        creatUser(email, password)
        .then(res =>{
            console.log(res.user);
        })
        .catch(err => console.log(err))




    }



    return (
        <div>

            <Navbar></Navbar>

            <h1 className='text-center text-5xl'>Please Register</h1>

            <form onSubmit={handleRegister} className='w-[550px] mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name='photo' placeholder="photoUrl" className="input input-bordered" required />
                </div>
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
                    <button type='submit' className="btn btn-primary">Register</button>
                </div>
                <div>
                    <h3 className='text-center mt-6'>already have an account? <p className='bg-slate-200 px-2 py-1 rounded'><Link to='/login'>Login</Link></p></h3>
                </div>
            </form>
        </div>
    );
};

export default Register;