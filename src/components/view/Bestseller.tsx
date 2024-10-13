import React from "react";
import ImgB1 from "./../../images/b1.jpg";
import ImgB2 from "./../../images/b2.jpg";
import ImgB3 from "./../../images/b3.jpg";
import ImgB4 from "./../../images/b4.jpg";

type Props = {};

const Bestseller = (props: Props) => {
  return (
    <div className="container">
      <h3 className="text-center mt-4 pt-5">Bestsellers</h3>
      <div className="row mt-5">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="">
            <img className="img-fluid w-100" src={ImgB1} alt="Sample" />
            <a href="#!">
              <div className="mask waves-effect waves-light" />
            </a>
          </div>
          <div className="text-center pt-4">
            <h5 className="mb-0">Măng Tây hữu cơ</h5>
            <h5>(3 Gói)</h5>
            <h6 className="mb-3">180.000vnd</h6>
            <button
              type="button"
              className="btn btn-primary btn-sm mr-1 waves-effect waves-light"
            >
              <i className="fas fa-shopping-cart pr-2" />
              Thêm vào giỏ
            </button>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="">
            <img className="img-fluid w-100" src={ImgB2} alt="Sample" />
            <a href="#!">
              <div className="mask waves-effect waves-light" />
            </a>
          </div>
          <div className="text-center pt-4">
            <h5 className="mb-0">Ớt cay hữu cơ</h5>
            <h5>(1kg)</h5>
            <h6 className="mb-3">220.000vnd</h6>
            <button
              type="button"
              className="btn btn-primary btn-sm mr-1 waves-effect waves-light"
            >
              <i className="fas fa-shopping-cart pr-2" />
              Thêm vào giỏ
            </button>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="">
            <img className="img-fluid w-100" src={ImgB3} alt="Sample" />
            <a href="#!">
              <div className="mask waves-effect waves-light" />
            </a>
          </div>
          <div className="text-center pt-4">
            <h5 className="mb-0">Bơ hữu cơ</h5>
            <h5>(3 Quả)</h5>
            <h6 className="mb-3">150.000vnd</h6>
            <button
              type="button"
              className="btn btn-primary btn-sm mr-1 waves-effect waves-light"
            >
              <i className="fas fa-shopping-cart pr-2" />
              Thêm vào giỏ
            </button>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="">
            <img className="img-fluid w-100" src={ImgB4} alt="Sample" />
            <a href="#!">
              <div className="mask waves-effect waves-light" />
            </a>
          </div>
          <div className="text-center pt-4">
            <h5 className="mb-0">Đào nhỏ hữu cơ</h5>
            <h5>(1 kg)</h5>
            <h6 className="mb-3">180.000vnd</h6>
            <button
              type="button"
              className="btn btn-primary btn-sm mr-1 waves-effect waves-light"
            >
              <i className="fas fa-shopping-cart pr-2" />
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
