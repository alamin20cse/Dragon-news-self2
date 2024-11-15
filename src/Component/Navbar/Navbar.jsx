import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../assets/user.png'
import { AuthContex } from '../../Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContex);
    return (
        <div className='flex justify-between'>
            <div>
              <h1>{user && user.email}</h1>

            </div>
          <div className="nav space-x-3">
            <Link to='/'>Home</Link>
            <Link to='/career'>Career</Link>
            <Link to='/about'>About</Link>

          </div>
          <div className="login flex gap-3 items-center">
            <div> 
                <img src={userIcon} alt=""  />
            </div>
          




{
  user && user.email? <button onClick={logOut} className='btn'>Log Out</button> :  <Link to='/auth/login' className='btn'>Login</Link>
}


          </div>
            
        </div>
    );
};

export default Navbar;