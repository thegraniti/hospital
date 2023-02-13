import React from 'react'
import './Appointment.css'

function Appointment() {



  const [formData, setFormData] = React.useState({
    departament: "",
    doctor: "",
    name: "",
    email: "",
    date: "",
    time: "",
})

function handleChange(event) {
    const {name , value } = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }))
}


function handleSubmit(event) {
  event.preventDefault();
  // Do something with formData, such as send it to a server
  fetch('https://hospital-2b23a-default-rtdb.europe-west1.firebasedatabase.app/appoitment.json', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    alert("You have succesfully maked an appoitment");
  })
  .catch(error => {
    console.error(error);
  });
}



  return (
    <div className='appoitment-container'>
      <h1>Book an Appointment</h1>
    <form onSubmit={handleSubmit}>
      <div className='input-row'>
          <select name='departament' className='form-control' value={formData.departament} onChange={handleChange} required>
            <option value="" >Choose Departament</option>
            <option value="departament-1" >Departament 1</option>
            <option value="departament-2">Departament 2</option>
            <option value="departament-3">Departament 3</option>
          </select>
          <select name='doctor' className='form-control' value={formData.doctor} onChange={handleChange} required>
            <option value="">Select Doctor</option>
            <option value="doctor-1">Doctor 1</option>
            <option value="doctor-2">Doctor 2</option>
            <option value="doctor-3">Doctor 3</option>
          </select>
      </div>
      <div className='input-row'>
        <input type="text" id="name" name="name" className='form-control' value={formData.name} onChange={handleChange} placeholder='Your Name' required/>
        <input type="email" id="email" name="email" className='form-control' value={formData.email} onChange={handleChange} placeholder='Your Email' required />
      </div>
      <div className='input-row'>
      <input type="date" id="appointment" name="date className='form-control'" className='form-control' value={formData.date} required onChange={handleChange} min="2023-01-01" max="2024-12-31"/>
      <input type="time" id="appointment" name="time" className='form-control' value={formData.time} onChange={handleChange} required />
     </div>
        <button className='button-4 button-form'>Make an Appoitment</button>
    </form>
    </div>
  )
}

export default Appointment