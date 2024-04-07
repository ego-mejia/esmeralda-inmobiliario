import React from "react";
import imgSlider from "../img/img1.jpg";

const Slider = () => {
  return (
    <section
      className="flex mx-0 max-w-6xl w-full rounded-3xl overflow-hidden
    slider-container"
    >
      <div className="slider">
        <div className="slide">
          <img src={imgSlider} className="img-Slider"></img>
        </div>
        <div className="slide">
          <img src={imgSlider} className="img-Slider"></img>
        </div>
        <div className="slide">
          <img src={imgSlider} className="img-Slider"></img>
        </div>
        <div className="slide">
          <img src={imgSlider} className="img-Slider"></img>
        </div>
        <div className="slide">
          <img src={imgSlider} className="img-Slider"></img>
        </div>
      </div>
    </section>
  );
};

export { Slider };
