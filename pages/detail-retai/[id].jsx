import { Tabs, Radio, Space } from "antd";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import facebook from "../../assets/img/2021_Facebook_icon.svg.png";
import zalo from "../../assets/img/Logo-Zalo-App-Rec.png";
import data from "../../data";
import List from "../retail-products/list";
const index = () => {
  const { Retais } = data();
  const router = useRouter();
  const id = router.query?.id;
  const dataDetail = Retais[0]?.product.filter((item) => item.id == id);
  console.log(dataDetail,"data")
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
        <div className="col-md-9">
          <div className="row">
            <div className="col-lg-5">
              <div className="item-retai">
                <img className="img-details" src={dataDetail[0]?.img} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="item-retai">
                <h1 className="name">{dataDetail[0]?.name}</h1>
                <div className="share"></div>
                <h3 style={{ textAlign: "start" }}>{dataDetail[0]?.title}</h3>
                <p>{dataDetail[0]?.des1}</p>
                <p>{dataDetail[0]?.des2}</p>
                <p>{dataDetail[0]?.des3}</p>
                <b>{dataDetail[0]?.kt1}</b> <br />
                <b>{dataDetail[0]?.kt2}</b> <br />
                <b>{dataDetail[0]?.kt3}</b><br />
              </div>
            </div>
          </div>
          <h1 className="mt-3">SẢN PHẨM LIÊN QUAN</h1>
          <div className="list">
            <List product={Retais[0]?.product} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
