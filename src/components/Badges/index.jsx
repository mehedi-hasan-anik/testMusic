import { Badge } from "antd";
import React from "react";
import image from "../../photo/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg";
import "./styles.scss";

const Badges = () => {
  return (
    <div>
      <h1>Badges</h1>
      <Badge count={99} offset={[10, 10]} color="yellow">
        <img src={image} alt="" weidth="100px" height="100px" />
      </Badge>
    </div>
  );
};

export default Badges;
