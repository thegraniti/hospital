import React from 'react'
import images from '../../constant/images'
import {about} from '../../constant/icons'
import Services from '../../components/services/Services'
import './about.css'


function About() {

    const showAboutServices = about.map(service => {
        return <Services key={service.id} id={service.id} {...service} />
    })

  return (
    <div className='section'>
        <div className='about-container'>
        <div className='about-img'>
            <img src={images.about} alt="about" />
        </div>
        <div className='about-content header'>
            <h2>About Us</h2>
            <h1>Best Medical Care For Yourself<br />and Your Family</h1>
            <p className='p'>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
            <div className='about-icons'>
            {showAboutServices}
            </div>
        </div>
        </div>
    </div>
  )
}

export default About