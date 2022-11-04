import React from "react";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import "./Index.scss";

function Index() {
  return (
    <div className="home-page">
      <div className="main-container">
        <h1 className="design">
          front end design & development
        </h1>
      </div>
      <div className="portfolio-section">
        <Portfolio />
      </div>
      <div className="about-section">
        <About />
      </div>
    </div>
  );
}

export default Index;
