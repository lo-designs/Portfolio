import React from "react";
import ReusableCarousel from "../ReusableComponents/Carousel/ReusableCarousel";
import Tabs from "../ReusableComponents/Tabs/Tabs";
import "../PortfolioPages/PortfolioStyles/PortfolioPages.scss";
import "../ReusableComponents/Tabs/Tabs.scss";
import PrevNextNav from "./PrevNextNav.jsx";

function PortfolioPageLayout({
  heroImage,
  title,
  projectType,
  subtitle,
  overview,
  tabs
}) {
  return (
    <div className="project">
      {/* Hero/Intro Section */}
      <section id="sctr0" className="hero-section">
        <div className="cover" id="hero-image">
          <img id="hero-img" src={heroImage} alt="" />
        </div>
        <div className="content">
          <div className="intro-position">
            <div>
             {/* case study navigation */}
                <PrevNextNav />
              <div id="title">{title}</div>
              <div className="project-type">{projectType}</div>
              <div className="subtitle">{subtitle}</div>
              <p className="overview">{overview}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case study section */}
      {tabs && tabs.length > 0 && (
        <section className="tabs-section">
          <Tabs tabs={tabs} />
        </section>
      )}
    </div>
  );
}

export default PortfolioPageLayout;
