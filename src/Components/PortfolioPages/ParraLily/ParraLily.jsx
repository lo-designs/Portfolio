/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import ParralilyCarousel from "../../Carousels/ParralilyCarousel";
import "../PortfolioPages.scss"
import parraHero from "../../Images/ParraLily/parra.jpg";

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
      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img src={parraHero} alt="" />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">ParraLily</div>
                <div className="subtitle">Local food truck.</div>

                <div className="project-type">// web design</div>

                <div className="overview">
                  <p className="website">
                    Check out the site:
                    <a href="https://www.parralily.com"> parralily.com</a>
                  </p>
                  <p>
                    ParraLily is a brand new food truck in Minneapolis. Because
                    they are just starting out, I had the opportunity to be
                    involved in the whole process of starting a site, rather
                    than previous web design work I had done using pre-existing
                    websites. I met with the talented owner/chef of ParraLily to
                    go over setting up a website: how to get set up with hosting
                    and different CMS options, as well as ideas for the design.
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
            <p className="title-number">Objectives //</p>
              <p className="description-title"></p>
              <p>
                I started with the mobile design after meeting with the owner
                and doing some comparative research on other food trucks. I made
                wireframes using Adobe XD, a design board in Photoshop, and
                created the website using WordPress.
              </p>
              <p>
                Design choices - colors, fonts, and format - were based around
                both the logo and the truck itself. Drawing inspiration from the
                truck, the site/ParraLily menu was designed to emulate
                mid-century diner menus.
              </p>
            </div>
            <div className="poster">
              <ParralilyCarousel />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ParraLily;
