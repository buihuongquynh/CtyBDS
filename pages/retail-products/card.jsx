// @flow
import * as React from "react";
import { Card } from "antd";
const { Meta } = Card;

const CardPr = ({item}) => {
  return (
    <Card
      hoverable
      // style={{ width: 230 }}
      cover={
        <img
          alt="example"
          src={item.src}
        />
      }
    >
      <Meta title={item.name} description={item.des} />
    </Card>
  );
};
export default CardPr;
