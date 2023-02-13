import React from "react";
import Appointment from "../../../components/Appointment/Appointment";
import './Appointments.css'

function Appointments() {
  return (
    <div className="section">
      <div className="appointments-container">
        <div className="appointments-header flex header">
          <h2>APPOINTMENT</h2>
          <h1>Make An Appointment For Your Family</h1>
          <p>
            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
            ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
            rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
            et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea
            dolore sanctus sed et. Takimata takimata sanctus sed.
          </p>
          <div className="buttons">
                <button className="button-4">Find Doctor</button>
                <button className="button-6">Read More</button>
          </div>
        </div>
        <div className="appointments-form">
        <Appointment />
        </div>
      </div>
    </div>
  );
}

export default Appointments;
