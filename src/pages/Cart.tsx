import React, { useState } from "react";
import { removeFromCart, updateQuantity } from "../redux/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

type Props = {};

const Cart = (props: Props) => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const handleIncrease = (quantity: number, id?: number) => {
    return dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const handleDecrease = (quantity: number, id?: number) => {
    if (quantity === 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="container pt-3 pb-3">
        <div className="row">
          <div className="col-lg-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Shopping cart
                </li>
              </ol>
            </nav>
          </div>
          <div id="basket" className="col-lg-9">
            <div className="box">
              <h1>Shopping cart</h1>
              <p className="text-muted">
                Bạn có {cart.length} món trong giỏ hàng.
              </p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan={2}>Sản Phẩm</th>
                      <th>Số lượng</th>
                      <th>Giá tiền</th>
                      <th>Discount</th>
                      <th colSpan={2}>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => {
                      const total = item.price * item.quantity;
                      return (
                        <tr>
                          <td>
                            <a href={`/product/${item.id}`}>
                              <img
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                }}
                                src={item.image}
                                alt="Sample"
                              />
                            </a>
                          </td>
                          <td>
                            <a href={`/product/${item.id}`}>{item.name}</a>
                          </td>
                          <td>
                            <div className="mx-auto">
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() =>
                                  handleDecrease(item.quantity, item.id)
                                }
                                disabled={item.quantity === 0}
                              >
                                -
                              </button>
                              <span className="mx-3">{item.quantity}</span>
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() =>
                                  handleIncrease(item.quantity, item.id)
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>{item.price} vnd</td>
                          <td>0.00</td>
                          <td>{total} vnd</td>
                          <td>
                            <a href="#">
                              <i className="fa fa-trash-o" />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={5}>Thành tiền</th>
                      <th colSpan={2}>{totalAmount} vnd</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="box-footer d-flex justify-content-between flex-column flex-lg-row">
                <div className="left">
                  <a href="/" className="btn btn-outline-secondary">
                    <i className="fa fa-chevron-left" /> Continue shopping
                  </a>
                </div>
                <div className="right">
                  <button className="btn btn-outline-secondary">
                    <i className="fa fa-refresh" /> Update cart
                  </button>
                  <button type="submit" className="btn btn-primary ml-2">
                    Proceed to checkout <i className="fa fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div id="order-summary" className="box">
              <div className="box-header">
                <h3 className="mb-0">Phiếu Hàng</h3>
              </div>
              <p className="text-muted">
                Phí vận chuyển &amp; bổ sung dựa theo đơn hàng
              </p>
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Tổng Tiền</td>
                      <th>{totalAmount} vnd</th>
                    </tr>
                    <tr>
                      <td>Phí Vận Chuyển</td>
                      <th>0.00vnd</th>
                    </tr>
                    <tr>
                      <td>Thuế</td>
                      <th>0.000vnd</th>
                    </tr>
                    <tr className="total">
                      <td>Tổng</td>
                      <th>{totalAmount} vnd</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
