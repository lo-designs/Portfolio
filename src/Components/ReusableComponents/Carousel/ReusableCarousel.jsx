import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * images: Array of { src, alt, caption }
 */
function ReusableCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };
  return (
    <div className="carousel-bg">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              className="carousel-item-img"
              src={img.src}
              alt={img.alt || "carousel image"}
            />
            {img.caption && (
              <div className="carousel-caption">
                <p>{img.caption}</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReusableCarousel;
