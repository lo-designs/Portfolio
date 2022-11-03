/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../../PortfolioPages/PortfolioPageStyles.scss";

function OuttaWax() {
  return (
    <div className="project">
      <ul>
        <li className="design-process-header"></li>
        <a href="#sctr0">
          <li className="color-code" id="overview"></li>Overview
        </a>
        <a href="#sctr1">
          <li className="color-code" id="process"></li>Objectives
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
                  {/* <p className="website">
                    Check out the site:
                    <a href="https://www.petteshounds.com"> petteshounds.com</a>
                  </p> */}
                  <p>
                    Coming soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="sctr1">
          <div className="cover">
            <div className="square" id="process"></div>
          </div>
          <div className="content">
  
              <div className="description">
                <p className="title-number">// Objectives</p>
                <p className="description-title">
                  ✧ Make services + prices scannable. ✧ Complement existing logo
                  and theme. ✧ More pet pictures.
                </p>
                <p>
                  Design choices were based around the existing Pette's Hounds
                  website and logo, which I animated using Photoshop. I also
                  created the GIFs from videos sourced from Pette's Hounds
                  social media accounts. After auditing the site on Google
                  Lighthouse, I optimized all of the images to a smaller file
                  size to increase the site load speed.
                </p>
                <p>
                  The original site as well as the redesign were built using
                  Squarespace. I was able to switch templates which helped with
                  the formatting of the site content in order to achieve the
                  desired look and feel.
                </p>
              </div>
              <div className="poster">
                <PettesHoundsCarousel />
              </div>
           
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default OuttaWax;
