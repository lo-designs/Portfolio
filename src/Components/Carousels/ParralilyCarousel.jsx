import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.scss";
import parraMenu from "../Images/ParraLily/parraMenu2.png";
import designBoard from "../Images/ParraLily/designboard.png";
import wireFrames from "../Images/ParraLily/wireframes.png";

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
            <p>design board</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={parraMenu}
            alt="ParraLily fall brunch menu"
          />
          <div className="carousel-caption">
            <p></p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={wireFrames}
            alt="Third slide"
          />
          <div className="carousel-caption">
            <p>Wireframes made in Adobe XD</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ParralilyCarousel;
