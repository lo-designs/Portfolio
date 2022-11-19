import React, { useEffect, useState } from "react";
import "./App.scss";
import "./Components/Themes/Themes.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import PageRoutes from "./Components/PageRoutes/PageRoutes";
import Footer from "./Components/Footer/Footer";

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
        <div className="header-section">
          <Header />
        </div>
        <div className="theme-options">
          <div id="theme-black" onClick={() => handleClick("theme-black")} />
          <div id="theme-white" onClick={() => handleClick("theme-white")} />
          <div id="theme-tan" onClick={() => handleClick("theme-tan")} />
          <div id="theme-purple" onClick={() => handleClick("theme-purple")} />
          <div id="theme-green" onClick={() => handleClick("theme-green")} />
        </div>

        <div className="page-routes-section">
          <PageRoutes />
        </div>
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
