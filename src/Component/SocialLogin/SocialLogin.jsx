import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <h1>Login With</h1>
            <button className='btn'><FaGoogle></FaGoogle>Login with Google</button>
            <button className='btn'><FaGithub></FaGithub>Login With GitHub </button>
            
        </div>
    );
};

export default SocialLogin;