/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../PortfolioPages.scss";
import soonaHero from "../../Images/Soona/soonaHero.jpg";
import soonaGif from "../../Images/Soona/soonaGif.gif";
import journeyMap from "../../Images/Soona/journey.png";
import soonaKano from "../../Images/Soona/kano.png";
import SoonaCarousel from "../../Carousels/SoonaCarousel/SoonaCarousel";
import soonaQuickView from "../../Images/Soona/quick-view.png";

function Soona() {
  return (
    <div className="project">
      <ul className="side-nav">
        <li className="design-process-header"></li>
        <a className="side-nav-link" href="#sctr0">
          <li id="section-0"></li>Overview
        </a>
        <a className="side-nav-link" href="#sctr1">
          <li id="section-1"></li>Research
        </a>
        <a className="side-nav-link" href="#sctr2">
          <li id="section-2"></li>Prototyping
        </a>
        <a className="side-nav-link" href="#sctr3">
          <li id="section-3"></li>Feature Proposal
        </a>
        <a className="side-nav-link" href="#sctr4">
          <li id="section-4"></li>Summary
        </a>
      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img id="soona-hero" src={soonaHero} alt="" />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Soona</div>
                <div className="project-type">
                  24 HR Content Studio // UX UI
                </div>
                <div className="subtitle">
                  Web app rapid prototyping & evaluation.
                </div>

                <div className="overview">
                <p>
                  <b>
                    <a
                      href="https://soona.co/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Soona{" "}
                    </a>
                  </b>
               
                    is a studio that produces professional photos and videos of
                    products within 24 hours. Creatives Liz Giorgi & Hayley
                    Anderson started Soona with the shared vision of making
                    quality, custom content accessible to brands of all sizes.
                  </p>
                  <p>
                    Objectives: [1] Make the booking & building a shoot process
                    engaging + easy to follow. [2] Generate follow-through in
                    ordering finalized photos and videos.
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
              <p className="title-number">
                Secondary Research // Comparative Audit // Journey Mapping
              </p>
              <p className="description-title">
                01 Understanding services of a 24 hour content studio.
              </p>
              <p>
                We met with Hayley [Soona co-founder] to get an overview of
                services Soona provides and did a comparative audit of the site
                and some of their competitors. I then did a step-by-step
                analysis of the process a customer takes on the Soona site to
                create a customer journey map.
              </p>
            </div>
            <div className="poster">
              <img src={journeyMap} alt=""></img>
              <p className="caption">
                [ Customer experience map: made in Sketch ]
              </p>
            </div>
          </div>
        </section>

        <section id="sctr2">
          <div className="cover">
            <div className="square" id="section-2"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number">
                Rapid Prototyping // Development Scope // Kano Analysis
              </p>
              <p className="description-title">
                02 Determining features through analysis.
              </p>
              <p>
                Wireframes of proposed Soona features were collectively placed
                in InVision for Soona's developer to estimate how much time was
                needed for each feature. Wireframes were then narrowed down to
                10 (out of ≈100) through dot voting. Soona customers and staff
                completed a survey with the 10 features to determine which best
                fit their needs. That data was then analyzed based on the Kano
                model: performance, must-have, attraction and indifference.
              </p>
            </div>
            <div className="poster">
              <img src={soonaKano} alt=""></img>
              <p className="caption">
                [ Kano Analysis of proposed soona features ]
              </p>
            </div>
          </div>
        </section>

        <section id="sctr3">
          <div className="cover">
            <div className="square" id="section-3"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number">// Feature Proposal</p>
              <p className="description-title">
                03 Fitting the developer's time budget.
              </p>
              <p>
                I created annotated wireframes of the four features that ranked
                highest in the Kano analysis for the feature proposal. These
                features were also required to fit within the developer’s time
                budget of 40 hours.
              </p>
            </div>
            <div className="poster">
              <div className="poster-carousel">
                <SoonaCarousel />
              </div>
            </div>
            <div id="mobile-images">
              <div className="poster">
                {/* <img src={soonaProgressBar} alt=""></img>
                <p className="caption">✧ Proposed Feature: progress bar</p> */}
                <img src={soonaQuickView} alt=""></img>
                <p className="caption">
                  [ Proposed feature: quick view option ]
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="sctr4">
          <div className="cover">
            <div className="square" id="section-4"></div>
          </div>

          <div className="content">
            <div className="description">
              <p className="title-number">// Summary</p>
              <p className="description-title">A little guidance.</p>
              <p>
                Simple features were suggested to make the booking & building a
                shoot process engaging + easy to follow, as well as generate
                follow-through in ordering finalized photos and videos. These
                features included: a progress bar, quick view options, a
                work-in-progress pop-up message, and a style guide.
              </p>
            </div>
            <div className="poster">
              <img src={soonaGif} alt=""></img>
              <p className="last-caption"></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Soona;
