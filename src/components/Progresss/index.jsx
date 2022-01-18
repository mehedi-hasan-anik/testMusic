import { blue } from "@ant-design/colors";
import { BackTop, Progress } from "antd";
import React from "react";

const Progresss = () => {
  const color = blue;
  console.log("color", color);

  return (
    <div>
      <BackTop />
      <h1>progress</h1>
      <>
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />

        <Progress
          type="circle"
          percent={75}
          format={(percent) => `${percent} Days`}
        />
        <Progress type="circle" percent={100} format={() => "Done"} />
      </>
    </div>
  );
};

export default Progresss;
