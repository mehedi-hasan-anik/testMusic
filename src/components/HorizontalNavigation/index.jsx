import {
  BarsOutlined,
  CalculatorOutlined,
  EuroOutlined,
  HeartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Image, Menu } from "antd";
import React, { useState } from "react";
import logoPic from "../../photo/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg";
import "./HorizontalNavigation.styles.scss";

const HorizontalNavigation = () => {
  const [state, setState] = useState({
    current: "mail",
    visible: false,
  });

  const showDrawer = () => {
    setState({ visible: true });
  };

  const onClose = () => {
    setState({ visible: false });
  };

  const handleClick = (e) => {
    console.log("click ", e);
    setState({ current: e.key });
  };
  const { current } = state;

  return (
    <div>
      <div
        style={{
          float: "left",
          width: "220px",
          height: "31px",
          margin: "16px 24px 16px 0",
          background: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <a href="/">
          <Image src={logoPic} className="logo" alt="logo" />
        </a>
      </div>
      <>
        <Button
          className="menubtn"
          type="primary"
          shape="circle"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        ></Button>
        <Drawer
          title={<Image src={logoPic} className="logo" alt="logo" />}
          placement="right"
          onClose={onClose}
          visible={state.visible}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button type="text" href="/finances" icon={<EuroOutlined />}>
              Finances
            </Button>

            <Button type="text" href="/sante" icon={<HeartOutlined />}>
              Santé
            </Button>
            <Button
              type="text"
              href="/mathematiques"
              icon={<CalculatorOutlined />}
            >
              Mathématiques
            </Button>
            <Button type="text" href="/autres" icon={<BarsOutlined />}>
              Autres
            </Button>
          </div>
        </Drawer>
      </>

      <Menu
        className="bigmenu"
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        overflowedIndicator={<MenuOutlined />}
      >
        <Menu.Item key="finance" icon={<EuroOutlined />}>
          <a href="/finances"> Finances </a>
        </Menu.Item>
        <Menu.Item key="santé" icon={<HeartOutlined />}>
          <a href="/sante"> Santé </a>
        </Menu.Item>
        <Menu.Item key="apmathsp" icon={<CalculatorOutlined />}>
          <a href="/mathematiques"> Mathématiques </a>
        </Menu.Item>
        <Menu.Item key="autres" icon={<BarsOutlined />}>
          Autres
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default HorizontalNavigation;
