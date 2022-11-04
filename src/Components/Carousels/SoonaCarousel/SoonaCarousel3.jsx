import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Carousel.scss";
import progressBar from "../../Images/Soona/progress-bar.png";
import quickView from "../../Images/Soona/quick-view.png";
import styleGuide from "../../Images/Soona/styles.png";
import wipPopup from "../../Images/Soona/wip.png";

function SoonaCarousel3() {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={progressBar}
            alt="progress bar"
          />
          <div className="carousel-caption">
            <p>feature proposal: progress bar</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={quickView}
            alt="quick view"
          />
          <div className="carousel-caption">
            <p>feature proposal: quick view</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={styleGuide}
            alt="style guide"
          />
          <div className="carousel-caption">
            <p>feature proposal: style guide</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={wipPopup}
            alt="work in progress message"
          />
          <div className="carousel-caption">
            <p>feature proposal: work in progress pop-up</p>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default SoonaCarousel3;
