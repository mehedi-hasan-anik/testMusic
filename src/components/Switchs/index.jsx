import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import React, { useState } from "react";
import "./styles.scss";

const Switchs = () => {
  const [result, setResult] = useState(true);

  function onChange(checked) {
    setResult(checked);
  }

  console.log("result", result);

  return (
    <div>
      <h1>switch</h1>
      <Switch defaultChecked onChange={onChange} />
      <br />
      <Switch
        checkedChildren="开启"
        unCheckedChildren="关闭"
        defaultChecked
        onChange={onChange}
      />
      <br />
      <Switch checkedChildren="1" unCheckedChildren="0" onChange={onChange} />
      <br />
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
        onChange={onChange}
      />
    </div>
  );
};

export default Switchs;
