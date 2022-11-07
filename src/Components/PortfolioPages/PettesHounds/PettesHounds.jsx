/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import PettesHoundsCarousel from "../../Carousels/PettesHoundsCarousel";
import "./../../PortfolioPages/PortfolioPageStyles.scss";


function PettesHounds() {
  return (
    <div className="project">
      <ul className="side-nav">
        <li className="design-process-header"></li>
        <a href="#sctr0">
          <li className="color-code" id="pettes-0"></li>Overview
        </a>
        <a href="#sctr1">
          <li className="color-code" id="pettes-1"></li>Objectives
        </a>
      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img
              src="https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Pette's Hounds</div>
                <div className="subtitle">
                  Dog walking & pet care services in Minneapolis
                </div>

                <div className="project-type">// Web redesign</div>

                <div className="overview">
                  <p className="website">
                    Check out the site:
                    <a href="https://www.petteshounds.com"> petteshounds.com</a>
                  </p>
                  <p>
                    Pette’s Hounds had all of the right components to make a
                    great website: cute name, cute logo, cute pet pictures. It
                    just needed some slight format changes. And some extra pet
                    pics.
                  </p>
                  <p>
                    I had the pleasure of working with the founder of Pette’s
                    Hounds to create the new version of the site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sctr1">
          <div className="cover">
            <div className="square" id="pettes-1"></div>
          </div>
          <div className="content">
            <div className="description">
              <h4 className="objectives-title">Objectives</h4>
              <p>
                Design choices were based around the existing Pette's Hounds
                website and logo, which I animated using Photoshop. I also
                created the GIFs from videos sourced from Pette's Hounds social
                media accounts. After auditing the site on Google Lighthouse, I
                optimized all of the images to a smaller file size to increase
                the site load speed.
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
        </section>
      </div>
    </div>
  );
}

export default PettesHounds;
