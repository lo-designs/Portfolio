/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../PortfolioPages.scss";
import youMatter from "../../Images/YHA/YouMatter.gif";
import yhaHero from "../../Images/YHA/yhaHero.jpg";
import yhaMap from "../../Images/YHA/yhaMap.jpg";
import resources from "../../Images/YHA/resources.jpg";
import yhaFigma from "../../Images/YHA/yhaFigma.jpg";

function Yha() {
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
          <li id="section-2"></li>Features
        </a>
        <a className="side-nav-link" href="#sctr3">
          <li id="section-3"></li>Prototyping
        </a>
        <a className="side-nav-link" href="#sctr4">
          <li id="section-4"></li>Summary
        </a>
        <span>
          <li id="next-previous">
            <a
            id="previous"
              className="side-nav-link"
              href="https://www.lauragunther.dev/outtawax"
            >
              🡨{" "}
            </a>
            <span> // </span>
            <a
            id="next"
              className="side-nav-link"
              href="https://www.lauragunther.dev/neurotype"
            >
              {" "}
              🡪
            </a>
          </li>
        </span>
      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img id="yha-hero" src={yhaHero} alt="" />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Health & Wellness Resource App</div>
                <div className="project-type">
                  Self-defined project // UX UI
                </div>
                <div className="subtitle">
                  Researching and protoyping a health & wellness resource app.
                </div>

                <div className="overview">
                  <p>
                    After working with displaced youth at a Minneapolis
                    nonprofit, I wanted to design a platform to help adolescents
                    easily connect with health and wellness resources specific
                    to their needs.
                  </p>
                  <p>
                    My goal was to learn about resources that currently exist, and to determine a way to make
                    resources more readily available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sctr1">
          <div className="cover">
            <div className="yha-square" id="section-1"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number">
                Secondary Research // Informational Interviews
              </p>
              <p className="description-title">
                01 Deep dive: health & wellness resources for youth.
              </p>
              <p>
                During research for this project, I found a lot of mental health
                and wellness resources, however, many of them are text heavy and
                hard to scan for important information. This makes it
                challenging to find help, especially if you don't know exactly
                what you need. Interviews with licensed social workers revealed
                Youth Services Network [YSN] as an effective resource, so I
                decided to use it as a reference point.
              </p>
            </div>
            <div className="poster">
              <img id="resources" src={resources} alt=""></img>
              <p id="resources-caption" className="caption">
                [ L-R: Adult & Teen Challenge, stopbullying.gov, NAMI ]
              </p>
            </div>
          </div>
        </section>

        <section id="sctr2">
          <div className="cover">
            <div className="yha-square" id="section-2"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number">
                Proto-persona // Experience mapping
              </p>
              <p className="description-title">
                02 Determining how to address health & wellness needs.
              </p>
              <p>
                The interviews, research, and analysis of YSN helped me
                determine features for the app: easy to access contact info,
                scannable information, direct call and email links.
                Additionally, I wanted to implement a way to narrow down
                resources to find those that best fit the needs of the person
                using the app. I created a proto-persona, an experience map, a
                user flow, and wireframes using Sketch and Adobe XD.
              </p>
            </div>
            <div className="poster">
              <img src={yhaMap} alt=""></img>
              <p className="caption">[ Experience map: made in Adobe XD ]</p>
            </div>
          </div>
        </section>

        <section id="sctr3">
          <div className="cover">
            <div className="yha-square" id="section-3"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number">Prototyping //</p>
              <p className="description-title">
                03 Accessible resources & customization.
              </p>
              <p>
                In addition to easy access hotlines and contact info, the option
                to create an account to customize needs and preferences would
                allow users to save important information and access it easily
                when needed.
              </p>
            </div>
            <div className="poster">
              <img src={yhaFigma} alt=""></img>
              <p className="caption">
                [ Prototype made in Figma ]
              </p>
            </div>
          </div>
        </section>

        <section id="sctr4">
          <div className="cover">
            <div className="yha-square" id="section-4"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number">Summary //</p>
              <p className="description-title">
                Building on existing resources.
              </p>
              <p>
                My overall goal was to design an app for youth seeking help and
                support connect with resources specific to their needs. I gained
                some valuable insights in my research and it is something that I
                would love to build upon in the future.
              </p>
        
            </div>
            <div className="poster">
              <img src={youMatter} alt=""></img>
              <p className="last-caption">
                [ Logo made in Photoshop ]
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Yha;
