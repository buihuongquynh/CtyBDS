// @flow
import * as React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { RightOutlined } from "@ant-design/icons";
const ProjectCategory = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className={styles.ProjectCategory}>
        <div className={`${styles.categoryName} row-sb`}>
          <h2>{data.name}</h2>
          <div className="items-center mr-30">
            <b onClick={() => router.push(
              {
                pathname: "list-project-category",
                query: { 
                 
                  id: data.id
                },
              }
              )}>
              
              <a>Xem thêm</a>{" "}
            </b>
            <RightOutlined />
          </div>
        </div>
        <div className={`${styles.listImage}`}>
          <div className="row">
            {data?.project?.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="col-md-6 col-sm-12 hoverImg">
                    <div onClick={() => router.push({
                      pathname: "list-img-project/[ids]/[id]",
                      query: { 
                        ids:  data.id, 
                        id: item.id
                      },
                    })} className={`${styles.imgProject} scale_hv`}>
                      <img src={item.img[0]} className="imgProject " alt="project" />
                      <div className="text">{item.name}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectCategory;
