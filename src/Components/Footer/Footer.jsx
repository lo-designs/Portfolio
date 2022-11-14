/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <span className="footer-links">
        <a className="linkedin" href="/">
          linkedin
        </a>
        <span className="footer-links-divider"> // </span>
        <a className="email" href="mailto:lauraguntherdesigns@gmail.com">
          email
        </a>
      </span>
    </div>
  );
}

export default Footer;
