/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../../PortfolioPages/PortfolioPageStyles.scss";

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
          <li className="color-code" id="step-one"></li>1 //
        </a>
        <a href="#sctr3">
          <li className="color-code" id="step-two"></li>2 //
        </a>
        <a href="#sctr4">
          <li className="color-code" id="step-three"></li>3 //
        </a>
        <a href="#sctr5">
          <li className="color-code" id="summary"></li>Summary
        </a>
      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img
              className="soona-hero"
              src="https://images.pexels.com/photos/952264/pexels-photo-952264.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">soona.</div>
                <div className="subtitle">24 HR Content Studio // UX UI</div>
                <div id="line"></div>
                <div className="project-type">
                  Web app rapid prototyping & evaluation.
                </div>

                <div className="overview">
                  <p>
                    Soona is a studio that produces professional photos and
                    videos of products within 24 hours. Founded by creatives Liz
                    Giorgi & Hayley Anderson, they started Soona with the shared
                    vision of making quality, custom content accessible to
                    brands of all sizes.
                  </p>
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
            <div className="description-position">
              <div className="description">
                <p className="title-number">// CHALLENGE</p>
                <p className="description-title">description</p>
                <p>
                  ✧ Make the booking & building a shoot process engaging + easy
                  to follow. ✧ Generate follow-through in purchasing finalized
                  photos and videos.
                </p>
              </div>
              <div className="poster">{/* carousel */}</div>
            </div>
          </div>
        </section>

        <section id="sctr2">
          <div className="cover">
            <div className="square" id="step-one"></div>
          </div>
          <div className="content">
            <div className="description-position">
              <div>
                <div className="description">
                  <p className="title-number">
                    01 Understanding services of a 24 hour content studio.
                  </p>
                  <p className="description-title">
                    Secondary Research // Comparative Audit // Journey Mapping
                  </p>
                  <p>
                    After speaking with Hayley, one of Soona's founders, to get
                    an overview of services Soona provides, we did a comparative
                    audit of the site and some of their competitors. I then did
                    a step-by-step analysis of the process a customer takes on
                    the Soona site to create a customer journey map.
                  </p>
                </div>
                <div className="poster">
                  <img
                    src="https://i.pinimg.com/originals/09/54/fa/0954fa997903c4f02a18647e27be0fdb.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sctr3">
          <div className="cover">
            <div className="square" id="step-two"></div>
          </div>
          <div className="content">
            <div className="description-position">
              <div>
                <div className="description">
                  <p className="title-number">
                    02 Determining features through analysis.
                  </p>
                  <p className="description-title">
                    Rapid Prototyping // Development Scope // Kano Analysis
                  </p>
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
                  <img
                    src="https://i.pinimg.com/originals/11/40/b3/1140b366433f981d0512fa6b7c6c6483.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sctr4">
          <div className="cover">
            <div className="square" id="step-three"></div>
          </div>
          <div className="content">
            <div className="description-position">
              <div>
                <div className="description">
                  <p className="title-number">
                    03 Fitting the developer's time budget.
                  </p>
                  <p className="description-title">// Feature Proposal</p>
                  <p>
                    Four of the features that ranked highest based on the Kano
                    analysis were recommended in my feature proposal. These
                    features also needed to fit within the developer’s time
                    budget of 40 hours. I created annotated wireframes of those
                    features for the feature proposal.
                  </p>
                </div>
                <div className="poster">
                  <img
                    src="https://i.pinimg.com/originals/ea/4c/ea/ea4ceae06d84f7468280ab6a70e6ef38.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sctr5">
          <div className="cover">
            <div className="square" id="summary"></div>
          </div>
          <div className="content">
            <div className="description-position">
              <div>
                <div className="description">
                  <p className="title-number">Summary // A little guidance.</p>
                  <p className="description-title">A little guidance.</p>
                  <p>
                    Simple features were suggested to help guide customers
                    through the process of booking a shoot. These features
                    included: a progress bar, quick view options, a
                    work-in-progress pop-up message, and a style guide.
                  </p>
                </div>
                <div className="poster">
                  <img
                    src="https://i.pinimg.com/originals/0a/d7/7e/0ad77ed3394095609c3f9fb72f7f08e2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Soona;
