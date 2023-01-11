/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../PortfolioPages.scss";
import outtaHero from "../../Images/OuttaWax/outtaHero.jpg";

function OuttaWax() {
  return (
    <div className="project">
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
