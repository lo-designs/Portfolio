/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../../PortfolioPages/PortfolioPageStyles.scss";

function Neurotype() {
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
            <img className="neurotype-hero"
              src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhaW58ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Neurotype</div>
                <div className="subtitle">
                  Web app design for early stage medical startup.
                </div>
                <div id="line"></div>
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
            <div className="square" id="process"></div>
          </div>
          <div className="content">
         
              <div className="description">
                <p className="title-number">// Process</p>
                <p className="description-title">
                  01 Understanding addiction healthcare & treatment. Secondary
                  Research // User Interviews
                </p>
                <p>
                  We conducted secondary research to understand the current
                  landscape for addiction healthcare, the patient/practitioner
                  experience, and industry trends for visually presenting
                  complicated medical data. We then researched Neurotype
                  comparators and conducted 9 remote interviews with
                  practitioners in various healthcare roles.
                </p>
              </div>
              <div className="poster">
              <img
                    src="https://i.pinimg.com/originals/09/54/fa/0954fa997903c4f02a18647e27be0fdb.jpg"
                    alt=""
                  />
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
                  <p className="title-number">// 2</p>
                  <p className="description-title">
                    02 Sessions between patient & practitioner.
                  </p>
                  <p>
                    Usability Testing // Information Architecture // Experience
                    Mapping The information from our research provided context
                    to what sessions generally look like between patient and
                    practitioner. This helped us create an experience map of the
                    process of implementing a portable EEG in a standard therapy
                    session.
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
                  <p className="title-number">// 3</p>
                  <p className="description-title">
                    03 Creating data that is easy to interpret. Data
                    Visualization // Prototyping
                  </p>
                  <p>
                    The idea is that the EEG will measure patients' brain
                    reactivity when looking at substance-related images. That
                    data will then be compared to patients' self-reported drug
                    cravings to help track patient progress and substantiate
                    treatment. We had the opportunity to walk through the
                    wireframes with an expert in data visualization. The main
                    goal in creating the interface was to make EEG data easy to
                    interpret for practitioners without EEG expertise.
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
                  <p className="title-number">// 3</p>
                  <p className="description-title">
                    Summary // Substantiating OUD treatment.
                  </p>
                  <p>
                    Through secondary research, interviews with health
                    practitioners, and speaking with a data visualization
                    expert, we gained a better understanding of how a portable
                    EEG could be integrated into treatment for OUD, as well as
                    how to create interpretable data. Data from an EEG would
                    provide practitioners with quantitative data in addition to
                    qualitative, helping to substantiate and inform treatment of
                    OUD
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
                  <p className="title-number">// Summary</p>
                  <p className="description-title">
                    Make services + prices more prominent on page & scannable.
                  </p>
                  <p>
                    The original site as well as the redesign were built using
                    Squarespace. I was able to switch templates which helped
                    with the formatting of the site content in order to reach
                    the.
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

export default Neurotype;
