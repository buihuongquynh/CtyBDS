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
  return (
    <div className="retail">
      <div className="row">
        <div className="col-lg-3">
          <div className="list_tab">
            <ul>
              <h3>DANH MỤC SẢN PHẨM</h3>
              {Retais?.map((item) => (
                <li onClick={() => router.push("/retail-products")}>
                  {item?.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="list_tab">
            <div>
              <h3>LIÊN HỆ VỚI NHÂN VIÊN</h3>
              <p>0372559079</p>
              <div className="img">
                <a href="https://www.facebook.com/Ph%E1%BB%91-Thi%E1%BA%BFt-K%E1%BA%BF-101002412514369">
                  <img src={facebook.src} alt="" />
                </a>
                <a href="https://zalo.me/0372559079">
                  <img src={zalo.src} alt="" />
                </a>
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
              <p>Điện thoại : 0372559079</p>
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
                <div
                 id="fb-share-button"
                  data-href={`https://phothietke.com/detail-retai/${id}`}
                  data-layout="button"
                  data-size="large"
                >
                  <a
                    target=""
                    href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fphothietke.com%2Fdetail-retai%2F${id}&amp;src=sdkpreparse`}
                    class="fb-xfbml-parse-ignore"
                  >
                     <svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet">
        <path class="svg-icon-path" d="M9.1,0.1V2H8C7.6,2,7.3,2.1,7.1,2.3C7,2.4,6.9,2.7,6.9,3v1.4H9L8.8,6.5H6.9V12H4.7V6.5H2.9V4.4h1.8V2.8 c0-0.9,0.3-1.6,0.7-2.1C6,0.2,6.6,0,7.5,0C8.2,0,8.7,0,9.1,0.1z"></path>
    </svg>
    <span>Share</span>
                  </a>
                </div>
                <div className="share"></div>
                <h3 style={{ textAlign: "start" }}>{dataDetail[0]?.title}</h3>
                <p>{dataDetail[0]?.des1}</p>
                <p>{dataDetail[0]?.des2}</p>
                <p>{dataDetail[0]?.des3}</p>
                <b>{dataDetail[0]?.kt1}</b> <br />
                <b>{dataDetail[0]?.kt2}</b> <br />
                <b>{dataDetail[0]?.kt3}</b>
                <br />
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
