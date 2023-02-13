import React from 'react'
import './Packages.css'

function Packages(props) {
  return (
    <div className='package-container'>
        <div className='package-image' style={{ backgroundImage: `url(${props.image})` }} >
            <div className='package-header'>
                <h2>{props.title}</h2>
                 <h1><span className='span1'>$</span>{props.price}<span className='span2'>/Year</span></h1>
            </div>
        </div>
        <div className='package-services'>
            <p>{props.service1}</p>
            <p>{props.service2}</p>
            <p>{props.service3}</p>
            <p>{props.service4}</p>
            <button className='button-3'>Apply Now</button>
        </div>
    </div>
  )
}

export default Packages