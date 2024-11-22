import React from "react";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div>
      <div className="container pt-3 pb-3">
        <div className="row">
          <div className="col-lg-12">
            {/* breadcrumb*/}
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
              <form method="post" action="checkout1.html">
                <h1>Shopping cart</h1>
                <p className="text-muted">Bạn có 2 món trong giỏ hàng.</p>
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
                      <tr>
                        <td>
                          <a href="#">
                            <img src="img/cafe.jpg" alt="Sample" />
                          </a>
                        </td>
                        <td>
                          <a href="detail1.html">Cafe Chuli</a>
                        </td>
                        <td>
                          <input
                            type="number"
                            defaultValue={2}
                            className="form-control"
                          />
                        </td>
                        <td>180.000vnd</td>
                        <td>0.00</td>
                        <td>360.000vnd</td>
                        <td>
                          <a href="#">
                            <i className="fa fa-trash-o" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="detail2.html">
                            <img src="img/b4.jpg" alt="Sample" />
                          </a>
                        </td>
                        <td>
                          <a href="#">Đào hữu cơ</a>
                        </td>
                        <td>
                          <input
                            type="number"
                            defaultValue={1}
                            className="form-control"
                          />
                        </td>
                        <td>149.000vnd</td>
                        <td>0.00</td>
                        <td>149.000vnd</td>
                        <td>
                          <a href="#">
                            <i className="fa fa-trash-o" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan={5}>Thành tiền</th>
                        <th colSpan={2}>509.000vnd</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                {/* /.table-responsive*/}
                <div className="box-footer d-flex justify-content-between flex-column flex-lg-row">
                  <div className="left">
                    <a
                      href="category.html"
                      className="btn btn-outline-secondary"
                    >
                      <i className="fa fa-chevron-left" /> Continue shopping
                    </a>
                  </div>
                  <div className="right">
                    <button className="btn btn-outline-secondary">
                      <i className="fa fa-refresh" /> Update cart
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Proceed to checkout <i className="fa fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* /.box*/}
          </div>
          {/* /.col-lg-9*/}
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
                      <th>509.000vnd</th>
                    </tr>
                    <tr>
                      <td>Phí Vận Chuyển</td>
                      <th>0.00vnd</th>
                    </tr>
                    <tr>
                      <td>Thuế</td>
                      <th>10.000vnd</th>
                    </tr>
                    <tr className="total">
                      <td>Tổng</td>
                      <th>519.000vnd</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /.col-md-3*/}
        </div>
      </div>

      {/* <div className="container-fluid">
        <div className="container">
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
                <form method="post" action="checkout1.html">
                  <h1>Shopping cart</h1>
                  <p className="text-muted">Bạn có 2 món trong giỏ hàng.</p>
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
                        <tr>
                          <td>
                            <a href="#">
                              <img src="img/cafe.jpg" alt="Sample" />
                            </a>
                          </td>
                          <td>
                            <a href="detail1.html">Cafe Chuli</a>
                          </td>
                          <td>
                            <input
                              type="number"
                              defaultValue={2}
                              className="form-control"
                            />
                          </td>
                          <td>180.000vnd</td>
                          <td>0.00</td>
                          <td>360.000vnd</td>
                          <td>
                            <a href="#">
                              <i className="fa fa-trash-o" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="detail2.html">
                              <img src="img/b4.jpg" alt="Sample" />
                            </a>
                          </td>
                          <td>
                            <a href="#">Đào hữu cơ</a>
                          </td>
                          <td>
                            <input
                              type="number"
                              defaultValue={1}
                              className="form-control"
                            />
                          </td>
                          <td>149.000vnd</td>
                          <td>0.00</td>
                          <td>149.000vnd</td>
                          <td>
                            <a href="#">
                              <i className="fa fa-trash-o" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan={5}>Thành tiền</th>
                          <th colSpan={2}>509.000vnd</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="box-footer d-flex justify-content-between flex-column flex-lg-row">
                    <div className="left">
                      <a
                        href="category.html"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa fa-chevron-left" /> Continue shopping
                      </a>
                    </div>
                    <div className="right">
                      <button className="btn btn-outline-secondary">
                        <i className="fa fa-refresh" /> Update cart
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Proceed to checkout{" "}
                        <i className="fa fa-chevron-right" />
                      </button>
                    </div>
                  </div>
                </form>
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
                        <th>509.000vnd</th>
                      </tr>
                      <tr>
                        <td>Phí Vận Chuyển</td>
                        <th>0.00vnd</th>
                      </tr>
                      <tr>
                        <td>Thuế</td>
                        <th>10.000vnd</th>
                      </tr>
                      <tr className="total">
                        <td>Tổng</td>
                        <th>519.000vnd</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="box">
                <div className="box-header">
                  <h4 className="mb-0">Coupon code</h4>
                </div>
                <p className="text-muted">
                  If you have a coupon code, please enter it in the box below.
                </p>
                <form>
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <span className="input-group-append">
                      <button type="button" className="btn btn-primary">
                        <i className="fa fa-gift" />
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Cart;
