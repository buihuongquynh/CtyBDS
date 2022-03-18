// @flow
import * as React from "react";
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import data from "../../../data";
import Slider from "react-slick";
const ListImgProject = () => {
  const { Project } = data();
  const router = useRouter();
  const id = router.query?.id;
  const ids = router.query?.ids;
  const listData = Project[ids - 1]?.project?.filter(
    (item, index) => item?.id == id
  );
  const listOrtherData = Project[ids - 1]?.project?.filter(
    (item, index) => item?.id !== id
  );
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Row>
        <Col span={3}></Col>
        <Col span={18}>
          <div className="listImg">
            <Slider {...settings}>
              {listData && listData[0]?.img?.map((item, index) => (
                <img src={item} alt="" />
              ))}
            </Slider>
          </div>
          <div className="row">
            {listOrtherData&& listOrtherData?.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="col-md-3 wrap-img">
                    <img className="img_list" src={item?.img[0]} alt="" />
                    <div className="text">{item?.name}</div>
                  </div>
                );
              }
            })}
          </div>
        </Col>
        <Col span={3}></Col>
      </Row>
    </>
  );
};
export default ListImgProject;
