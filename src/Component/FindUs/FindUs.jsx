import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { TiSocialTwitter } from 'react-icons/ti';

const FindUs = () => {
    return (
        <div>
            <h1>Find Us</h1>
            <div className="join flex join-vertical *:bg-white">
  <button className="btn join-item justify-start"><FaFacebook></FaFacebook>FaceBook</button>
  <button className="btn join-item justify-start"><TiSocialTwitter></TiSocialTwitter> Twitter</button>
  <button className="btn join-item justify-start"><ImInstagram></ImInstagram>Instragram </button>
</div>
            
        </div>
    );
};

export default FindUs;