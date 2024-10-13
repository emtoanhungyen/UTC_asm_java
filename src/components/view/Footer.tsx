import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Google */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google" />
            </a>
            {/* Linkedin */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            {/* Github */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github" />
            </a>
          </section>
          {/* Section: Form */}
          <section>
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Đăng ký nhận tin tức sớm nhất</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example2">
                      Email address
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
          {/* Section: Links */}
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Về Chúng Tôi</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Về Nhãn Hiệu
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Thuần chay
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Sinh Thái Eco
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Trách nhiệm Xã hội
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Account</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Đơn đặt hàng
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Cài đặt tài khoản
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Cửa Hàng
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Thanh toán &amp; Giao hàng</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Miễn phí vận chuyển
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Không chất bảo quản
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Thanh toán
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Vận chuyển &amp; trở lại
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Liên lạc</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Liên hệ &amp; hợp tác
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Chính sách bảo mật
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="#">
            EcoLove.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
