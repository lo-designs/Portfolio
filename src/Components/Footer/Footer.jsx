/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import './Footer.scss';

function Footer() {
   return (
      <div className="footer">
         <span className="footer-links">
            <a className="email" href="/">email</a>
            <span className="footer-links-divider"> // </span>
            <a className="resume" href="/">resume</a>
            <span className="footer-links-divider"> // </span>
            <a className="linkedin" href="/">linkedin</a>
         </span>
      </div>
   )
};

export default Footer;