import { Tabs, Radio, Space } from 'antd';
import React, { useState } from "react";

import List from "./list";
const { TabPane } = Tabs;
const index = () => {
    const data = [
      {
        id: 1,
        name: "Sản phẩm bán lẻ",
        product: [
          {
            id: 1,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 2,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 3,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 4,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 5,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
        ]
      },
      {
        id: 2,
        name: "Sản phẩm bán lẻ",
        product: [
          {
            id: 1,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 2,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 3,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 4,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 5,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
        ]
      },
      {
        id: 3,
        name: "Sản phẩm bán lẻ",
        product: [
          {
            id: 1,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 2,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 3,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 4,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 5,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
        ]
      },
      {
        id: 4,
        name: "Sản phẩm bán lẻ",
        product: [
          {
            id: 1,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 2,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 3,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 4,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
          {
            id: 5,
            name: "Cá Chình Unagi Kabayaki Cắt Miến",
            des: "www.instagram.com",
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          },
        ]
      }
    ]
  return (
    <div className= 'retail'>
        <h3>DANH MỤC SẢN PHẨM</h3>
        <Tabs tabPosition='left'>
          {
            data?.map((item)=>
            <TabPane tab={item.name} key={item.id}>
           <List product={item.product}/>
          </TabPane>
            )
          }
        </Tabs>
      </div>
  );
};
export default index;
