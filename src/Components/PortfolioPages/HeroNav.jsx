import React from "react";
import { useLocation, Link } from "react-router-dom";
import { usePortfolioNav } from "./PortfolioStyles/PortfolioNavContext";
import "../PortfolioPages/PortfolioStyles/PortfolioPages.scss";

function HeroNav() {
  const location = useLocation();
  const navData = usePortfolioNav();
  const current = navData.find((item) => location.pathname.includes(item.url));

  let prevNav = null;
  let nextNav = null;
  let projectNumber = null;

  if (current) {
    prevNav = navData.find((item) => item.id === current.prev);
    nextNav = navData.find((item) => item.id === current.next);
    projectNumber = navData.indexOf(current) + 1;
  }

  return (
    <div className="hero-nav">
      {current && (
        <span id="next-previous-hero">
          <li>
            {prevNav ? (
              <Link id="previous-hero" to={prevNav.url}>
                prev
              </Link>
            ) : null}
            <span id="project-number-hero"> / {String(projectNumber).padStart(2, "0")} / </span>
            {nextNav ? (
              <Link id="next-hero" to={nextNav.url}>
                next
              </Link>
            ) : null}
          </li>
        </span>
      )}
    </div>
  );
}

export default HeroNav;
