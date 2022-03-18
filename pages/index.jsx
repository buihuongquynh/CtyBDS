import Head from "next/head";
import React from "react";
import ImgFixed from "../components/img-fixed";
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
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 center">
            <div className="center_banner">
              <div className="smaill_photo">
                <img src={smImg.src} alt="" />
              </div>
              <p className="title_banner">Phố thiết kế</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-end big_img">
            <img src={bigImg.src} alt="" />
          </div>{" "}
        </div>
      </div>
      <div className="project">
        <Row>
          <Col className="ant-1" span={1}></Col>
          <Col className="ant-22" span={22}>
            <h1>Dự án</h1>
            {Project.map((item) => (
              <>
                <div className="row-sb mt-100">
                  <div className="items-center">
                    <h2>{item.name}</h2>
                    <RightOutlined />
                  </div>


                  <h2
                    onClick={() =>
                      Router.push({
                        pathname: "list-project-category",
                        query: {
                          id: item.id,
                        },
                      })
                    }
                  >
                    <i className="home-view">Xem dự án</i>
                  </h2>
                </div>
                <ImgFixed src={item?.project[0]?.img[0]} />
              </>
            ))}
          </Col>
          <Col className="ant-1" span={1}></Col>
        </Row>
      </div>
    </div>
  );
}
