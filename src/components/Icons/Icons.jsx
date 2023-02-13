import React from 'react'
import './Icons.css'

function Icons() {
  return (
    <div className='contact-icons'>
    <div className='contact-icon'>
        <i className="fa-solid fa-location-arrow"></i>
        <p>123 Street, New York, USA</p>
    </div>
    <div className='contact-icon'>
        <i className="fa-solid fa-phone-flip"></i>
        <p>+012 345 6789</p>
    </div>
    <div className='contact-icon'>
        <i className="fa-solid fa-envelope-open"></i>
        <p>info@example.com</p>
    </div>
</div>
    )
}

export default Icons