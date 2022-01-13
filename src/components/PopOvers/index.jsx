import { Button, Popover } from "antd";
import React from "react";
import "./styles.scss";

const PopOvers = () => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div>
      <h1>popover</h1>
      <Popover content={content} title="Title" placement="left">
        <Button type="primary">Hover me</Button>
      </Popover>
    </div>
  );
};

export default PopOvers;
