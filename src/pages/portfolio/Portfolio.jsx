import React from "react";
import "./Portfolio.scss";
import {
  Header,
  Footer,
  ServicesSection,
  Skills,
  CoffeeChat,
  ServicesSectionEducation,
} from "../../Components";
import Lottie from "lottie-react";
// import Websites from "../../components/Websites/Websites";
import reactAnimation from "../../assets/annimation/costume-animation.json";
function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="hero-section-wrapper">
        <Header />
        {/* <div className="portfolio-animation-wrapper">
          <Lottie
            animationData={reactAnimation}
            loop={true}
            className="about-me__lottie"
          />
          <div className="portfolio-connector-line"></div>
        </div> */} <ServicesSectionEducation /> 
        <div className="container padding-block-900 margin-top-900"></div>
      </div>
      <div className="portfolio-education-wrapper">
       
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
