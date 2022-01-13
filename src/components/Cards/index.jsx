import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
import image from "../../photo/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg";
import "./styles.scss";

const Cards = () => {
  const { Meta } = Card;

  const handleClick = (params) => {
    console.log("clicked");
  };

  return (
    <div>
      <h1>cards</h1>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" onClick={handleClick} />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={image} />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  );
};

export default Cards;
