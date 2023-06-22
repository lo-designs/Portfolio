/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../PortfolioPages.scss";
import parraHero from "../../Images/ParraLily/parraHero.jpg";

function ParraLily() {
  return (
    <div className="project">
      <ul className="side-nav">
        <li className="design-process-header"></li>
        <a className="side-nav-link" href="#sctr0">
          <li id="section-0"></li>Overview
        </a>
        <a className="side-nav-link" href="#sctr1">
          <li id="section-1"></li>Design
        </a>
        <span id="next-previous">
          <li>
            <a id="previous" href="https://www.lauragunther.dev/petteshounds">
              prev
            </a>
            <span id="project-number"> / 02 / </span>
            <a id="next" href="https://www.lauragunther.dev/outtawax">
              next
            </a>
          </li>
        </span>
      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img id="parra-hero" src={parraHero} alt="" />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">ParraLily</div>
                <div className="project-type">// web design</div>
                <div className="subtitle">Minneapolis food truck.</div>

                <div className="overview">
                  <p className="site-link">
                    Check out the site:{" "}
                    <b>
                      <a
                        className="website"
                        href="https://www.parralily.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        parralily.com
                      </a>
                    </b>
                  </p>
                  <p>
                    I had the opportunity to help set up, design, and build a
                    website for ParraLily, a new food truck in
                    Minneapolis. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="sctr1">
          <div className="cover">
            <div className="square" id="section-1"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number"></p>
              <p className="description-title">Design Process</p>
              <p>
                I started with the mobile design and made wireframes using Adobe
                XD and a design board in Photoshop. Design choices - colors and
                fonts - were based around both the pre-existing ParraLily logo
                as well as the color/look of the truck. I've also designed menus
                for their brunch events, catering, and the boxed lunches they
                offer.
              </p>
            </div>
            <div className="poster">
              <ParralilyCarousel />
            </div>
            <div id="mobile-images">
              <div className="poster">
                <img src={parraMenu} alt=""></img>
                <p className="caption">[ Boxed lunch menu ]</p>
                <img src={designBoard} alt=""></img>
                <p className="last-caption">[ Design board ]</p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default ParraLily;
