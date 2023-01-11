import React from "react";
// import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";


import "./Index.scss";

function Index() {
  return (
    <div className="home-page">
      <div className="main-container">
        <h1 className="design">
          Front-end <br />Design &<br /> Development
        </h1>
      </div>
      <div>
      <Portfolio />
      </div>
      {/* <div className="about-section">
        <About />
      </div> */}
    </div>
  );
}

export default Index;
