/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Portfolio.scss";
import pettesHover from "./../Images/PettesHounds/phHover.jpg";
import neuroHover from "./../Images/Neurotype/neuro-gif-ps.gif";
import outtaHover from "./../Images/OuttaWax/outtaHover.jpg";
import parraHover from "./../Images/ParraLily/parraHover3.png";
import soonaHover from "./../Images/Soona/soonaGif.gif";
import yhaHover from "./../Images/YHA/YouMatter.gif";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-intro">
        <h2 className="portfolio-header">Portfolio</h2>
        <h3 className="portfolio-subheader">
          Web design & development // UX UI design
        </h3>
        <div className="portfolio-summary">
          <p>
            I've had the opportunity to work with some great local businesses
            doing web design, as well as UX/UI research and design for clients
            while earning a certificate in UX. Most recently, I've worked as an
            associate software engineer contractor at Optum Tech, and designed
            and developed this portfolio in my spare time.
          </p>
          <p>Check out some of my case studies below:</p>
        </div>
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
              <span>// web [re]design //</span>
              <span>Dog walking & pet care services.</span>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <a id="parra" href="/parralily" className="menu__item-link">
            ParraLily
            <p className="work__type">minneapolis food truck // web design</p>
          </a>
          <img className="menu__item-img" src={parraHover} alt="" />
          <div className="marquee">
            <div id="parra-marquee" className="marquee__inner">
              <span>ParraLily</span>
              <span>// web design //</span>
              <span>Minneapolis food truck.</span>
            </div>
          </div>
        </div>
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
              <span>// web design //</span>
              <span>Vinyl pressing services. [COMING SOON!]</span>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <a id="neuro" href="/neurotype" className="menu__item-link">
            Neurotype
            <p className="work__type">medical startup // ux ui design</p>
          </a>
          <img className="menu__item-img" src={neuroHover} alt="" />
          <div className="marquee">
            <div id="neuro-marquee" className="marquee__inner">
              <span>Neurotype</span>
              <span>// ux ui design //</span>
              <span>Medical startup.</span>
            </div>
          </div>
        </div>
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
              <span>// ux ui design //</span>
              <span>24 hr content studio.</span>
            </div>
          </div>
        </div>

        <div className="menu__item">
          <a id="yha" href="/yha" className="menu__item-link">
            Youth Resources App
            <p className="work__type">
              self-defined project // web + ux ui design
            </p>
          </a>
          <img className="menu__item-img" src={yhaHover} alt="" />
          <div className="marquee">
            <div id="yha-marquee" className="marquee__inner" aria-hidden="true">
              <span>Youth Resources App</span>
              <span>// web + ux ui design //</span>
              <span>Self-defined project.</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Portfolio;
