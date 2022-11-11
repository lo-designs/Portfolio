import React from "react";
import "../PortfolioPages.scss";
import youMatter from "../../Images/YHA/YouMatter.gif";
import yhaHero from "../../Images/YHA/YHA.jpg";
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
          <li id="section-1"></li>Process
        </a>
        <a className="side-nav-link" href="#sctr2">
          <li id="section-2"></li>Testing
        </a>
        <a className="side-nav-link" href="#sctr3">
          <li id="section-3"></li>Prototyping
        </a>
        <a className="side-nav-link" href="#sctr4">
          <li id="section-4"></li>Summary
        </a>
      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img src={yhaHero} alt="" />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Health & Wellness Resources App</div>
                <div className="subtitle">
                  Researching and protoyping an app to help adolescents find
                  health and wellness resources.
                </div>
                <div className="project-type">
                  Self-defined project // UX UI
                </div>

                <div className="overview">
                  <p>
                    After working with displaced youth at a Minneapolis
                    nonprofit, I wanted to design a mobile app for youth facing
                    mental/emotional health issues to find and connect with
                    support specific to their needs.
                  </p>
                  <p>
                    The challenge was to learn about the resources for youth
                    that currently exist to find areas of opportunity, and to
                    determine a way to make these reasources readily available
                    and easy to find
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
                Secondary Research // Informational Interviews
              </p>
              <p className="description-title">
                01 Deep dive: health & wellness resources for youth.
              </p>
              <p>
                Beginning research for this project, I quickly found that there
                are a lot of resources for youth. Most of these resources,
                however, are text heavy and hard to scan for important
                information. This makes it hard to find help, especially if you
                don't know exactly what you're looking for. During interviews
                with licensed social workers, Youth Services Network (YSN) was
                highlighted as an effective (yet outdated) resource. I decided
                to use YSN as a reference point, and did a step-by-step analysis
                of the process someone takes to connect with resources.
              </p>
            </div>
            <div className="poster">
              <div className="poster-image">
                <img src={resources} alt=""></img>
                <p className="caption">Some existing resources</p>
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
              <div className="poster-image">
                <img src={yhaMap} alt=""></img>
                <p className="caption">Experience map made in XD</p>
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
              <p className="title-number">Prototyping //</p>
              <p className="description-title">
                03 Accessible resources & customization.
              </p>
              <p>
                In addition to easy to access hotlines and contact info, I added
                the option to create an account to customize needs and
                preferences. The idea is that this would help someone using the
                app filter through resources to find the best help for them. I
                designed and created the 'Youth Matters' logo using both
                Photoshop and Illustrator, designed the prototype using Adobe
                XD, and made the prototype interactive using Figma.
              </p>
            </div>
            <div className="poster">
              <div id="yha" className="poster-image">
                <img id="yha-prototype" src={yhaFigma} alt=""></img>
                <p className="caption">Prototype screens & color scheme made in Figma</p>
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
              <div id="summary-section">
                <p className="title-number">Summary //</p>
                <p className="description-title">
                  Building on existing resources.
                </p>
                <p>
                  My overall goal was to figure out how to design an app for
                  youth seeking help and support to connect with resources. I
                  gained some valuable insights in my research and it is
                  something that I would love to build upon in the future.
                </p>
              </div>
            </div>
            <div className="poster">
              <div className="poster-image">
                <img src={youMatter} alt=""></img>
                <p className="caption">Logo concept/GIF made in Photoshop</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Yha;
