/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../PortfolioPages.scss";
import outtaHero from "../../Images/OuttaWax/outtaHero.jpg";

function OuttaWax() {
  return (
    <div className="project">
      <ul className="side-nav">
        <li className="design-process-header"></li>
        <a className="side-nav-link" href="#sctr0">
          <li id="section-0"></li>Overview
        </a>
        <a className="side-nav-link" href="#sctr1">
          <li id="section-1"></li>Objectives
        </a>
        <span id="next-previous">
          <li>
            <a id="previous" href="https://www.lauragunther.dev/parralily">
               prev
            </a>
            <span id="project-number"> / 03 / </span>
            <a id="next" href="https://www.lauragunther.dev/yha">
              next 
            </a>
          </li>
        </span>
      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img id="outta-hero" src={outtaHero} alt="" />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Outta Wax</div>
                <div className="project-type">// Web Design</div>
                <div className="subtitle">
                  Vinyl pressing services in Minneapolis.
                </div>

                <div className="overview">
                  <p>Coming soon!</p>
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
