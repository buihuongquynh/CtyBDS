import { Tabs, Radio, Space } from "antd";
import React, { useState, useEffect } from "react";
import List from "./list";
import { useRouter } from "next/router";
import facebook from "../../assets/img/2021_Facebook_icon.svg.png";
import zalo from "../../assets/img/Logo-Zalo-App-Rec.png";
import data from "../../data";
const index = () => {
  const { Retais } = data();
  const router = useRouter();
  return (
    <div className="retail">
      <div className="row">
        <div className="col-lg-3">
          <div className="list_tab">
            <ul>
              <h3>DANH MỤC SẢN PHẨM</h3>
              {Retais?.map((item) => (
                <li onClick={()=>router.push('/retail-products')}>{item?.name}</li>
              ))}
            </ul>
          </div>
          <div className="list_tab">
            <div>
              <h3>LIÊN HỆ VỚI NHÂN VIÊN</h3>
              <p>0373021769</p>
              <div className="img">
                <img src={facebook.src} alt="" />
                <img src={zalo.src} alt="" />
              </div>
            </div>
          </div>
          <div className="list_tab">
            <ul>
              <h3>THÔNG TIN CÔNG TY</h3>
              <p>
                Địa chỉ : 74 Thôi Hữu, phường Ngọc Trạo, thành phố Thanh Hóa,
                Việt Nam
              </p>
              <p>Điện thoại : 039 615 8898</p>
              <p>Email : phothietke10@gmail.com</p>
            </ul>
          </div>
        </div>
        <div className="col-md-9">{<List product={Retais[0].product} />}</div>
      </div>
    </div>
  );
};
export default index;
