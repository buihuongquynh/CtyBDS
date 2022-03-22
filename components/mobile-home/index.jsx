// @flow
import * as React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
const MobileHome = ({ src, item }) => {
  const router = useRouter();
  return (
    <div
      onClick={() =>
        router.push({
          pathname: "/list-img-project",
          query: {
            ids: item?.id,
            id: item?.project[0].id,
          },
        })
      }
      className="img_home"
    >
      <img src={src} alt="" />
    </div>
  );
};
export default MobileHome;
