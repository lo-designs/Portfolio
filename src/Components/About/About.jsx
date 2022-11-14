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
            While figuring out what I wanted to do after earning a degree in psychology, a friend introduced me to UX design and I learned how user experience and psychology relate to one another.
           <p> I decided to pursue a certificate in UX design, and in the process I discovered my love for not only designing great digital experiences, but creating them as well.</p>
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
          video games // movies at alamo // pancakes.
        </p>
      </div>
      </div>
    </div>
  );
}

export default About;
