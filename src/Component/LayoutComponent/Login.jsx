import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Login = () => {

    const {userLogin,setuser}=useContext(AuthContex);

    const handelSubmit=(e)=>{
        e.preventDefault();
       
        const email=e.target.email.value;
        const password=e.target.password.value;
        // console.log(email,password);
        userLogin(email,password)
        .then(result=>{
            // console.log('login')
            setuser(result.user)

        })
        .catch(error=>{
            alert('ERROR',error.message);

        })

    }
    return (
        <div className='min-h-screen flex justify-center items-center'>

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className='text-center py-6'>Login your accoutn</h1>
      <form onSubmit={handelSubmit} className="card-body">
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>Dont’t Have An Account ?<Link to='/auth/regiester' className='text-red-500'>Register</Link> </p>
    </div>
            
        </div>
    );
};

export default Login;