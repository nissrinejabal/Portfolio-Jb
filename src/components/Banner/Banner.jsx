import React from "react";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import me from "../../assets/pictures/Header/me.jpeg";
import GirlsPc from "../../assets/annimation/GirlsPc.json";

// import costume-animation from "../../assets/annimation/costume-animation.json";
// import costumeAnimation from "../../assets/annimation/costume-animation.json";

import ReactAnimation from "../../assets/annimation/ReactAnimation.json";


import "./Banner.scss";

function Banner() {
  return (
    <div className="banner-content padding-block-900 container">
      <div className="profile-section">
        <div className="avatar-container">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", stiffness: 100 },
            }}
            className="avatar"
            src={me}
            alt="Portrait Nissrine Jabal"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: {
              type: "spring",
              duration: 2,
              bounce: 0,
            },
          }}
          className=""
        >
          Hello, my name is Nissrine Jabal
        </motion.h1>

        <h2>
          I’m a passionate software engineer with 2 years of experience crafting
          responsive, dynamic, and user-friendly web interfaces
        </h2>
       
        <div className="social-list-banner">
          
          <a
            href="https://github.com/nissrinejabal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub"
          >
            <TiSocialGithubCircular className="icon-svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/nissrine-jabal-b2a711192/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn"
          >
            <TiSocialLinkedinCircular className="icon-svg" />
          </a>
        </div>
      </div>

      <div className="animation-container">
        <Lottie
          className="annimation-banner"
          animationData={ReactAnimation}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
}

export default Banner;
