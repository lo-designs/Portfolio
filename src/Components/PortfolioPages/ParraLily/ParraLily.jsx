/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./../../PortfolioPages/PortfolioPageStyles.scss";

function ParraLily() {
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
              src="https://images.pexels.com/photos/5793774/pexels-photo-5793774.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="content">
            <div className="intro-position">
              <div>
                <div id="title">ParraLily</div>
                <div className="subtitle">Local food truck.</div>
                <div id="line"></div>
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
            <div className="square" id="process"></div>
          </div>
          <div className="content">
            <div className="description-position">
              <div className="description">
                <p className="title-number">// Objectives & Process</p>
                {/* <p className="description-title">
                  Make services + prices more prominent on page & scannable.
                </p> */}
                <p>
                  I started with the mobile design after meeting with the owner
                  and doing some comparative research on other food trucks. I
                  made wireframes using Adobe XD, a design board in Photoshop,
                  and created the website using WordPress. </p>
                 <p> Design choices -
                  colors, fonts, and format - were based around both the logo
                  and the truck itself. Drawing inspiration from the truck, the
                  site/ParraLily menu was designed to emulate mid-century diner
                  menus.</p>
                
              </div>
              <div className="poster">
                  <img
                    src="https://i.pinimg.com/originals/09/54/fa/0954fa997903c4f02a18647e27be0fdb.jpg"
                    alt=""
                  />
                </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}

export default ParraLily;
