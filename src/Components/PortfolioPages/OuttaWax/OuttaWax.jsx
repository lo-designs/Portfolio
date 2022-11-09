/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../PortfolioPages.scss";
import outtaHero from "../../Images/OuttaWax/OuttaWax.jpg";

function OuttaWax() {
  return (
    <div className="project">
      {/* <ul className="side-nav">
        <li className="design-process-header"></li>
        <a href="#sctr0">
          <li className="color-code" id="section-0"></li>Overview
        </a>
        <a href="#sctr1">
          <li className="color-code" id="section-2"></li>Objectives
        </a>
      </ul> */}
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img src={outtaHero} alt=""/>
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Outta Wax</div>
                <div className="subtitle">
                  Vinyl pressing services in Minneapolis.
                </div>

                <div className="project-type">// Web Design</div>

                <div className="overview">

                  <p>
                    Coming soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default OuttaWax;
