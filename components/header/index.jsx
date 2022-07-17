// @flow
import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Row, Col, Popover } from "antd";
import { useRouter } from "next/router";
import { Modal, Dropdown } from "antd";
import HeaderMobile from "../content-header-mobile";
import Contact from "../content-contact";
const Header = () => {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const handleShow = () => {
    setShowForm(!showForm);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <nav className="web">
        <div style={{ cursor: "pointer" }} className="brand web">
          <Image
            onClick={() => router.push("/")}
            src={Logo}
            alt="Picture of the author"
            width={60}
            height={60}
          />
        </div>
        <ul>
          <li onClick={() => setIsModalVisible(false)}>
            <Link href="/">TRANG CHỦ</Link>
          </li>
          <li onClick={() => setIsModalVisible(false)}>
            <Link href="/introduce">GIỚI THIỆU</Link>
          </li>
          <li onClick={() => setIsModalVisible(false)}>
            <Link href="/project">DỰ ÁN</Link>
          </li>

          <li>
            <a onClick={showModal}>TIN TỨC</a>
            <Modal
              visible={isModalVisible}
              Header="none"
              closable={false}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Contact />
            </Modal>
          </li>
          <li onClick={() => setIsModalVisible(false)}>
            <Link href="/communication">LIÊN HỆ</Link>
          </li>
          <li onClick={() => setIsModalVisible(false)}>
            <Link href="/retail-products">SẢN PHẨM BÁN LẺ</Link>
          </li>
        </ul>
      </nav>
      <nav className="mobile">
        <div className="mobile_cent">
          <div style={{ cursor: "pointer" }} className="brand web">
            <Image
              onClick={() => router.push("/")}
              src={Logo}
              alt="Picture of the author"
              width={60}
              height={60}
            />
          </div>
          <div>
            <div
              style={{ cursor: "pointer" }}
              onClick={handleShow}
              className="humbeger"
            >
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            {showForm && (
              <div className="content_form">
                <HeaderMobile setShowForm={setShowForm}/>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
