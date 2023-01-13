/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Components/PageRoutes/PageRoutes";
import "./App.scss";
import "./Components/Header/Header.scss";
import "./Components/Footer/Footer.scss";
import "./Components/Themes/Themes.scss";

function App() {
  const [colorTheme, setColorTheme] = useState("theme-white");

  useEffect(() => {
    const currentColorTheme = localStorage.getItem("theme-color");
    if (currentColorTheme) {
      setColorTheme(currentColorTheme);
    }
  }, []);

  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
  };

  return (
    <BrowserRouter>
      <div className={`App ${colorTheme}`}>
        <div className="noise"></div>
        <div className={`header ${colorTheme}`}>
          <span className="header-links">
            <a className="header-logo" href="/">
              laura gunther
            </a>
            {/* <span className="header-links-divider"></span> */}
            {/* <a className="about" href="/about">
              about
            </a> */}
            <span className="header-links-divider"> // </span>
            <a className="portfolio-nav-link" href="/portfolio">
              portfolio
            </a>
          </span>
        </div>
        <div className="theme-options">
          <div className="color-option" id="theme-black" onClick={() => handleClick("theme-black")} />
          <div className="color-option" id="theme-white" onClick={() => handleClick("theme-white")} />
          <div className="color-option" id="theme-tan" onClick={() => handleClick("theme-tan")} />
          <div className="color-option" id="theme-green" onClick={() => handleClick("theme-green")} />
          <div className="color-option" id="theme-purple" onClick={() => handleClick("theme-purple")} />
          <div className="color-option" id="theme-red" onClick={() => handleClick("theme-red")} />
          <div className="color-option" id="theme-teal" onClick={() => handleClick("theme-teal")} />
         
        </div>

        <div className="page-routes-section">
          <PageRoutes />
        </div>
        <div className={`footer ${colorTheme}`}>
          <span className="footer-links">
            {/* <a className="resume" href="/">
              resume
            </a> */}
            <span className="footer-links-divider"> // </span>
            <a className="email" href="mailto:lauraguntherdesigns@gmail.com">
              email
            </a>
          </span>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
