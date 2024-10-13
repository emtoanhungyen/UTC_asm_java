import React from "react";
import { Link } from "react-router-dom";
import ImgN1 from "./../../images/n1.jpg";
import ImgN2 from "./../../images/n2.jpg";
import ImgN3 from "./../../images/n3.jpg";
import ImgN4 from "./../../images/n4.jpg";
type Props = {};

const NewProduct = (props: Props) => {
  return (
    <div className="container">
      <>
        <h3 className="text-center mt-4 pt-5">Sản phẩm mới</h3>
        <div className="row mt-5">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="">
              <img className="img-fluid w-100" src={ImgN1} alt="Sample" />
              <a href="#!">
                <div className="mask waves-effect waves-light" />
              </a>
            </div>
            <div className="text-center pt-4">
              <Link to={"/detail"}>
                <h5 className="mb-0">Hạt Óc Chó hữu cơ</h5>
              </Link>
              <h5>(1 Hộp)</h5>
              <h6 className="mb-3">300.000vnd</h6>
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
              <img className="img-fluid w-100" src={ImgN2} alt="Sample" />
              <a href="#!">
                <div className="mask waves-effect waves-light" />
              </a>
            </div>
            <div className="text-center pt-4">
              <h5 className="mb-0">Dâu Tây Đà Lạt hữu cơ</h5>
              <h5>(2 hộp 500g)</h5>
              <h6 className="mb-3">330.000vnd</h6>
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
              <img className="img-fluid w-100" src={ImgN3} alt="Sample" />
              <a href="#!">
                <div className="mask waves-effect waves-light" />
              </a>
            </div>
            <div className="text-center pt-4">
              <h5 className="mb-0">Táo Mỹ hữu cơ</h5>
              <h5>(1 kg)</h5>
              <h6 className="mb-3">149.000vnd</h6>
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
              <img className="img-fluid w-100" src={ImgN4} alt="Sample" />
              <a href="#!">
                <div className="mask waves-effect waves-light" />
              </a>
            </div>
            <div className="text-center pt-4">
              <h5 className="mb-0">Chuối Tây hữu cơ</h5>
              <h5>(1 kg)</h5>
              <h6 className="mb-3">99.000vnd</h6>
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
      </>
    </div>
  );
};

export default NewProduct;
