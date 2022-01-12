import { Carousel } from "antd";
import React, { useRef } from "react";
import "./styles.scss";

const Carousels = () => {
  const contentStyle = {
    height: "260px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    border: "1px solid red",
  };
  const carouselRef = useRef();

  const handleNext = () => carouselRef.current.next();

  const handlePrev = () => carouselRef.current.prev();

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div>
      <h1>carousel</h1>
      <div className="carouselWrappr">
        <Carousel ref={carouselRef} {...settings}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <button className="prevButton" onClick={handlePrev}>
          Previous
        </button>
        <button className="nextButton" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousels;
