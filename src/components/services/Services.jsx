import React from 'react'
import './services.css'

export default function Services(props) {
  return (
    <div className='services-icons-container'>
        <div className='services-icon'>
            <i className={`${props.icon} icons`}></i>
        </div>
        <div className='services-content'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    </div>
  )
}
