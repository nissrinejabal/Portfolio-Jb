import React from "react";
import { MyEducation } from "./MyEducation";
import "./ServicesSection.scss";

const ServicesSectionEducation = () => {
  return (
    <section className="services-content container">
      <div className="services-list">
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

export default ServicesSectionEducation;
