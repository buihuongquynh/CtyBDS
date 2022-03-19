// @flow
import * as React from "react";
import styles from './styles.module.scss';
import Router from "next/router";
const ImgFixed = ({src, item}) => {
  return <div  onClick={() =>
    Router.push({
      pathname: `/list-img-project/${item?.id}/${item?.project[0].id}`,
    })
  } style={{backgroundImage: `url(${src})`}} className={styles.img_fixed}></div>;
};
export default ImgFixed;
