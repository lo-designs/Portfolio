import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Carousel.scss";
import experienceMap from "../../Images/Neurotype/experience-map.png";

function NeurotypeCarousel2() {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={experienceMap}
            alt="experience map"
          />
          <div className="carousel-caption">
            <p>experience map</p>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default NeurotypeCarousel2;
