import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.scss";
import parraMenu from "../Images/ParraLily/brasika2-min.png";
import designBoard from "../Images/ParraLily/designboard.jpg";

function ParralilyCarousel() {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={designBoard}
            alt="Second slide"
          />
          <div className="carousel-caption">
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={parraMenu}
            alt="ParraLily boxed lunch menu"
          />
          <div className="carousel-caption">
            <p></p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ParralilyCarousel;
