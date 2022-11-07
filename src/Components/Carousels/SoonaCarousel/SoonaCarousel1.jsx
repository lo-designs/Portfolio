import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Carousel.scss";
import journeyMap from "../../Images/Soona/journey.png";

function SoonaCarousel1() {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={journeyMap}
            alt="customer journey map"
          />
          <div className="carousel-caption">
            <p>Customer journey map made in Sketch</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SoonaCarousel1;
