import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';

const Regiester = () => {

    const {createNewUser,setuser}=useContext(AuthContex);


    const handelsubmit=(e)=>{
        e.preventDefault();

        // get form data
        const form=new FormData(e.target);
        // console.log(form);

        const name=form.get('name');
        const email=form.get('email');
        const photo=form.get('photo');
        const password=form.get('password');
        //  console.log({ name, email,password,photo})
        createNewUser(email,password)
        .then(result=>{
           const user= result.user
           setuser(user);
           console.log(user)
        })
        .catch(error=>{
            console.log('ERROR',error.message);
            console.log(error.code);
        })

    }

    return (
        <div className='min-h-screen flex justify-center items-center'>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
           



              <form onSubmit={handelsubmit} className="card-body">


              <h1>Regiester</h1>
            <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your name</span>
                  </label>
                  <input type="text" name='name' placeholder="Enter your name " className="input input-bordered" required />
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo url</span>
                  </label>
                  <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />
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
                  <button className="btn btn-primary">Regiester</button>
                </div>
              </form>
              <p>Have An Account ?<Link to='/auth/login' className='text-red-500'>Login</Link> </p>
            </div>
                    
                </div>
    );
};

export default Regiester;