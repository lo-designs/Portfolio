/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Portfolio.scss";
import pettesHover from "./../Images/PettesHounds/phHover.jpg";
import neuroHover from "./../Images/Neurotype/neuroHover.jpg";
import outtaHover from "./../Images/OuttaWax/outtaHover.jpg";
import parraHover from "./../Images/ParraLily/parraHover.jpg";
import soonaHover from "./../Images/Soona/soonaHover.jpg";
import yhaHover from "./../Images/YHA/yhaHover.jpg";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-intro">
        <h3 className="portfolio-header">[ PORTFOLIO ]</h3>
        <h3 className="portfolio-subheader">
          Web design & development work + UX UI design case studies. 
        </h3>
        {/* <div className="portfolio-summary">
          <p>
    
          </p>
          <p>Check out some of my case studies below:</p>
        </div> */}
      </div>
      <nav className="menu">
        <div className="menu__item">
          <a id="pettes" href="/petteshounds" className="menu__item-link">
            Pette's Hounds
            <p className="work__type">
              dog walking & pet care services // web [re]design
            </p>
          </a>
          <img className="menu__item-img" src={pettesHover} alt="" />
          <div className="marquee">
            <div id="pettes-marquee" className="marquee__inner">
              <span>Pette's Hounds</span>
              <span>// Web Design</span>
              <span>// Pet Care Services.</span>
            </div>
          </div>
        </div>
        <hr id="portfolio-line"></hr>
        <div className="menu__item">
          <a id="parra" href="/parralily" className="menu__item-link">
            ParraLily
            <p className="work__type">minneapolis food truck // web design</p>
          </a>
          <img className="menu__item-img" src={parraHover} alt="" />
          <div className="marquee">
            <div id="parra-marquee" className="marquee__inner">
              <span>ParraLily</span>
              <span>// Web Design</span>
              <span>// Minneapolis Food Truck.</span>
            </div>
          </div>
        </div>
        <hr id="portfolio-line"></hr>
        <div className="menu__item">
          <a id="outta" href="/outtawax" className="menu__item-link">
            Outta Wax
            <p className="work__type">
              [COMING SOON!] vinyl pressing services // web design
            </p>
          </a>
          <img
            className="menu__item-img"
            src={outtaHover}
            alt="vinyl records"
          />
          <div className="marquee">
            <div id="outta-marquee" className="marquee__inner">
              <span>Outta Wax</span>
              <span>// Vinyl Pressing Services</span>
              <span>// Web Design</span>
            </div>
          </div>
        </div>
        <hr id="portfolio-line"></hr>
        <div className="menu__item">
          <a id="yha" href="/yha" className="menu__item-link">
            Health & Wellness Resource App
            <p className="work__type">
              Self-defined project // web + ux ui design
            </p>
          </a>
          <img className="menu__item-img" src={yhaHover} alt="" />
          <div className="marquee">
            <div id="yha-marquee" className="marquee__inner" aria-hidden="true">
              <span>// Self-Defined Project</span>
              <span>// Web + UX UI Design.</span>
            </div>
          </div>
        </div>
        <hr id="portfolio-line"></hr>
        <div className="menu__item">
          <a id="neuro" href="/neurotype" className="menu__item-link">
            Neurotype
            <p className="work__type">medical startup // ux ui design</p>
          </a>
          <img className="menu__item-img" src={neuroHover} alt="" />
          <div className="marquee">
            <div id="neuro-marquee" className="marquee__inner">
              <span>Neurotype</span>
              <span>// Medical Startup</span>
              <span>// UX UI Design</span>
              
            </div>
          </div>
        </div>
        <hr id="portfolio-line"></hr>
        <div className="menu__item">
          <a id="soona" href="/soona" className="menu__item-link">
            Soona
            <p className="work__type">24 hr content studio // ux ui design</p>
          </a>
          <img className="menu__item-img" src={soonaHover} alt="" />
          <div className="marquee">
            <div
              id="soona-marquee"
              className="marquee__inner"
              aria-hidden="true"
            >
              <span>Soona</span>
              <span>// 24hr Content Studio</span>
              <span>// UX UI Design</span>
         
            </div>
          </div>
        </div>
        <hr id="portfolio-line"></hr>
      </nav>
    </div>
  );
}

export default Portfolio;
