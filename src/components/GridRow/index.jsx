import { Col, Row } from "antd";
import React from "react";
import "./GridRow.styles.scss";

const GridRow = () => {
  return (
    <div>
      <h1>roew</h1>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col xs={12} xl={6} md={8}>
          <div className="item">1</div>
        </Col>
        <Col xs={12} xl={6} md={8}>
          <div className="item">1</div>
        </Col>
        <Col xs={12} xl={6} md={8}>
          <div className="item">1</div>
        </Col>
        <Col xs={12} xl={6} md={8}>
          <div className="item">1</div>
        </Col>
      </Row>
    </div>
  );
};

export default GridRow;
