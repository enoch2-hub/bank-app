import React from 'react'

import {discount, pngwing1} from "../../assets/course-assets";
// import {pngwing} from "../../assets";
import './Hero.css'

const Hero = () => {
  return (
    <div className="Hero">

    <div className="Hero-discount">
        <div className="Hero-discount-gradientround">
            <img src={discount} alt="" />
            <span>
                <span style={{fontWeight: "bold"}}>20%</span>20% Discount For 1 Month Account
            </span>
        </div>
        <div className='Hero-discount-text1'>
            <span>Lorem Ipsum</span>
            <span className='text-gradient'>dolor sit amet</span>
            <span>consectetur adipisicing elit.</span>
        </div>
        <div className='Hero-discount-text2'>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia libero nisi, iste repellat itaque fugit unde non deleniti, vero veritatis consequatur! Qui optio quas eum corporis quod ipsum aut.</span>
        </div>
    </div>
        
    <div className="Hero-robot-gradientround">
       <img className='Hero-robot' src={pngwing1} alt="" />
    </div>

    </div>
  )
}

export default Hero