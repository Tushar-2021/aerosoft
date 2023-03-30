import React from 'react';
import Image from "../assests/god1.jpg";
import "./Intial.css";


const Intial = () => {
  return (
    <div className='display'>
      <div className='p'>
        <h6 className='h6'>Technology & IT Solutions</h6>
        <h1 className='h1'>Creating Brand Identities Through Passion And Innovation</h1>
        <p className='p2'>Our specialists begins by brainstroming & thinking outside the box to develope a flawless plan to achieve your company's digital goals.</p>
        <button className='btn-liquid ' type="submit">JOIN WITH US </button>
      </div>
      <div>
        <img className='pic' src={Image} alt="/" />
      </div>
    </div>
  );
}

export default Intial;