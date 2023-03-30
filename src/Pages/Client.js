import React from 'react'
import images from "../assests/new2.jpg";
import "./client.css";
import { GiLaurelsTrophy } from "react-icons/gi";
import { BsFillStopwatchFill } from "react-icons/bs"

const Client = () => {
  return (
    <div>
      <h1>Our Clients</h1>
      <div className='h1'>
        <div>
          <img src={images} alt="/" />
        </div>
        <div >
          <h6>About Our company</h6>
          <h2 >Aerosoft</h2>
          <p className='pra'>Marketing refers to activities a company undertakes to promote the buying or selling of a product or service.
            Marketing includes advertising, selling, and delivering products to consumers or other businesses. Some marketing is done by affiliates on behalf of a            company.
            Marketing refers to activities a company undertakes to promote the buying or selling of a product or service. Marketing includes advertising, selling, and delivering products to consumers or other businesses. Some marketing is done by affiliates on behalf of a company.</p>
          <div className='h2'>
            <div>
              <h3> {" "} <GiLaurelsTrophy />{" "}<span>Our Aim</span> </h3>
              <p className='color'>______________________________________</p>
              <p className='pls' >It is a well-known fact that a person without an aim is a person without a life. All the creatures in this universe have one or another specific aim. It is common for all things. As the human is the best creature among them all, he has been given a right to select what he wants to do in his life. The mindset of each and every person is of its own type. Therefore, his aim in life will also be different from others.</p>
            </div>
            <div className='aim2'>
              <h3>{" "} < BsFillStopwatchFill />{" "}<span>Time Saving</span></h3>
              <p className='color'>______________________________________</p>
              <p className='pls'>It is a well-known fact that a person without an aim is a person without a life. All the creatures in this universe have one or another specific aim. It is common for all things. As the human is the best creature among them all, he has been given a right to select what he wants to do in his life. The mindset of each and every person is of its own type. Therefore, his aim in life will also be different from others.</p>
            </div>
          </div>

        </div>

      </div>

    </div >
  )
}

export default Client