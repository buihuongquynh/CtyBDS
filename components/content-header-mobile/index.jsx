// @flow
import React, { useState } from "react";
// import styles from "./styles.module.scss";
import Link from "next/link";
const HeaderMobile = () => {
  return (
    <div className="HeaderMobile">
      <ul>
        <li>
          <Link href="/">Trang Chủ</Link>
        </li>
        <li>
          <Link href="/introduce">Giới thiệu</Link>
        </li>
        <li>
          <Link href="/project">Dự Án</Link>
        </li>
        <li>
        <Link href="/communication">Liên hệ</Link>
        </li>
        <li>
          <a href="/contact">Tin Tức</a>
  
        </li>
      </ul>
    </div>
  );
};
export default HeaderMobile;
