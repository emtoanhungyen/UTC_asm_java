import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchCategory } from "../redux/categories/action";
import { ICategory } from "../redux/categories/categorySlide";
import { fetchProducts, getProductByCategory } from "../redux/products/action";
import { IProduct } from "../redux/products/productSlide";
type Props = {};

const Category = (props: Props) => {
  const listCategories = useAppSelector((state) => state.category.category);
  const listProducts = useAppSelector((state) => state.product.products);
  const [idCategory, setIdCategory] = useState<number | undefined>();
  const [nameCate, setNameCate] = useState<string>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  const handGetProductByCate = (id: number | undefined, name: string) => {
    if (id) {
      setIdCategory(id);
      setNameCate(name);
      return dispatch(getProductByCategory(id));
    }
    return;
  };

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
                      <div
                        className="nav-link text-success"
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => handGetProductByCate(item.id, item.name)}
                      >
                        {item.name}{" "}
                        <span className="badge badge-secondary">10</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <div className="row">
            {nameCate && <h5>{nameCate}</h5>}
            {listProducts.map((item: IProduct, index) => (
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src={item.image}
                    width="100px"
                    height="200px"
                    style={{
                      objectFit: "cover",
                    }}
                    alt="Sample"
                  />
                  <div className="card-body text-center">
                    <h5 className="mb-0">{item.name}</h5>
                    <h6>Số lượng: {item.quantity}</h6>
                    <h6 className="mb-3">{item.price} vnd</h6>
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
            ))}
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
