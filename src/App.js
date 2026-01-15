/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Components/PageRoutes/PageRoutes";
import { PortfolioNavProvider } from "./Components/PortfolioPages/PortfolioStyles/PortfolioNavContext";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
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
          <Header colorTheme={colorTheme} handleClick={handleClick} />

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
