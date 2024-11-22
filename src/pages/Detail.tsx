import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { findProductById } from "../redux/products/action";
import { useAppDispatch, useAppSelector } from "../store/store";
import ImgCafe from "./../images/cafe.jpg";

type Props = {};

const Detail = (props: Props) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const productDetail = useAppSelector((state) => state.product.productDetail);
  useEffect(() => {
    if (id) dispatch(findProductById(Number(id)));
  }, []);

  return (
    <div>
      <>
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 my-4">
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="" className="text-success">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="" className="text-success">
                      Product
                    </a>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                    {productDetail.name}
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="d-block w-100"
                    src={productDetail.image}
                    alt="Sample"
                  />
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <h1>{productDetail.name}</h1>
                    <p>Mã SP: {productDetail.id}</p>
                    <h3>Giá bán </h3>
                    <p className="price">{productDetail.price}vnd</p>
                    <h3>Số lượng</h3>
                    <p>{productDetail.quantity}</p>
                    <p className="text-center buttons">
                      <a href="basket.html" className="btn btn-primary">
                        <i className="fa fa-shopping-cart" /> Add to cart
                      </a>
                    </p>
                  </div>
                </div>
                <div className="box col-md-9">
                  <p />
                  <h4>Về Sản phẩm</h4>
                  <p>{productDetail.description}</p>
                  <p>
                    Lưu ý:
                    <br />
                    - Nhận hàng vui lòng kiểm tra hàng giống với hình ảnh trên
                    website
                    <br />- Sản phẩm quần áo của chúng tôi mang đến sự kết hợp
                    hoàn hảo giữa phong cách hiện đại và sự thoải mái, phù hợp
                    cho mọi dịp từ công sở đến dạo phố. Chất liệu cao cấp, thiết
                    kế tinh tế, giúp bạn tự tin và thoải mái suốt cả ngày dài.
                  </p>
                </div>
                <div className="box col-md-3">
                  <h3 className="text-success">Thông Số</h3>
                  <h4 className="text-danger">Thương Hiệu</h4>
                  <p>{productDetail.content}</p>
                  <h4 className="text-danger">Đơn vị tính</h4> <p>1.0 Chiếc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Detail;
