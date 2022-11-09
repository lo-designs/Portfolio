/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../PortfolioPages.scss";
import NeurotypeCarousel from "../../Carousels/NeurotypeCarousel/NeurotypeCarousel";
import neuroHero from "../../Images/Neurotype/hero2.jpg";
import neuroGif from "../../Images/Neurotype/neuro-gif-ps.gif";
import neuroLogo from "../../Images/Neurotype/logo-concept.png";
import neuroMap from "../../Images/Neurotype/experience-map.png";

function Neurotype() {
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
            <img src={neuroHero} alt="" />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Neurotype</div>
                <div className="subtitle">
                  Web app design for early stage medical startup.
                </div>
                <div className="project-type">Medical Startup // UX UI</div>

                <div className="overview">
                  <p>
                    Neurotype is working to create a digital platform that will
                    facilitate the use of a portable electroencephalogram (EEG)
                    test in the treatment of opioid use disorder (OUD). We had
                    the privilege of working with Neurotype to help determine
                    the best way to implement an EEG into a standard
                    therapy/clinical setting, as well as create an interface
                    with easy to interpret data.
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
                Secondary Research // User Interviews
              </p>
              <p className="description-title">
                01 Understanding addiction healthcare & treatment.
              </p>
              <p>
                We conducted secondary research to understand the current
                landscape for addiction healthcare, the patient/practitioner
                experience, and industry trends for visually presenting
                complicated medical data. We then researched Neurotype
                comparators and conducted 9 remote interviews with practitioners
                in various healthcare roles.
              </p>
            </div>
            <div className="poster">
            <div className="poster-image">
               <img src={neuroLogo} alt=""></img>
               <p className="caption">Logo concept</p>
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
                Usability Testing // Information Architecture // Experience
                Mapping
              </p>
              <p className="description-title">
                02 Sessions between patient & practitioner.
              </p>
              <p>
                The information from our research provided context to what
                sessions generally look like between patient and practitioner.
                This helped us create an experience map of the process of
                implementing a portable EEG in a standard therapy session.
              </p>
            </div>
            <div className="poster">
            <div className="poster-image">
               <img src={neuroMap} alt=""></img>
               <p className="caption"></p>
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
              <p className="title-number">Data Visualization // Prototyping</p>
              <p className="description-title">
                03 Creating data that is easy to interpret.
              </p>
              <p>
                The idea is that the EEG will measure patients' brain reactivity
                when looking at substance-related images. That data will then be
                compared to patients' self-reported drug cravings to help track
                patient progress and substantiate treatment. We had the
                opportunity to walk through the wireframes with an expert in
                data visualization. The main goal in creating the interface was
                to make EEG data easy to interpret for practitioners without EEG
                expertise.
              </p>
            </div>
            <div className="poster">
            <div className="poster-carousel">
              <NeurotypeCarousel />
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
              <div className="summary-section">
                <p className="title-number">// Summary</p>
                <p className="description-title">
                  Substantiating OUD treatment.
                </p>
                <p>
                  Through secondary research, interviews with health
                  practitioners, and speaking with a data visualization expert,
                  we gained a better understanding of how a portable EEG could
                  be integrated into treatment for OUD, as well as how to create
                  interpretable data. Data from an EEG would provide
                  practitioners with quantitative data in addition to
                  qualitative, helping to substantiate and inform treatment of
                  OUD
                </p>
              </div>
            </div>
            <div className="poster">
            <div className="poster-image">
               <img src={neuroGif} alt=""></img>
               <p className="caption"></p>
            </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Neurotype;
