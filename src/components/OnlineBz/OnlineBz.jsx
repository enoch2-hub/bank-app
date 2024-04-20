import React from "react";

import { onlinebz, onlinebz2 } from "../../assets/course-assets";

import "./OnlineBz.css";

const OnlineBz = () => {
  return (
    <>
      <div className="onlineBz-container">
        <div className="onlineBz-container-1-img">
          <img src={onlinebz} alt="" />
        </div>
        <div className="onlineBz-container-1">
          <h1>Online Business eos officiis</h1>
          <p>
            ex voluptatem atque, ab adipisci non. officiis expedita consequatur
            sint eos ab natus porro c officiis expedita consequatur sint eos ab
            natus porro c officiis expedita consequatur sint eos ab natus porro
            c officiis expedita consequatur sint eos ab natus porro c officiis
            expedita consequatur sint eos ab natus porro c officiis expedita
            consequatur sint eos ab natus porro c
          </p>
          <div className="onlineBz-container-1-btn">Get Started</div>
          {/* <div className="onlineBz-container-1-btn">Get Started</div> */}
        </div>
      </div>

      <div className="onlineBz-container">
        <div className="onlineBz-container-2">
          <h1>Mobile Business aliquam numquam nostrum</h1>
          <p>
            voluptatem atque, ab adipisci non. officiis expedita consequatur
            sint eos ab natus porro c officiis expedita consequatur sint eos ab
            natus porro c officiis expedita consequatur sint eos ab natus porro
            c
          </p>
          <div className="onlineBz-container-2-btn">Get Started</div>
        </div>
        <div className="onlineBz-container-2-img">
          <img src={onlinebz2} alt="" />
        </div>
      </div>

      {/* <div className="onlineBz-container-2">
        <div className="onlineBz-container-2-text">
            <h1>Mobile Business aliquam numquam nostrum</h1> 
            <p>voluptatem atque, ab adipisci non.
            officiis expedita consequatur sint eos ab natus porro c
            officiis expedita consequatur sint eos ab natus porro c
            officiis expedita consequatur sint eos ab natus porro c
            officiis expedita consequatur sint eos ab natus porro c
            officiis expedita consequatur sint eos ab natus porro c
            officiis expedita consequatur sint eos ab natus porro c
            </p>
            <div className='onlineBz-container-2-btn'>Get Started</div>
        </div>
        <div className="onlineBz-container-2-img">
            <img src={onlinebz2} alt="" />
        </div>
    </div> */}
    </>
  );
};

export default OnlineBz;
