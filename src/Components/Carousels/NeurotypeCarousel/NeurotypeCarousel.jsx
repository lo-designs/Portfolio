import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Carousel.scss";
import dataDashboard from "../../Images/Neurotype/neuroDash.png";
import data2 from "../../Images/Neurotype/neuroData.png";

function NeurotypeCarousel() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={dataDashboard}
            alt="dashboard"
          />
            <div className="carousel-caption">
            <p>Prototype: dashboard view</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            className="d-block w-100"
            src={data2}
            alt="Second slide"
          />
          <div className="carousel-caption">
            <p>Prototype: data view 1</p>
          </div>
        </Carousel.Item>

   
      </Carousel>
    </div>
  );
}

export default NeurotypeCarousel;
