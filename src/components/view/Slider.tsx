import React from "react";
import ImgBanner1 from "./../../images/unnamed.png";
import ImgBanner2 from "./../../images/unnamed2.png";
import ImgBanner3 from "./../../images/unnamed3.png";

type Props = {};

const Slider = (props: Props) => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ImgBanner1} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={ImgBanner2} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={ImgBanner3} className="d-block w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
