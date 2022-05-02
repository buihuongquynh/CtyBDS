// @flow
import * as React from "react";
import ProjectCategory from "../../components/Project-category";
import { Row, Col } from "antd";
import data from "../../data";
const Project = () => {
  const { dataProductCategory, Project } = data();
  return (
    <>
      <div className="projects">
        <Row className="row-mobi">
          <Col className="mobi-none" span={4}></Col>

          <Col span={16}>
            <h1 className="">PHỐ THIẾT KẾ </h1>
            <h1 className="">Chuyên thiết kế & thi công trọn gói</h1>
              <ul className="list_pj">
                <li>- Nội thất nhà ở</li>
                <li>- Nội thất phòng thờ</li>
                <li>- Shop thời trang</li>
                <li>- Quán cafe, nhà hàng, trà sữa</li>
                <li>- Shop phụ kiện, mỹ phẩm</li>
                <li>- Show room, văn phòng</li>
                <li>- Show room dược phẩm</li>
              </ul>

            {Project?.map((item) => (
              <ProjectCategory data={item} />
            ))}
            <h2 style={{ marginTop: "20px" }}>
              Nội thất phòng thờ(Đang cập nhật)
            </h2>
            <h2 style={{ marginTop: "20px" }}>
              Show room , Văn Phòng(Đang cập nhật)
            </h2>
          
          </Col>
          <Col className="mobi-none" span={4}></Col>
        </Row>
      </div>
    </>
  );
};
export default Project;
