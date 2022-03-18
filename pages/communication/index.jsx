// @flow
import * as React from "react";
import { Row, Col } from "antd";
import QuoteComponent from "../../components/quote-componant";
import logoBanner from "../../assets/img/download.jpg";
import GGMap from "../../assets/img/261100243_1866047036911908_4119074886557492245_n.png";
const Communication = () => {
  return (
    <div className="communication">
      <div className="row">
        <div className="col-md-5">
          <img src={logoBanner.src} alt="" />
        </div>
        <div className="col-md-7 para">
          <p className="cent">
            <p className="cents">Công ty cổ phần kiến trúc- Nội thất </p>
            <p className="cents">Phố thiết kế </p>
            Đc/74 thôi hữu, P.Ngọc trạo, TP.Thanh hóa
            <br />
            Email: Phothietke@gmail.com <br />
            Phone: K/S.Lê Nhung: 0372559079 <br />
            <span>K/S.Lê Ngọc: 0396158898 </span>
          </p>
        </div>
      </div>
      <div className="map">
        <div className="img">
        <h2>Xem bản đồ</h2>
          <img src={GGMap.src} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Communication;
