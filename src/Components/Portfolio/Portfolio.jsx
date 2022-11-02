/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Portfolio.scss";


function Portfolio() {
  /*** PORTFOLIO HOVER LINKS ***/
  const link = document.querySelectorAll(".link");
  const linkHoverReveal = document.querySelectorAll(".hover-reveal");
  const linkImages = document.querySelectorAll(".hidden-img");

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("mousemove", (e) => {
      linkHoverReveal[i].style.opacity = 1;
      linkHoverReveal[
        i
      ].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
      linkImages[i].style.transform = "scale(1, 1)";
      linkHoverReveal[i].style.left = e.clientX + "px";
    });

    link[i].addEventListener("mouseleave", (e) => {
      linkHoverReveal[i].style.opacity = 0;
      linkHoverReveal[
        i
      ].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
      linkImages[i].style.transform = "scale(0.8, 0.8)";
    });
  }

  return (
    <div className="portfolio">
      <div>
        <h2 className="portfolio-header">Portfolio.</h2>
        <div>
          <p className="portfolio-subheader">
            I've had the opportunity to work with some great local businesses
            doing web design/redesign, as well as UX/UI research and design for
            clients while earning a certificate in UX design. Most recently, I
            completed a full stack development program & designed and developed
            this portfolio. Check out some of my work below:
          </p>
        </div>
      </div>

      <div className="hover-links">
        <div className="link">
          <a href="/petteshounds">
            <span className="work-item-1">
              Pette's Hounds<p className="work-type">// WEB [RE]DESIGN</p>
            </span>
            <div className="hover-reveal">
              <img
                className="hidden-img"
                src="https://images.unsplash.com/photo-1467991521834-fb8e202c7074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJldHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </a>
        </div>

        <div className="link">
          <a href="/parralily">
            <span className="work-item-2">
              ParraLily<p className="work-type">// WEB DESIGN</p>
            </span>
          </a>
          <div className="hover-reveal">
            <img
              className="hidden-img"
              src="img/parralily-images/foodtruck.gif"
              alt=""
            />
          </div>
        </div>

        <div className="link">
          <a href="/outtawax">
            <span className="work-item-3">
              Outta Wax
              <p className="work-type">// WEB DESIGN [COMING SOON] </p>
            </span>
          </a>
          <div className="hover-reveal">
            <img className="hidden-img" src="img/ow-images/record.gif" alt="" />
          </div>
        </div>

        <div className="link">
          <a href="/yha">
            <span className="work-item-4">
              Youth Help App<p className="work-type">// WEB DESIGN</p>
            </span>
          </a>
          <div className="hover-reveal">
            <img className="hidden-img" src="img/ym-images/g1-.gif" alt="" />
          </div>
        </div>

        <div className="link">
          <a href="/neurotype">
            <span className="work-item-5">
              Neurotype<p className="work-type">// UX UI</p>
            </span>
          </a>
          <div className="hover-reveal">
            <img
              className="hidden-img"
              src="img/neurotype-images/NeuroOG.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="link">
          <a href="/soona">
            <span className="work-item-6">
              Soona<p className="work-type">// UX UI</p>
            </span>
          </a>
          <div className="hover-reveal">
            <img className="hidden-img" src="" alt="" />
          </div>
        </div>

        <div className="link">
          <a href="/">
            <span className="work-item-7">
              Misc Designs<p className="work-type">// for fun</p>
            </span>
          </a>
          <div className="hover-reveal">
            <img className="hidden-img" src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
