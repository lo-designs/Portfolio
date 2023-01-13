/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../PortfolioPages.scss";
import NeurotypeCarousel from "../../Carousels/NeurotypeCarousel/NeurotypeCarousel";
import neuroHero from "../../Images/Neurotype/neuroHero.jpg";
import neuroGif from "../../Images/Neurotype/neuroGif.gif";
import neuroLogo from "../../Images/Neurotype/logo-concept.png";
import neuroMap from "../../Images/Neurotype/neuroMap.png";
import neuroData from "../../Images/Neurotype/neuroData.png";

function Neurotype() {
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
        <span id="next-previous">
          <li>
            <a id="previous" href="https://www.lauragunther.dev/yha">
              {"🡨"}
            </a>
            <span> // </span>
            <a id="next" href="https://www.lauragunther.dev/soona">
              {"🡪"}
              
            </a>
          </li>
        </span>
      </ul>
      <div>
        <section id="sctr0">
          <div className="cover" id="hero-image">
            <img id="neuro-hero" src={neuroHero} alt="" />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Neurotype</div>
                <div className="project-type">Medical Startup // UX UI</div>
                <div className="subtitle">
                  App prototype for an early stage medical startup.
                </div>

                <div className="overview">
                  <p>
                    <b>
                      <a
                        href="https://www.neurotype.io/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Neurotype Inc.{" "}
                      </a>
                    </b>
                    is building portable brain sensing tools to support the
                    recovery of people struggling with Opioid Use Disorder
                    [OUD], as well as other substance use disorders.
                  </p>
                  <p>
                    We had the honor of working with Neurotype Inc. to help
                    determine the best way to integrate a portable
                    electroencephalogram [EEG] into a standard therapy/clinical
                    setting, as well as create a prototype for NeuromarkR™, an
                    application used in conjunction with the EEG.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sctr1">
          <div className="cover">
            <div className="neuro-square" id="section-1"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number">Secondary Research //</p>
              <p className="description-title">
                01 Understanding addiction healthcare & treatment.
              </p>
              <p>
                Our first goal was to gain an understanding of the current
                landscape for addiction healthcare. We conducted secondary
                research to learn about the patient/practitioner experience in
                clinical and therapy settings, as well as industry trends for
                visually presenting complicated medical data.
              </p>
            </div>
            <div className="poster">
              <img src={neuroLogo} alt=""></img>
            </div>
          </div>
        </section>

        <section id="sctr2">
          <div className="cover">
            <div className="neuro-square" id="section-2"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number">
                User Interviews // Usability Testing // Experience Mapping
              </p>
              <p className="description-title">
                02 Sessions between patient & practitioner.
              </p>
              <p>
                We conducted nine remote interviews with practitioners in
                various healthcare roles. The information gathered from these
                interviews, in addition to our research, gave us context to what
                sessions generally look like between patient and practitioner.
                This helped to create an experience map to better visualize the
                process of implementing a portable EEG in a standard therapy
                session.
              </p>
            </div>
            <div className="poster">
              <img src={neuroMap} alt=""></img>
              <p className="caption">[ Experience map: made in Sketch ]</p>
            </div>
          </div>
        </section>

        <section id="sctr3">
          <div className="cover">
            <div className="neuro-square" id="section-3"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number">Data Visualization // Prototyping</p>
              <p className="description-title">
                03 Creating data that is easy to interpret.
              </p>
              <p>
                The idea is that the interface displays measurements in patient
                brain reactivity when looking at substance-related images. That
                data is then compared side-by-side with data reflecting patient
                self-reported cravings.
              </p>
              <p>
                We had the opportunity to walk through the data prototypes with
                an expert in data visualization. The main goal was to make EEG
                data easy to interpret for practitioners without EEG expertise.
                Prototypes were made by team using Figma.
              </p>
            </div>
            <div className="poster">
              <div className="poster-carousel">
                <NeurotypeCarousel />
              </div>
              <div id="mobile-images">
                <img src={neuroData} alt=""></img>
                <p className="caption">
                  [ Graph: brain reactivity vs. self-report ]
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="sctr4">
          <div className="cover">
            <div className="neuro-square" id="section-4"></div>
          </div>

          <div className="content">
            <div className="description">
              <p className="title-number">// Summary</p>
              <p className="description-title">Substantiating treatment.</p>
              <p>
                Currently, addiction healthcare practitioners rely on
                qualitative data [e.g. self-reports] to inform treatment of OUD.
                The solution Neurotype proposes would allow practitioners to
                objectively detect triggers for relapse, such as craving or
                distress at the point of care: providing quantitative data in
                addition to qualitative.
              </p>
              <p>
                We had the privilege of working with Neurotype Inc. to design a
                prototype for a tool that will be used in the treatment of OUD.
                The hope is that this technology can be integrated into standard
                therapy sessions, helping to substantiate OUD, and eventually
                aid in the treatment of other substance use disorders as well.
              </p>
              <p></p>
            </div>
            <div className="poster">
              <img src={neuroGif} alt=""></img>
              <p className="last-caption">[ GIF made in Photoshop ]</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Neurotype;
