import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.scss";
import pettesHomePage from "./../Images/PettesHounds/home.jpg";
import pettesHomePageOg from "./../Images/PettesHounds/homeog.jpg";
import allServices from "./../Images/PettesHounds/allservices.jpg";
import ogAllServices from "./../Images/PettesHounds/allServicesOg.jpg";
import animatedLogo from "./../Images/PettesHounds/phLogo.gif";

function PettesHoundsCarousel() {
  return (
    <div className="carousel">
      <Carousel>

      <Carousel.Item>
          <img
            id="carousel-item"
            src={animatedLogo}
            alt="animated logo"
          />
          <div className="carousel-caption">
            <p>[ Logo animated using Photoshop ]</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            src={pettesHomePage}
            alt="New Pette's Hounds home page"
          />
          <div className="carousel-caption">
            <p>[ Redesign: home page ]</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            src={pettesHomePageOg}
            alt="Original home page"
          />
          <div className="carousel-caption">
            <p>[ original design: home page ]</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            src={allServices}
            alt="New 'all services' page"
          />
          <div className="carousel-caption">
            <p>[ Redesign: services page ]</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="carousel-item"
            src={ogAllServices}
            alt="Original 'all services' page"
          />
          <div className="carousel-caption">
            <p>[ original design: services page ]</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PettesHoundsCarousel;
