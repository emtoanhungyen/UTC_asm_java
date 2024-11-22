import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/products/action";
import { IProduct } from "../../redux/products/productSlide";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import "./../../css/styleImage.css";
type Props = {};

const NewProduct = (props: Props) => {
  const dispatch = useAppDispatch();
  const listProducts = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <h3 className="text-center mt-4 pt-5">Sản phẩm mới</h3>
      <div className="row mt-5">
        {listProducts.map((item: IProduct, index) => (
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="">
              <img className="image-style" src={item.image} alt="images" />
              <a href="#!">
                <div className="mask waves-effect waves-light" />
              </a>
            </div>
            <div className="text-center pt-4">
              <Link to={`/product/${item.id}`}>
                <h5 className="mb-0">{capitalizeFirstLetter(item.name)}</h5>
              </Link>
              <h5>({item.content})</h5>
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
        ))}
      </div>
    </div>
  );
};

export default NewProduct;
