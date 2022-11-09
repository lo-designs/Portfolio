/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./About.scss";
import me from "../Images/About/me.jpg";

function About() {
  return (
    <div className="about-section">
      <div className="about-summary">
        <h3 className="about-heading">How I got into design & development.</h3>

        <div className="about-description">
          <p>
            A pretty unconventional path lead me from working in the service
            industry, to studying Psychology, to pursuing a career in UX/UI
            design. While learning UX, I discovered my love for digital design
            and development.
          </p>
        </div>
      </div>
      <div className="about-me">
      <div className="image-card">
         <p className="image-heading"></p>
        <img className="me" src={me} alt="me"/>
      </div>
      <div className="favorite-things-card">
        <p className="favorite-things">
          Aside from digital design & development, some of my favorite things
          include.*✧
          <br />
          <br />
          animals // road trips // mountains // hiking // the north shore //
          video games // movies at alamo // A24 films // pancakes.
        </p>
      </div>
      </div>
    </div>
  );
}

export default About;
