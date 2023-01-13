/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import ParralilyCarousel from "../../Carousels/ParralilyCarousel";
import "../PortfolioPages.scss";
import parraHero from "../../Images/ParraLily/parraHero.jpg";
import parraMenu from "../../Images/ParraLily/brasika2-min.png";
import designBoard from "../../Images/ParraLily/designboard.jpg";

function ParraLily() {
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
            <a id="previous" href="https://www.lauragunther.dev/petteshounds">
              🡨{" "}
            </a>
            <span> // </span>
            <a id="next" href="https://www.lauragunther.dev/outtawax">
              {" "}
              🡪
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
                  <p className="website">
                    Check out the site:{" "}
                    <b>
                      <a
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
                    website for ParraLily, a fantastic new food truck in
                    Minneapolis. I met with the talented owner/chef of ParraLily
                    to go over setting up a website: how to get set up with
                    hosting and different CMS options, as well as ideas for the
                    design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sctr1">
          <div className="cover">
            <div className="parra-square" id="section-1"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number"></p>
              <p className="description-title">Objectives & Process</p>
              <p>
                I started with the mobile design and made wireframes using Adobe
                XD and a design board in Photoshop. Design choices - colors and
                fonts - were based around both the pre-existing ParraLily logo
                as well as the truck. I've also designed menus for their brunch
                events and for the boxed lunches they offer.
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
        </section>
      </div>
    </div>
  );
}

export default ParraLily;
