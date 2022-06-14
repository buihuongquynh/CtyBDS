// @flow
import * as React from "react";
import ProjectCategory from "../../components/Project-category";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import data from "../../data";
const Project = () => {
  const router = useRouter();
  const { dataProductCategory, Project } = data();
  const countProject = [
    {
      id: 1,
      name: "Nội thất nhà ở",
    },
    {
      id: 2,
      name: "Shop thời trang",
    },
    {
      id: 3,
      name: "Shop phụ kiện, mỹ phẩm",
    },
    {
      id: 4,
      name: "Quán cafe, nhà hàng, trà sữa",
    },
    {
      id: 5,
      name: "Show room dược phẩm",
    },
  ];

  return (
    <>
      <div className="projects">
        <Row className="row-mobi">
          <Col className="mobi-none" span={4}></Col>

          <Col span={16}>
            <h1 className="">PHỐ THIẾT KẾ </h1>
            <h1 className="">Chuyên thiết kế & thi công trọn gói</h1>
            <ul className="list_pj">
              {countProject?.map((item) => (
                <a className="aPrj"
                  onClick={() =>
                    router.push(`/list-project-category?id=${item.id}`)
                  }
                >
                  - {item.name}
                  <br />
                </a>
              ))}
              <a className="aPrj">- Nội thất phòng thờ</a><br/>
              <a className="aPrj">- Show room, văn phòng</a>
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
