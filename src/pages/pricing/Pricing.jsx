import React from 'react'
import { SimpleSlider } from './slider';
import './pricing.css'

function Pricing() {

  return (
    <div className='section'>
        <div className='pricing-container flex header'>
            <h2>Medical Packages</h2>
            <h1>Awesome Medical<br/>Programs</h1>
        </div>
        <div className='packages'>
       <SimpleSlider/>
        </div>
    </div>
  )
}

export default Pricing