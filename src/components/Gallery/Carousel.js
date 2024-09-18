import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button type="button" onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <div
        className="carousel__container"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }} // Shift images based on activeIndex
      >
        {images.map((image, index) => (
          <div key={image} className="carousel__image-wrapper">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="carousel__img"
            />
          </div>
        ))}
      </div>
      <button type="button" onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
