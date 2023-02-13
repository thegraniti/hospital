import React from "react";
import { TestimonialsSlider } from "../../../constant/testimonialsData";
import "react-multi-carousel/lib/styles.css";
import "./Testimonials.css";

function Testimonials() {


  



  return (
    <div className="section">
      <div className="testimonials-container">
        <div className="testimonials-header flex header">
          <h2>Testimonials</h2>
          <h1>
            Patients Say About <br />
            Our Services
          </h1>
        </div>
        <div className="testimonials">
          <TestimonialsSlider/>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
