// @flow
import * as React from "react";
import ProjectCategory from "../../components/Project-category";
import { Row, Col } from "antd";
import data from "../../data";
const Project = () => {
  const { dataProductCategory, Project } = data();
  return (
    <>
      <div className=".project">
        
        <Row className="row-mobi">
          <Col className="mobi-none" span={4}></Col>
          
          <Col span={16}>
          <h1>CHUYÊN THIẾT KẾ - THI CÔNG TRỌN GÓI</h1>
        <ul>
          <li>- Nội thất nhà ở</li>
          <li>- Nội thất phòng thờ</li>
          <li>- Shop thời trang</li>
          <li>- Café , Nhà Hàng , Trà Sữa</li>
          <li>- Show room , Văn Phòng</li>
          <li>- Shop phụ kiện , Mỹ Phẩm</li>
          <li>- Show room dược phẩm</li>
        </ul>
            {Project?.map((item) => (
              <ProjectCategory data={item}/>
            ))}
             <h2 style={{marginTop:'20px'}}>Nội thất phòng thờ(Đang cập nhật)</h2>
             <h2 style={{marginTop:'20px'}}>Show room , Văn Phòng(Đang cập nhật)</h2>
             <h2 style={{marginTop:'20px'}}>Show room dược phẩm(Đang cập nhật)</h2>
          </Col>
          <Col className="mobi-none" span={4}></Col>
        </Row>
      </div>
    </>
  );
};
export default Project;
