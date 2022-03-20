// @flow
import * as React from "react";
import { Row, Col } from "antd";
import QuoteComponent from "../../components/quote-componant";
import logoBanner from "../../assets/img/lienheImg/lien he.jpg";
import GGMap from "../../assets/img/261100243_1866047036911908_4119074886557492245_n.png";
const Communication = () => {
  return (
    <div className="communication">
      <div className="row">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="col-md-5 homeBannerLeft"
        >
          <img className="img_banner" src={logoBanner.src} alt="" />
        </div>
        <div className="col-md-7 para homeBannerRight">
          <p className="cent">
            <p className="cents">Công ty cổ phần kiến trúc - Nội thất </p>
            <p className="cents">Phố Thiết Kế </p>
            <span>Đc: 74 Thôi Hữu, P.Ngọc Trạo, TP.Thanh Hóa</span>
            
            <br />
            <span>Email: Phothietke@gmail.com</span>
             <br />
             <span>Phone: K/S.Lê Nhung: 0372559079</span>
             <br />

            <span className="phone_mr">K/S.Lê Trọng: 0396158898 </span>
          </p>
        </div>
      </div>
      <div className="map homeBannerBottom">
        <div className="img">
          <h2 className="view_map">
            {" "}
            <a target="_blank" href="https://www.google.com/maps?q=74+Th%C3%B4i+H%E1%BB%AFu,+P.+Ng%E1%BB%8Dc+Tr%E1%BA%A1o,+Th%C3%A0nh+ph%E1%BB%91+Thanh+H%C3%B3a,+Thanh+Ho%C3%A1&ftid=0x3136f808813537d1:0x6db47eb2ede288b2&hl=vi-VN&gl=vn&entry=gps&lucs=s2se,a1&shorturl=1">
              Xem bản đồ{" "}
            </a>
          </h2>
          <img src={GGMap.src} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Communication;
