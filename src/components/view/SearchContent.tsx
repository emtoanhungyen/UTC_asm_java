import React from "react";
import { useAppSelector } from "../../store/store";

type Props = {};

const SearchContent = (props: Props) => {
  const searchProduct = useAppSelector((state) => state.product.searchProduct);

  return (
    <div>
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
                  SEARCH
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-lg-9">
            <div className="row">
              {/* {listProducts.map((item: IProduct, index) => (
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
              ))} */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="./../../images/2.jpg"
                    width="100px"
                    height="200px"
                    style={{
                      objectFit: "cover",
                    }}
                    alt="Sample"
                  />
                  <div className="card-body text-center">
                    <h5 className="mb-0">name</h5>
                    <h6>Số lượng:quantity</h6>
                    <h6 className="mb-3">price vnd</h6>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
