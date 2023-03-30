import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import Img from "../assests/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (

    <div className='no'>
      <img className='img' src={Img} alt="/" />

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Service+</li>
        <li>Hire Developers</li>
        <li>Plans</li>
        <li>Contact US</li>
      </ul>

      <div className='id'>
        <select>
          <option>English</option>
          <option>Hindi</option>
        </select>
        <FaCartPlus className='pro' />
      </div>
    </div>







  )
}

export default Navbar