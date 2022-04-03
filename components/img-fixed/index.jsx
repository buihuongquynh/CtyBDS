// @flow
import * as React from "react";
import styles from './styles.module.scss';
import { useRouter } from "next/router";
const ImgFixed = ({src, item}) => {
  const router = useRouter();
  return <div 
  
  onClick={() => router.push(
    {
      pathname: "/list-img-project",
      query: { 
        ids: item?.id,
        id: item?.project[0].id
      },
    }
    )}
  style={{backgroundImage: `url(${src})`}} className={styles.img_fixed}></div>;
};
export default ImgFixed;
