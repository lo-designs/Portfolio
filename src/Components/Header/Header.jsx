/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Header.scss";
import "../Themes/Themes.scss"

function Header() {

  return (
    <div className="header">
      <span className="header-links">
        <a className="header-logo" href="/">
          laura gunther
        </a>
        <span className="header-links-divider"></span>
        <a className="portfolio" href="/portfolio">
          portfolio
        </a>
        <span className="header-links-divider"> // </span>
        <a className="about" href="/about">
          about
        </a>
      </span>
    </div>
  );
}

export default Header;
