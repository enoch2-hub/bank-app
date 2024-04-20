import React from "react";

import { AiFillStar } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";

import "./Business.css";

const Business = () => {
  return (
    <div className="business-container-main">
      <div className="business-container-1">
        <h1>Laboriosam inventore perferendis</h1>
        <p>
          ex voluptatem atque, ab adipisci non. officiis expedita consequatur
          sint eos ab natus porro c officiis expedita consequatur sint eos ab
          natus porro c
        </p>
        <div className="business-container-1-btn">Get Started</div>
      </div>
      <div className="business-container-2">
        <div className="business-container-rewards">
          <span>
            <AiFillStar />
          </span>
          <h1>Rewards</h1>
          <p>
            nesciunt officiis expedita consequatur sint eos ab natus porro
            corrupti vel
          </p>
        </div>
        <div className="business-container-secured">
          <span>
            <RiSecurePaymentLine />
          </span>
          <h1>Secured</h1>
          <p>
            nesciunt officiis expedita consequatur sint eos ab natus porro
            corrupti vel
          </p>
        </div>
        <div className="business-container-balance">
          <span>
            <BsFillSendFill />
          </span>
          <h1>balance</h1>
          <p>
            nesciunt officiis expedita consequatur sint eos ab natus porro
            corrupti vel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Business;
