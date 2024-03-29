/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../PortfolioPages.scss";
import pettesHero from "../../Images/PettesHounds/phHero.jpg";
import PettesHoundsCarousel from "../../Carousels/PettesHoundsCarousel";
import pettesLogo from "../../Images/PettesHounds/phLogo.gif";
import homeOg from "../../Images/PettesHounds/homeog.jpg";
import homeNew from "../../Images/PettesHounds/home.jpg";
import servicesOg from "../../Images/PettesHounds/allServicesOg.jpg";
import servicesNew from "../../Images/PettesHounds/allservices.jpg";

function PettesHounds() {
  return (
    <div className="project">
      <ul className="side-nav">
        <li className="design-process-header"></li>
        <a className="side-nav-link" href="#sctr0">
          <li id="section-0"></li>Overview
        </a>
        <a className="side-nav-link" href="#sctr1">
          <li id="section-1"></li>Redesign
        </a>
        <span id="next-previous">
          <li>
            <a id="previous" href="https://www.lauragunther.dev/parralily">
              prev
            </a>
            <span id="project-number"> / 01 / </span>
            <a id="next" href="https://www.lauragunther.dev/yha">
              next
            </a>
          </li>
        </span>
      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img id="pettes-hero" src={pettesHero} alt="" />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title" className="pettes-title">
                  Pette's Hounds
                </div>
                <div className="project-type">// Web redesign</div>
                <div className="subtitle">
                  Dog walking & pet care services in Minneapolis.
                </div>

                <div className="overview">
                  <p>
                    I had the opportunity to work with the awesome founder of
                    Pette's Hounds to redesign a website for the dog walking and
                    pet care services they provide.
                    <br>
                      Recently, the owner made the shift from pet care services
                      to vinyl pressing{" "}
                      <b><a
                        className="website"
                        href="https://www.lauragunther.dev/outtawax"
                        target="_blank"
                        rel="noreferrer"
                      >
                        [Outta Wax]
                      </a></b>
                      , which I also had the fortune of designing and creating.
                      The Pette's Hounds site is no longer live, but you can see
                      before + afters of the redesign below:
                    </br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sctr1">
          <div className="cover">
            <div className="square" id="section-1"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number"></p>
              <p className="description-title"></p>
              <p>
                Check out before and afters of the redesign:
                {/* After auditing the site on Google
                Lighthouse, I optimized all of the images to a smaller file size
                to increase the site load speed. */}
              </p>
            </div>
            <div className="poster">
              <div className="poster-carousel">
                <PettesHoundsCarousel />
              </div>
            </div>
            <div id="mobile-images">
              <div className="poster">
                <img src={pettesLogo} alt=""></img>
                <p className="caption">
                  [ Pette's Hounds logo animated using Photoshop ]
                </p>
                <img src={homeOg} alt=""></img>
                <p className="caption">[ Original design: home page ]</p>
                <img src={homeNew} alt=""></img>
                <p className="caption">[ redesign: home page ]</p>
                <img src={servicesOg} alt=""></img>
                <p className="caption">[ Original design: Services page ]</p>
                <img src={servicesNew} alt=""></img>
                <p className="last-caption">[ Redesign: Services page ]</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PettesHounds;
