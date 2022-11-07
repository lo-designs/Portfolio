/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../../PortfolioPages/PortfolioPageStyles.scss";

function OuttaWax() {
  return (
    <div className="project">
      <ul className="side-nav">
        <li className="design-process-header"></li>
        <a href="#sctr0">
          <li className="color-code" id="outta-0"></li>Overview
        </a>
        <a href="#sctr1">
          <li className="color-code" id="outta-1"></li>Objectives
        </a>
      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img
              src="https://images.unsplash.com/photo-1605055510925-4c9626126167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbnlsfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
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
