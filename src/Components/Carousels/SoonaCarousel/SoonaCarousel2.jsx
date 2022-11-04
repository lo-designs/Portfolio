import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Carousel.scss";
import kanoAnalysis from "../../Images/Soona/kano.png";

function SoonaCarousel2() {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            id="kano-carousel-item"
            className="d-block w-100"
            src={kanoAnalysis}
            alt="kano analysis"
          />
          <div className="carousel-caption">
            <p>kano analysis</p>
          </div>
        </Carousel.Item>


      </Carousel>
    </div>
  );
}

export default SoonaCarousel2;
