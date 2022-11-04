import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Carousel.scss";
import logoConcept from "../../Images/Neurotype/logo-concept.png";
import neuroGif from "../../Images/Neurotype/neuro-gif-ps.gif";


function NeurotypeCarousel1() {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={logoConcept}
            alt="logo concept"
          />
          <div className="carousel-caption">
            <p>logo concept</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={neuroGif}
            alt="logo concept"
          />
          <div className="carousel-caption">
            <p>GIF made using Photoshop</p>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default NeurotypeCarousel1;
