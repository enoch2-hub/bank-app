import React from 'react'

import { logo } from '../../assets/course-assets'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
<hr />
        <img className='footer-img' src={logo} alt="" />
        <div className="footer-logo-text">
                <span>Re</span><span style={{color:'white'}}>wire</span>
        </div>

        <div className="footer-container">
            <ul className="footer-container-1">
                <th>Useful Links</th>
                <li>Content</li>
                <li>How it works</li>
                <li>Create</li>
                <li>Explore</li>
                <li>Terms & Services</li>
            </ul>
            <ul className="footer-container-2">
                <th>Community</th>
                <li>Help Center</li>
                <li>Help Center</li>
                <li>Help Center</li>
                <li>Help Center</li>
                <li>Help Center</li>
            </ul>
            <ul className="footer-container-3">
                <th>Partner</th>
                <li>Our Partner</li>
                <li>Become a partner</li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer