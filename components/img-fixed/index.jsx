// @flow
import * as React from "react";
import styles from './styles.module.scss'
const ImgFixed = ({src}) => {
  return <div style={{backgroundImage: `url(${src})`}} className={styles.img_fixed}></div>;
};
export default ImgFixed;
