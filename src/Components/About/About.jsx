/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./About.scss";
import me from "../Images/About/me.jpg";

function About() {
  return (
    <div className="about-section">
      <div className="about-summary">
        <h3 className="about-heading">A bit of background.</h3>
         <p className="about-subheading">How I got into design & development.</p>
        <div className="about-description">
          <p>
            While figuring out what I wanted to do after earning a degree in psychology, a friend introduced me to UX and I learned how user experience design and psychology intersect. Studying UX design helped me discover my love of digital design and development.
           </p> <p>Since this discovery, I've had the opportunity to work with some great local businesses
            doing web design, as well as UX/UI research and design for clients
            while earning a certificate in UX. Most recently, I completed a full stack development program, had a role as an associate software engineer, and designed and developed this portfolio in my spare time.
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
          include✧: 
          animals // road trips // mountains // hiking // the north shore // hiking @the north shore //
          video games // movies at alamo // pancakes.
        </p>
      </div>
      </div>
    </div>
  );
}

export default About;
