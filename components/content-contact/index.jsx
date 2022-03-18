// @flow
import React, { useState } from "react";
import Award from "../../assets/img/GK.jpg"
const Contact = () => {
  return (
    <div className="contact">
      <img src={Award.src} alt="" />
      <br/>
      <a href="https://baoxaydung.com.vn/trao-giai-cuoc-thi-thiet-ke-nha-o-an-toan-cong-dong-ben-vung-thich-ung-voi-bien-doi-khi-hau-khu-vuc-ven-bien-267814.html?fbclid=IwAR2hBR9FPlpCezMsCB8k1IX5zpU0lVVkYuxjc2ZbVyoEMxeKsktQ1WclhyA">Phố Thiết Kế đạt giải thiết kế nhà ở an toàn thích ứng với biến đổi khí hậu khu vực ven biển</a>
    </div>
  );
};
export default Contact;
