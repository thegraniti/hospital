import React from 'react'
import './Team.css'

function Team(props) {
  return (
    <div className='person'>
        <div className='person-image'>
            <img src={props.image} alt="person"/>
        </div>
        <div className='container'>
        <div className='person-information'>
            <h1>{props.name}</h1>
            <h4>{props.title}</h4>
            <p>{props.disription}</p>
        </div>
            <div className='social'>
              <div className='social-links'>
                <button><a href={props.twitter} target="_blank"  rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></button>
                <button><a href={props.facebook} target="_blank"  rel="noreferrer" ><i className="fa-brands fa-facebook-f"></i></a></button>
                <button><a href={props.linkedin} target="_blank"  rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Team