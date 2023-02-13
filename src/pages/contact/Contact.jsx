import React from 'react'
import Icons from '../../components/Icons/Icons'
import ContactForm from '../../components/ContactForm/ContactForm'

function Contact() {
  return (
    <div className='section'>
    <div className='contact-container'>
      <div className="contact-header flex header">
        <h2>ANY QUESTIONS?</h2>
        <h1>ANY QUESTIONS? Please Feel Free To <br /> Contact Us</h1>
      </div>
      <Icons/>
    </div>
    <ContactForm />
  </div>
 )
}

export default Contact