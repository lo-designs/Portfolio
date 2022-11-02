/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../../PortfolioPages/PortfolioPageStyles.scss";

function YouthHelpApp() {
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
              className="yha-hero"
              src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXRoJTIwaGVscHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">Youth Help App</div>
                <div className="subtitle">
                  Health & wellness resources app for adolescents.
                </div>
           
                <div className="project-type">
                  Self-defined project // UX UI
                </div>

                <div className="overview">
                  <p>
                    Secondary research & prototyping a mobile app. After working
                    with displaced youth at a Minneapolis nonprofit, I wanted to
                    design a mobile app for youth facing mental/emotional health
                    issues to find and connect with support specific to their
                    needs.
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
                  ✧ Learn about the resources for youth that currently exist to
                  find areas of opportunity. ✧ Determine a way to make these
                  resources easily accessible.
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
                    01 Deep dive: health & wellness resources for youth.
                  </p>
                  <p className="description-title">
                    Secondary Research // Informational Interviews // Cognitive
                    Walkthrough
                  </p>
                  <p>
                    Beginning research for this project, I quickly found that
                    there are a lot of resources for youth. Most of these
                    resources, however, are text heavy and hard to scan for
                    important information. This makes it hard to find help,
                    especially if you don't know exactly what you're looking
                    for. During interviews with licensed social workers, Youth
                    Services Network (YSN) was highlighted as an effective (yet
                    outdated) resource. I decided to use YSN as a reference
                    point, and did a step-by-step analysis of the process
                    someone takes to connect with resources.
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
                    02 Determining how to address youth needs.
                  </p>
                  <p className="description-title">
                    Proto-persona // Experience mapping // Wireframing
                  </p>
                  <p>
                    The interviews, research, and analysis of YSN helped me
                    determine features for the app: easy to access contact info,
                    scannable information, direct call and email links.
                    Additionally, I wanted to implement a way to narrow down
                    resources to find those that best fit the needs of the
                    person using the app. I created a proto-persona, an
                    experience map, a user flow, and wireframes using Sketch and
                    Adobe XD.
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
                    03 Accessibility & customization.
                  </p>
                  <p className="description-title">// Prototyping</p>
                  <p>
                    In addition to easy to access hotlines and contact info, I
                    added the option to create an account to customize needs and
                    preferences. The idea is that this would help someone using
                    the app filter through resources to find the best help for
                    them. I designed and created the 'Youth Matters' logo using
                    both Photoshop and Illustrator, designed the prototype using
                    Adobe XD, and made the prototype interactive using Figma.
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
                  <p className="title-number">
                    Summary // Building on existing resources.
                  </p>
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

export default YouthHelpApp;
