// @flow
import * as React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { useRouter } from "next/router";
const CardPr = ({item}) => {
  const router = useRouter();
  return (
    <Card
      hoverable
      // style={{ width: 230 }}
      
      onClick={() => router.push(`/detail-retai/${item.id}`)}
      cover={
        <img
        className="imgRetails"
          alt="example"
          src={item?.img}
        />
      }
    >
      <Meta title={item?.name} description={item?.des} />
    </Card>
  );
};
export default CardPr;
