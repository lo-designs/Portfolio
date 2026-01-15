import React from "react";
import { useLocation } from "react-router-dom";
import { usePortfolioNav } from "../PortfolioPages/PortfolioStyles/PortfolioNavContext";
import "./Footer.scss";

function Footer({ colorTheme }) {
  const location = useLocation();
  const navData = usePortfolioNav();

  // Get current portfolio page id from pathname
  const current = navData.find(
    (item) => location.pathname.includes(item.url)
  );

  // Use theme from props for reliable sync
  // eslint-disable-next-line react/prop-types
  const themeClass = typeof colorTheme === 'string' ? colorTheme : 'theme-white';
  return (
    <div className={`footer ${themeClass}`}>
      <span className="footer-links">
        <a className="resume" href="/">
          resume
        </a>
        <span className="footer-links-divider"> {/* divider */}</span>
        <a className="email" href="mailto:lauraguntherdesigns@gmail.com">
          email
        </a>
      </span>
      {/* Remove prev/next navigation from footer */}
    </div>
  );
}

export default Footer;
