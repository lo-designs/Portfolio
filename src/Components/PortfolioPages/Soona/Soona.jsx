/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../PortfolioPages.scss";
import soonaHero from "../../Images/Soona/newSoona.jpg";
import soonaGif from "../../Images/Soona/soonaGif.gif";
import journeyMap from "../../Images/Soona/journey.png";
import soonaKano from "../../Images/Soona/kano.png";
import SoonaCarousel from "../../Carousels/SoonaCarousel/SoonaCarousel";

function Soona() {
   return (
      <div className="project">
      <ul className="side-nav">
        <li className="design-process-header"></li>
        <a href="#sctr0">
          <li className="color-code" id="section-0"></li>Overview
        </a>
        <a href="#sctr1">
          <li className="color-code" id="section-1"></li>Process
        </a>
        <a href="#sctr2">
          <li className="color-code" id="section-2"></li>Testing
        </a>
        <a href="#sctr3">
          <li className="color-code" id="section-3"></li>Prototyping
        </a>
        <a href="#sctr4">
          <li className="color-code" id="section-4"></li>Summary
        </a>

      </ul>
      <div>
        <section id="sctr0">
        <div className="cover" id="hero-image">
            <img src={soonaHero} alt="" />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Soona</div>
                <div className="subtitle">
                Web app rapid prototyping & evaluation.
                </div>
                <div className="project-type">24 HR Content Studio // UX UI</div>

                <div className="overview">
                  <p>
                  Soona is a studio that produces professional photos and
                    videos of products within 24 hours. Founded by creatives Liz
                    Giorgi & Hayley Anderson, they started Soona with the shared
                    vision of making quality, custom content accessible to
                    brands of all sizes.
                  </p>
                  <p>Objectives: ✧ Make the booking & building a shoot process engaging + easy
                  to follow. ✧ Generate follow-through in purchasing finalized
                  photos and videos.</p>
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
              <p className="title-number">Secondary Research // Comparative Audit // Journey Mapping</p>
              <p className="description-title">01 Understanding services of a 24 hour content studio.</p>
              <p>
              After speaking with Hayley, one of Soona's founders, to get
                    an overview of services Soona provides, we did a comparative
                    audit of the site and some of their competitors. I then did
                    a step-by-step analysis of the process a customer takes on
                    the Soona site to create a customer journey map.
              </p>
            </div>
            <div className="poster">
            <div className="poster-image">
               <img src={journeyMap} alt=""></img>
               <p className="caption">Customer Journey Map made in Sketch</p>
            </div>
            </div>
          </div>
        </section>

        <section id="sctr2">
          <div className="cover">
            <div className="square" id="section-2"></div>
          </div>
          <div className="content">
              <div className="description">
                <p className="title-number">Rapid Prototyping // Development Scope // Kano Analysis</p>
                <p className="description-title">02 Determining features through analysis.</p>
                <p>
                Wireframes were collectively placed in InVision for Soona's
                    developer to estimate how much time was needed for each
                    feature. Wireframes were then narrowed down to 10 (out of
                    ≈100) through dot voting. Soona customers and staff
                    completed a survey with the 10 features to determine which
                    best fit their needs. That data was then analyzed based on
                    the Kano model: performance, must-have, attraction and
                    indifference.
                </p>
              </div>
              <div className="poster">
              <div className="poster-image">
               <img src={soonaKano} alt=""></img>
               <p className="caption">kano analysis of proposed soona features</p>
            </div>
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
                <p className="description-title">03 Fitting the developer's time budget.</p>
                <p>
                Four of the features that ranked highest based on the Kano
                    analysis were recommended in my feature proposal. These
                    features also needed to fit within the developer’s time
                    budget of 40 hours. I created annotated wireframes of those
                    features for the feature proposal.
                </p>
              </div>
              <div className="poster">
              <div className="poster-carousel">
              <SoonaCarousel />
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
                Simple features were suggested to help guide customers
                    through the process of booking a shoot. These features
                    included: a progress bar, quick view options, a
                    work-in-progress pop-up message, and a style guide.
                </p>
              </div>
              <div className="poster">
              <div className="poster-image">
               <img src={soonaGif} alt=""></img>
               <p className="caption"></p>
            </div>
            </div>
            </div>
        </section>

      </div>
    </div>
   )
}

export default Soona;