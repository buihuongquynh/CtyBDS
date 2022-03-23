import Head from "next/head";
import React from "react";
import ImgFixed from "../components/img-fixed";
import MobileHome from "../components/mobile-home";
import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import uuid from "react-uuid";
import data from "../data";
import smImg from "../assets/img/homeImg/trangchu/ảnh nhỏ.jpg";
import bigImg from "../assets/img/homeImg/trangchu/anh to.jpg";
import Router from "next/router";
export default function Home() {
  const { Project } = data();
  return (
    <div className="home">
      <div className="banner__home">
        <div className="row" style={{alignItems:'center'}}>
          <div className="col-lg-6 col-md-12 col-sm-12 center homeBannerLeft">
            <div className="center_banner">
              <div className="smaill_photo">
                <img src={smImg.src} alt="" />
              </div>
              <p className="title_banner">Phố Thiết Kế</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 text-end big_img homeBannerRight">
            <img src={bigImg.src} alt="" />
          </div>{" "}
        </div>
      </div>
      <div className="project web">
        <Row>
          <Col className="ant-1" span={1}></Col>
          <Col className="ant-22" style={{margin: '0 15px'}} span={22}>
            <h1 className="prj">Dự án</h1>
            {Project.map((item) => (
              <>
                <div className="row-sb mt-30">
                  <div className="items-center">
                    <h2>{item.name}</h2>
                    <RightOutlined />
                  </div>


                  <a
                  className="showMore"
                    onClick={() =>
                      Router.push({
                        pathname: "list-project-category",
                        query: {
                          id: item.id,
                        },
                      })
                    }
                  >
                    Xem thêm
                  </a>
                </div>
                <ImgFixed 
                item={item}
                src={item?.project[0]?.img[0]} />
              </>
            ))}
          </Col>
          <Col className="ant-1" span={1}></Col>
        </Row>
      </div>
      <div className="mobile project">
      <Row>
          <Col className="ant-1" span={1}></Col>
          <Col className="ant-22" style={{margin: '0 15px'}} span={22}>
            <h1 className="prj">Dự án</h1>
            {Project.map((item) => (
              <>
                <div className="row-sb mt-30">
                  <div className="items-center">
                    <h2>{item.name}</h2>
                    <RightOutlined />
                  </div>


                  <a
                  className="showMore"
                    onClick={() =>
                      Router.push({
                        pathname: "list-project-category",
                        query: {
                          id: item.id,
                        },
                      })
                    }
                  >
                    Xem thêm
                  </a>
                </div>
                <MobileHome 
                item={item}
                src={item?.project[0]?.img[0]} />
              </>
            ))}
          </Col>
          <Col className="ant-1" span={1}></Col>
        </Row>
      </div>
    </div>
  );
}
