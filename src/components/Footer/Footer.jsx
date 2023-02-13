import React from 'react'
import Links from './Links'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='section'>
        <div className='footer-links footer-container'>
        <div className='footer-header header'>
            <h2>GET IN TOUCH</h2>
            <p className='footer-text'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
            <p className='footer-icons'><i className="fa-solid fa-location-dot"></i> 123 Street, New York, USA</p>
            <p className='footer-icons'><i className="fa-solid fa-envelope"></i> info@example.com</p>
            <p className='footer-icons'><i className="fa-solid fa-phone"></i> +012 345 67890</p>
        </div>
        <div className='footer-header header'>
            <h2>QUICK LINKS</h2>
            <Links/>
        </div>
        <div className='footer-header header'>
            <h2>POPULAR LINKS</h2>
            <Links/>
        </div>
        <div className='footer-header footer-social header'>
            <h2>FOLLOW US</h2>
            <div className='footer-social-p'>
                <p><i className="fa-brands fa-twitter"></i></p>
                <p><i className="fa-brands fa-linkedin-in"></i></p>
                <p><i className="fa-brands fa-instagram"></i></p>
            </div>
        </div>
        </div>
        </div>
        <div className='line2'></div>
        <div className='footer-rights'>
            <div>
            <p>© Your Site Name. All Rights Reserved.</p>
            </div>
            <div>
                <p>Designed by <span className='blue'>HTML Codex</span> </p>
            </div>
        </div>
    </div>
  )
}

export default Footer