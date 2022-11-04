/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./About.scss";

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
        {/* <img
          className="me"
          src="https://media2.giphy.com/media/QSuOxLANMqaU72CHwx/giphy.gif?cid=ecf05e47dp253tdit25l6tzd7bgf7tctmmnag3ahx3e3yvwk&rid=giphy.gif&ct=g"
          alt=""
        /> */}
        <p className="favorite-things">
          Aside from digital design & development, some of my favorite things
          include.*✧
          <br />
          <br />
          animals // road trips // mountains // hiking // the north shore //
          open world rpgs // movies at alamo // A24 films & HBO originals //
          pancakes.
        </p>
      </div>
    </div>
  );
}

export default About;
