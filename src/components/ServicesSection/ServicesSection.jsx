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
              {Array.isArray(service.description) ? (
                <div className="service-description">
                  {service.description.map((line, idx) => (
                    <div className="service-desc-line" key={idx}>{line}</div>
                  ))}
                </div>
              ) : (
                <p className="service-description">{service.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
