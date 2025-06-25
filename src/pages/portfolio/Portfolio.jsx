import React from "react";
import "./Portfolio.scss";
import {
  Header,
  Footer,
  ServicesSection,
  Skills,
  CoffeeChat,
} from "../../Components";
import Websites from "../../components/Websites/Websites";

function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="hero-section-wrapper">
        <Header />
        <div className="container padding-block-900 margin-top-900">
          <div className="contentfolio">
            <h1 className="fs-primary-heading fw-bold text-center">
              My Portfolio
            </h1>
            {/* <p className="text-center services-subtitle">
              My portfolio showcases a selection of my projects, highlighting my
              skills in web development, UI/UX design, and API integration. Each
              project reflects my commitment to quality and innovation,
              demonstrating my ability to create impactful digital solutions.
            </p> */}
          </div>
        </div>
      </div>

    
      
      <ServicesSection />
      <div className="padding-block-900">
        <Skills />
      </div>

      <div className="hero-section-footer background-cover">
        <CoffeeChat />
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;
