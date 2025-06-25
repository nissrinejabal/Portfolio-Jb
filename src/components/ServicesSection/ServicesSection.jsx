import React from "react";
import { MyServices } from "./MyServices";
import { MyEducation } from "./MyEducation";
import "./ServicesSection.scss";

const ServicesSection = () => {
  return (  
    <section className="services-content container">
      <div className="services-list">
        <h1 className="section-title">my experience</h1>
        {MyServices.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-point"></div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <span className="service-date">{service.date}</span>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
        <h1 className="section-title">my education</h1>
        {MyEducation.map((education, index) => (
          <div className="service-item" key={index}>
            <div className="service-point"></div>
            <div className="service-content">
              <h3 className="service-title">{education.title}</h3>
              <span className="service-date">{education.date}</span>
              <p className="service-description">{education.ecole}</p>
              <p className="service-description">{education.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
