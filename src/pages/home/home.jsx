import React from 'react'
import './home.css'
import About from '../about/about'
import Service from '../service/service'
import Appointments from '../page/Appoitments/Appointments'
import Pricing from '../pricing/Pricing'
import TheTeam from '../page/TheTeam/TheTeam'
import Testimonials from '../page/Testimonials/Testimonials'

function Home() {



  
  return (
    <div>
      
    <div className='hero-section'>
    <div className='section'>
      <div className='hero-container header'>
        <h2>Welcome to Medinova</h2>
        <h1>Best Healthcare Solution <br/> In Your City</h1>
        <div className='home-button'>
            <button className='button-1 btn'>Find Doctor</button>
            <button className='button-2 btn'  >Appointment</button>
        </div>
      </div>
    </div>
    </div>
    <About/>
    <Service/>
    <div className='home-appoitment'>
    <Appointments />
    </div>
    <Pricing />
    <div className='padding'>
    <TheTeam/>
    </div>
    <Testimonials />
    </div>
  )
}

export default Home