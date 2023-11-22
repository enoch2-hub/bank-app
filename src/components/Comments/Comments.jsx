import React from 'react'

import {CgProfile} from 'react-icons/cg'

import './Comments.css'

const Comments = () => {
  return (
    <>
    <div className="comments-container">
        <div className="comments-container-text">
            <div className="comments-text-1">
                <span>What people</span>
                <br />
                <span>say about us</span>
            </div>
            <div className="comments-text-2">
                <span>Aque exercitationem explicabo dolores sequi,</span>
                    <br />
                <span>E temporibus, ut quo ullam.</span>
            </div>
        </div>

        <div className="comments-container-com">
            <div className="comments-com-1">
                <span>"</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum veniam sequi itaque optio modi nemo natus sint suscipit nostrum voluptas aliquam </p>
                <span><CgProfile/></span>
            </div>
            <div className="comments-com-2">
                <span>"</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum veniam sequi itaque optio modi nemo natus sint suscipit nostrum voluptas aliquam </p>
                <span><CgProfile/></span>
            </div>
            <div className="comments-com-3">
                <span>"</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum veniam sequi itaque optio modi nemo natus sint suscipit nostrum voluptas aliquam </p>
                <span><CgProfile/></span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Comments