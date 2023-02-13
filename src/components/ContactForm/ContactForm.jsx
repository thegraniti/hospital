import React from 'react'
import "./ContactForm.css"
function ContactForm() {

  const [messaageData, setMessageData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
})

function handleChange(event) {
    const {name , value } = event.target
    setMessageData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }))
}


console.log(messaageData)

function handleSubmit(event) {
  event.preventDefault();
  // Do something with formData, such as send it to a server
  fetch('https://hospital-2b23a-default-rtdb.europe-west1.firebasedatabase.app/message.json', {
    method: 'POST',
    body: JSON.stringify(messaageData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    alert("Your message has gone through with succes we will contact u shortly");
  })
  .catch(error => {
    console.error(error);
  });
}











  return (
    <div className='contact-data'>
      <h1>Contact Us</h1>
    <form onSubmit={handleSubmit}>
      <div className='input-row'>
        <input type="text" id="name" name="name" className='contact-control' value={messaageData.name} onChange={handleChange} placeholder='Your Name' required/>
        <input type="email" id="email" name="email" className='contact-control' value={messaageData.email} onChange={handleChange} placeholder='Your Email' required />
      </div>
      <div className='input-row'>
      <input type="text" id="subject" name="subject" className="contact-control" value={messaageData.subject} onChange={handleChange} placeholder="Subject" required />
     </div>
      <textarea id="message" name="message" className='contact-control' value={messaageData.message} onChange={handleChange} placeholder="Message" required />
        <button className='button-4 button-form'>Send a Message</button>
    </form>
    </div>
  )  
}

export default ContactForm



