import React from "react";
import {
  Header,
  Banner,
  Main,
  Contact,
  CoffeeChat,
  Footer,
} from "../../Components";
import "./Home.scss";

function Home() {
  return (
    <div>
      <div className="hero-section-wrapper">
        <Header />
        <Banner />
      </div>
      <Main />

      <Contact />
      <div />
      <div className="hero-section-footer">
      <CoffeeChat />
      <Footer />
      </div>
    </div>
  );
}

export default Home;
