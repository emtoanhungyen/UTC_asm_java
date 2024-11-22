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
            <img
              src={
                "https://res.cloudinary.com/dpu8oqhdq/image/upload/v1732193419/d2x6duqn9rpnkiluzih4.jpg"
              }
              className="d-block w-100"
              alt=""
            />
          </div>
          {/* <div className="carousel-item">
            <img
              src={
                "https://res.cloudinary.com/dpu8oqhdq/image/upload/v1732193418/vmzrwcvmz27rafoztxrz.jpg"
              }
              className="d-block w-100"
              alt=""
            />
          </div> */}
          <div className="carousel-item">
            <img
              src={
                "https://res.cloudinary.com/dpu8oqhdq/image/upload/v1732193418/ctkqbro3yqvute6ma372.jpg"
              }
              className="d-block w-100"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
