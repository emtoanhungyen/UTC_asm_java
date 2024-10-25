import React, { useEffect } from "react";
import ImgCafe1 from "./../images/cafe.jpg";
import ImgCafe2 from "./../images/cafe2.jpg";
import ImgCafe5 from "./../images/cafe5.jpg";
import ImgB1 from "./../images/b1.jpg";
import ImgB2 from "./../images/b2.jpg";
import ImgB3 from "./../images/b3.jpg";
import ImgB4 from "./../images/b4.jpg";

import Slider from "../components/view/Slider";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchCategory } from "../redux/categories/action";
import { ICategory } from "../redux/categories/categorySlide";
type Props = {};

const Category = (props: Props) => {
  const listCategories = useAppSelector((state) => state.category.category);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 my-4">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="" className="text-success">
                  Home
                </a>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                CATEGORY
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-lg-3 left">
          <div className="card sidebar-menu ">
            <div className="card-header">
              <h3 className="h4 card-title active a">Categories</h3>
            </div>
            <div className="card-body">
              <ul className="nav nav-pills flex-column category-menu">
                <ul className="list-unstyled">
                  {listCategories.map((item: ICategory, index) => (
                    <li>
                      <a href="" className="nav-link text-success">
                        {item.name} <span className="badge badge-secondary">10</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div>
            <Slider />
          </div>

          <div className="row my-4">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={ImgCafe1}
                  width="100px"
                  height="200px"
                  alt="Sample"
                />
                <div className="card-body text-center">
                  <h5 className="mb-0">Cafe Mộc</h5>
                  <h5>(1 kg)</h5>
                  <h6 className="mb-3">180.000vnd</h6>
                </div>
                <div className="card-footer text-center">
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
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={ImgCafe2}
                  width="100px"
                  height="200px"
                  alt="Sample"
                />
                <div className="card-body text-center">
                  <h5 className="mb-0">Cafe Arabica</h5>
                  <h5>(1 kg)</h5>
                  <h6 className="mb-3">149.000vnd</h6>
                </div>
                <div className="card-footer text-center">
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
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={ImgCafe5}
                  width="100px"
                  height="200px"
                  alt="Sample"
                />
                <div className="card-body text-center">
                  <h5 className="mb-0">Cafe Nguyên </h5>
                  <h5>(1 kg)</h5>
                  <h6 className="mb-3">149.000vnd</h6>
                </div>
                <div className="card-footer text-center">
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
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={ImgB1}
                  width="100px"
                  height="200px"
                  alt="Sample"
                />
                <div className="card-body text-center">
                  <h5 className="mb-0">Măng Tây hữu cơ</h5>
                  <h5>(3 Gói)</h5>
                  <h6 className="mb-3">179.000vnd</h6>
                </div>
                <div className="card-footer text-center">
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
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={ImgB2}
                  width="100px"
                  height="200px"
                  alt="Sample"
                />
                <div className="card-body text-center">
                  <h5 className="mb-0">Ớt cay hữu cơ </h5>
                  <h5>(1 kg)</h5>
                  <h6 className="mb-3">220.000vnd</h6>
                </div>
                <div className="card-footer text-center">
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
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={ImgB3}
                  width="100px"
                  height="200px"
                  alt="Sample"
                />
                <div className="card-body text-center">
                  <h5 className="mb-0">Bơ hữu cơ </h5>
                  <h5>(3 quả)</h5>
                  <h6 className="mb-3">149.000vnd</h6>
                </div>
                <div className="card-footer text-center">
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
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={ImgB4}
                  width="100px"
                  height="200px"
                  alt="Sample"
                />
                <div className="card-body text-center">
                  <h5 className="mb-0">Đào nhỏ hữu cơ </h5>
                  <h5>(1 kg)</h5>
                  <h6 className="mb-3">149.000vnd</h6>
                </div>
                <div className="card-footer text-center">
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
          {/* /.row */}
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-content-center"
          >
            <ul className="pagination">
              <li className="page-item">
                <a href="#" aria-label="Previous" className="page-link">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  4
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  5
                </a>
              </li>
              <li className="page-item">
                <a href="#" aria-label="Next" className="page-link">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Category;
