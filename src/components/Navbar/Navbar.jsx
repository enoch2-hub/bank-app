import React, { useState } from 'react'

import './Navbar.css'

import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'

import { logo } from '../../assets/course-assets'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
        <div className="Navbar-logo">
            {/* <div className="Navbar-logo-img"></div> */}
            <img className='className="Navbar-logo-img"' src={logo} alt="" />
            <div className="Navbar-logo-text">
                <span>Re</span><span style={{color:'white'}}>wire</span>
            </div>
        </div>

        <ul className="Navbar-list">
            <li>Home</li>
            <li>Features</li>
            <li>Product</li>
            <li>Clients</li>
        </ul>


        <span className='Navbar-menu-icon'>
          {!isOpen 
          ? <RxHamburgerMenu onClick={() => setIsOpen(true)}/>
          : <AiOutlineClose onClick={() => setIsOpen(false)}/>
          }
          {isOpen && (
            <ul className="scale-up-top Navbar-list-mini">
            <li>Home</li>
            <li>Features</li>
            <li>Product</li>
            <li>Clients</li>
          </ul>
          )}
        </span>

        

    </div>
  )
}

export default Navbar