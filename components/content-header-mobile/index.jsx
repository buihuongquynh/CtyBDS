// @flow
import React, { useState } from "react";
// import styles from "./styles.module.scss";
import Link from "next/link";
const HeaderMobile = ({setShowForm}) => {
  return (
    <div className="HeaderMobile">
      <ul>
        <li onClick={() => setShowForm(false)}>
          <Link href="/">Trang Chủ</Link>
        </li>
        <li onClick={() => setShowForm(false)}>
          <Link href="/introduce">Giới thiệu</Link>
        </li>
        <li onClick={() => setShowForm(false)}>
          <Link href="/project">Dự Án</Link>
        </li>
        <li onClick={() => setShowForm(false)}>
        <Link href="/communication">Liên hệ</Link>
        </li>
        <li onClick={() => setShowForm(false)}>
          <a href="/contact">Tin Tức</a>
  
        </li>
      </ul>
    </div>
  );
};
export default HeaderMobile;
