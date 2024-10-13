import React from "react";
import ImgCafe from "./../images/cafe.jpg";

type Props = {};

const Detail = (props: Props) => {
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
                      CATEGORY
                    </a>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                    Cafe Mộc
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="d-block w-100"
                    src={ImgCafe}
                    alt="Sample"
                  />
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <h1>Cafe Culi</h1>
                    <p>Mã SP: 20012000</p>
                    <h3>Giá bán </h3>
                    <p className="price">180.000vnd</p>
                    <h3>Tình trạng</h3>
                    <p>Còn hàng</p>
                    <p className="text-center buttons">
                      <a href="basket.html" className="btn btn-primary">
                        <i className="fa fa-shopping-cart" /> Add to cart
                      </a>
                    </p>
                    <p className="text-center buttons">
                      <a href="basket.html" className="btn btn-outline-primary">
                        <i className="fa fa-heart" /> Add to wishlist
                      </a>
                    </p>
                  </div>
                </div>
                <div className="box col-md-9">
                  <p />
                  <h4>Về Sản phẩm</h4>
                  <p>
                    Cà Phê Culi được làm từ cà phê nguyên chất nên mang đến chất
                    lượng tuyệt hảo. Sản phẩm vẫn giữ được vị đắng đặc trưng và
                    hương thơm đậm đà của cà phê, thích hợp dành cho những giờ
                    thưởng thức cà phê bên bạn bè hay đồng nghiệp.
                  </p>
                  <p>
                    Cà phê Culi là cà phê hòa tan 100% nguyên chất không pha sẵn
                    (không đường, không sữa), dành cho người muốn được thưởng
                    thức cà phê cổ điển, thuần khiết và không pha trộn.
                  </p>
                  <p>
                    Cà phê Culi sẽ trở thành nguồn năng lượng, mang đến sự tỉnh
                    táo và tăng cảm hứng sáng tạo cho một ngày làm việc hiệu
                    quả. Cà phê luôn là thức uống hàng đầu dành cho những người
                    hay giải quyết nhiều công việc.
                  </p>
                  <p>
                    Sản phẩm được đóng hộp nhỏ gọn, thích hợp cho một lần sử
                    dụng. Bạn có thể mang theo cà phê đến văn phòng hay bất cứ
                    đâu khi bạn cần sử dụng.
                  </p>
                  <p>
                    Lưu ý:
                    <br />
                    - Hạn sử dụng thực tế quý khách vui lòng xem trên bao bì.
                    <br />- Hình sản phẩm chỉ mang tính chất minh họa, hình thực
                    tế bao bì của sản phẩm tùy thời điểm sẽ khác so với thực tế.
                  </p>
                </div>
                <div className="box col-md-3">
                  <h3 className="text-success">Thông Số</h3>
                  <h4 className="text-danger">Thương Hiệu</h4>
                  <p> Rey Cafe</p>
                  <h4 className="text-danger">Đơn vị tính</h4> <p>1.0 Túi</p>
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
