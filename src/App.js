/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Components/PageRoutes/PageRoutes";
import { PortfolioNavProvider } from "./Components/PortfolioPages/PortfolioStyles/PortfolioNavContext";
import Footer from "./Components/Footer/Footer";
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
      <PortfolioNavProvider>
        <div className={`App ${colorTheme}`}>
          <div className="noise"></div>
          <div className={`header ${colorTheme}`}> 
            <span className="header-links">
              <a className="header-logo" href="/">
                lg design & dev
              </a>
              <span className="header-links-divider"> // </span>
              <a className="portfolio-nav-link" href="/portfolio">
                portfolio
              </a>
            </span>
          </div>
          <div className="theme-options">
            <div className="dark" id="theme-black" onClick={() => handleClick("theme-black")}> dark </div>
            <span className="light-dark-divider">|</span>
            <div className="light" id="theme-white" onClick={() => handleClick("theme-white")}> light </div> 
          </div>

          <div className="page-routes-section">
            <PageRoutes />
          </div>
          <Footer colorTheme={colorTheme} />
        </div>
      </PortfolioNavProvider>
    </BrowserRouter>
  );
}

export default App;
