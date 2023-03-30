import React from 'react';
import "./Offer.css";
import { SiCreatereactapp } from "react-icons/si";

const offer = () => {
   return (
      <div className='body'>
         <div>
            <h5 className='heading'>Our Services</h5>
            <h2 className='heading2'>We Offer Exclusive Services provided By Us</h2>
         </div>
         <div className='Smooth'>
            <div className='sha' >
               <p>{" "} <SiCreatereactapp className='react' />{" "}</p>
               <h3 className='h33' >Application</h3>
               <p className='div1'>Our sole goal is to help you build a successful investment portfolio. In the last 25 years we have earned that trust for 1 Cr+ customers and would love to be a part of your journey as well. As you grow, we help you build ahead.</p>
            </div>
            <div className='sha' >
               <p>{" "} <SiCreatereactapp className='react' />{" "}</p>
               <h3 className='h33'>Web Devlopment</h3>
               <p className='div1'>Our sole goal is to help you build a successful investment portfolio. In the last 25 years we have earned that trust for 1 Cr+ customers and would love to be a part of your journey as well. As you grow, we help you build ahead.</p>
            </div>
            <div className='sha' >
               <p>{" "} <SiCreatereactapp className='react' />{" "}</p>
               <h3 className='h33'> Android Development</h3>
               <p className='div1'>Our sole goal is to help you build a successful investment portfolio. In the last 25 years we have earned that trust for 1 Cr+ customers and would love to be a part of your journey as well. As you grow, we help you build ahead.</p>
            </div>

         </div>

      </div>
   )
}

export default offer
