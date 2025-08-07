import React, { useState, useEffect } from "react";
import "./Header.scss";
import { FaMoon } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import {
  TiTimes,
  TiThMenu,
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
// import logo from "../../assets/pictures/Header/logo.png";
import logo2 from "../../assets/pictures/Header/logo2.png";
const Navbar = () => {
  const [ShowModal, setShowmodal] = useState(false);
  const [Theme, setTheme] = useState(
    localStorage.getItem("currentMode") || "dark"
  );
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(Theme);
    localStorage.setItem("currentMode", Theme);
  }, [Theme]);

  return (
    <div>
      <header className="primary-header">
        <div className="nav-wrapper-header">
          <div className="logo-link">
            <Link to="/">
              <img src={logo2} alt="Logo" className="header__logo" />
            </Link>
            <p className="fw-bold">nissrine jabal</p>
          </div>
          <div className="logo-link-mobile">
            <button
              onClick={() => {
                setShowmodal(true);
              }}
              className="button-wraper menu-button"
            >
              <TiThMenu size={20} className="menu-icon-menu" />
            </button>
            <nav className="primary-navigation">
              <ul className="nav-list">
                <li>
                  <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                {/* <li>
                <Link
                  to="/services"
                  className={location.pathname === "/services" ? "active" : ""}
                >
                  Resume
                </Link>
              </li> */}
                <li>
                  <Link
                    to="/About"
                    className={location.pathname === "/About" ? "active" : ""}
                  >
                    About me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Portfolio"
                    className={
                      location.pathname === "/Portfolio" ? "active" : ""
                    }
                  >
                    My Portfolio
                  </Link>
                </li>
              </ul>
            </nav>
            {/* //////////////////// */}
          </div>

          <div className="social-list-header">
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
            <button
              className="button-wraper"
              aria-label="Toggle Dark Mode"
              onClick={() => setTheme(Theme === "dark" ? "light" : "dark")}
            >
              {Theme === "dark" ? (
                <FaMoon size={20} className="menu-icon-moon" />
              ) : (
                <TiWeatherSunny size={20} className="menu-icon-moon" />
              )}
            </button>
            {ShowModal && (
              <div className="menu__modal">
                <nav>
                  <ul className="modal">
                    <li>
                      <button
                        onClick={() => {
                          setShowmodal(false);
                        }}
                        className="button-wraper"
                      >
                        <TiTimes size={20} className="menu-icon-close" />
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={location.pathname === "/" ? "active" : ""}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AboutUs"
                        className={
                          location.pathname === "/AboutUs" ? "active" : ""
                        }
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Careers"
                        className={
                          location.pathname === "/Careers" ? "active" : ""
                        }
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Community"
                        className={
                          location.pathname === "/Community" ? "active" : ""
                        }
                      >
                        Community
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
