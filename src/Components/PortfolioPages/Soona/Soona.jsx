/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../PortfolioPageStyles.scss";
import SoonaCarousel1 from "../../Carousels/SoonaCarousel/SoonaCarousel1";
import SoonaCarousel2 from "../../Carousels/SoonaCarousel/SoonaCarousel2";
import SoonaCarousel3 from "../../Carousels/SoonaCarousel/SoonaCarousel3";

function Soona() {
   return (
      <div className="project">
      <ul>
        <li className="design-process-header"></li>
        <a href="#sctr0">
          <li className="color-code" id="overview"></li>Overview
        </a>
        <a href="#sctr1">
          <li className="color-code" id="process"></li>Process
        </a>
        <a href="#sctr2">
          <li className="color-code" id="step-one"></li>Testing
        </a>
        <a href="#sctr3">
          <li className="color-code" id="step-two"></li>Prototyping
        </a>
        <a href="#sctr4">
          <li className="color-code" id="step-three"></li>Summary
        </a>

      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img
              className="neurotype-hero"
              src="https://images.pexels.com/photos/952264/pexels-photo-952264.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Soona</div>
                <div className="subtitle">
                Web app rapid prototyping & evaluation.
                </div>
                <div id="line"></div>
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
            <div className="square" id="process"></div>
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
               <SoonaCarousel1 />
            </div>
          </div>
        </section>

        <section id="sctr2">
          <div className="cover">
            <div className="square" id="step-one"></div>
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
                <SoonaCarousel2 />
              </div>
            </div>
        </section>

        <section id="sctr3">
          <div className="cover">
            <div className="square" id="step-two"></div>
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
                <SoonaCarousel3 />
              </div>
            </div>
        </section>

        <section id="sctr4">
          <div className="cover">
            <div className="square" id="step-three"></div>
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
              
              </div>
            </div>
        </section>

      </div>
    </div>
   )
}

export default Soona;