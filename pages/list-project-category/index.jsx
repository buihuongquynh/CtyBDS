// @flow
import * as React from "react";
import ProjectCategory2 from "../../components/Project-category2";
import { Row, Col } from "antd";
import { useRouter } from 'next/router'
import data from "../../data";
const Project = () => {
  const router = useRouter()
  const id = router.query.id
  const { Project } = data();
  const result = Project.filter(item => item.id.toString() === id);
  return (
    <>
      <div className="project">
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
              <ProjectCategory2 data={result[0]}/>
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
    </>
  );
};
export default Project;
