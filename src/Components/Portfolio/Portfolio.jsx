import React from "react";
import "./Portfolio.scss";

import portfolioItems from "./PortfolioData";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-intro">
        <h3 className="portfolio-header">PORTFOLIO</h3>
        <h3 className="portfolio-subheader">
          Web design & development work + UX UI design case studies.
        </h3>
      </div>
      <nav className="menu">
        {portfolioItems.map((item, idx) => (
          <React.Fragment key={item.id}>
            <hr id="portfolio-line" />
            <div className="menu__item">
              <a id={item.id} href={item.link} className="menu__item-link">
                {item.title}
                <p className="work__type">{item.workType}</p>
              </a>
              <img className="menu__item-img" src={item.image} alt="" />
              <div className="marquee">
                <div id={`${item.id}-marquee`} className="marquee__inner" aria-hidden="true">
                  {item.marquee.map((text, i) => (
                    <span key={i}>{text}</span>
                  ))}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}

export default Portfolio;
