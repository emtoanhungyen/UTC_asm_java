import React from "react";
import { useAppSelector } from "../../store/store";
import ImgB1 from "./../../images/b1.jpg";
import ImgB2 from "./../../images/b2.jpg";
import ImgB3 from "./../../images/b3.jpg";
import ImgB4 from "./../../images/b4.jpg";

type Props = {};

const Bestseller = (props: Props) => {
  const listProducts = useAppSelector((state) => state.product.products);

  return (
    <div className="container">
      <h3 className="text-center mt-4 pt-5">Bestsellers</h3>
      <div className="row mt-5">
        {listProducts.map((item, index) => (
          <>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="">
                <img className="img-fluid w-100" src={item.image} alt="Sample" />
                <a href="#!">
                  <div className="mask waves-effect waves-light" />
                </a>
              </div>
              <div className="text-center pt-4">
                <h5 className="mb-0">{item.name}</h5>
                <h5>Còn lại: {item.quantity}</h5>
                <h6 className="mb-3">{item.price}vnd</h6>
                <button
                  type="button"
                  className="btn btn-primary btn-sm mr-1 waves-effect waves-light"
                >
                  <i className="fas fa-shopping-cart pr-2" />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
