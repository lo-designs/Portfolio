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
              prev
            </a>
            <span id="project-number"> / 05 / </span>
            <a id="next" href="https://www.lauragunther.dev/soona">
              next 
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
                  App prototype for a medical startup aiming to help treat addiction.
                </div>

                <div className="overview">
                  <p>
                    <b>
                      <a
                        className="website"
                        href="https://www.neurotype.io/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Neurotype Inc.{" "}
                      </a>
                    </b>
                    is building portable brain sensing tools to support the
                    recovery of people struggling with Opioid Use Disorder
                    [OUD].
                    We worked with Neurotype to help
                    determine the best way to integrate a portable
                    electroencephalogram [EEG] into a standard therapy/clinical
                    setting, as well as create a prototype for NeuromarkR™, an
                    application that displays EEG measurements. This solution provides practitioners with quantititave data to aid in the treatment of individuals with OUD.
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
              <p className="title-number">Secondary Research // Practitioner Interviews</p>
              <p className="description-title">
                01 Patient + practitioner sessions.
              </p>
              <p>
                We conducted secondary research to learn about the current landscape for addiction healthcare. To get an idea of what sessions are generally like in clinical and therapy settings, we spoke with 9 practitioners in various healthcare roles. 
              </p>
            </div>
            <div className="poster">
              <img src={neuroLogo} alt=""></img>
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
               Usability Testing // Experience Mapping
              </p>
              <p className="description-title">
                02 Portable EEG implementation in therapy.
              </p>
              <p>
               The information from interviews with healthcare professionals helped us gain a better idea of how a portable EEG could be implemented in a standard therapy session. This allowed us to create an experience map to visualize the process.
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
            <div className="square" id="section-3"></div>
          </div>
          <div className="content">
            <div className="description">
              <p className="title-number">Data Visualization // Prototyping</p>
              <p className="description-title">
                03 Interpretable data.
              </p>
              <p>
                We spoke with an expert in data visualization to learn best practices for presenting complicated medical data. The goal was to design a UI that displays data from an EEG in a way that is easy to interpret - the app takes measurements in patient
                brain reactivity when looking at substance-related images (from the EEG), which are then compared side-by-side with patient self-reported cravings.
              </p>
            </div>
            <div className="poster">
              <div className="poster-carousel">
                <NeurotypeCarousel />
              </div>
              <div id="mobile-images">
                <img src={neuroData} alt=""></img>
                <p className="caption">
                  [ Graph: brain reactivity vs. self-report | protoypes made by team in Figma ]
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
              <p className="description-title">Aiding in addiction treatment.</p>
              <p>
                Currently, addiction healthcare practitioners rely on
                qualitative data (e.g. self-reports) to inform treatment of OUD.
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
