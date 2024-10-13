import React from "react";
import ImgVegetable from "./../../images/vegetable.jpg";
import ImgFruit from "./../../images/fruit.jpg";
import ImgRice from "./../../images/rice.jpg";
import ImgCoffee from "./../../images/coffee.jpg";

type Props = {};

const Categories = (props: Props) => {
  return (
    <div className="container">
      <>
        <h3 className="text-center mt-5">
          <a href="./products">Categories</a>
        </h3>
        <div className="row mt-5">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="">
              <div className="view zoom z-depht-2 rounded">
                <img className="img-fluid" src={ImgVegetable} alt="Sample" />
                <a href="#!" className="text-success">
                  <div className="mask rgba-stylish-slight waves-effect waves-light">
                    <div className="d-flex align-item-end h-100 p-3">
                      <h5 className="text-success mb-0">Vegetables</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="">
              <div className="view zoom z-depht-2 rounded">
                <img className="img-fluid" src={ImgFruit} alt="Sample" />
                <a href="#!" className="text-success">
                  <div className="mask rgba-stylish-slight waves-effect waves-light">
                    <div className="d-flex align-item-end h-100 p-3">
                      <h5 className="text-success mb-0">Fruits</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="">
              <div className="view zoom z-depht-2 rounded">
                <img className="img-fluid" src={ImgRice} alt="Sample" />
                <a href="#!" className="text-success">
                  <div className="mask rgba-stylish-slight waves-effect waves-light">
                    <div className="d-flex align-item-end h-100 p-3">
                      <h5 className="text-success mb-0">Rice</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="">
              <div className="view zoom z-depht-2 rounded">
                <img className="img-fluid" src={ImgCoffee} alt="Sample" />
                <a href="#!" className="text-success">
                  <div className="mask rgba-stylish-slight waves-effect waves-light">
                    <div className="d-flex align-item-end h-100 p-3">
                      <h5 className="text-success mb-0">Coffee</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Categories;
