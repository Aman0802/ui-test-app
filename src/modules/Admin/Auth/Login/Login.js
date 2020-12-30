import React from "react";
import { Row, Col } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import style from "../../../../utils/utility.module.scss";
import styles from "../auth.module.scss";

const LoginPage = () => {
  return (
    <>
      <div className={styles.login}>
        <span style={{ fontSize: "2rem", fontWeight: "700" }}>Login Page</span>
        <Row style={{ margin: "1rem" }}>
          <Col>
            <button
              className={`${style.button} ${style.rounded}`}
              style={{
                backgroundColor: "#3b5998",
                color: "#fff",
                outline: "none",
                border: "none",
              }}
            >
              <FacebookOutlined style={{ marginRight: "0.5rem" }} />
              Facebook
            </button>
          </Col>
          <button
            className={`${style.button} ${style.rounded}`}
            style={{
              backgroundColor: "#26A65B",
              color: "#fff",
              outline: "none",
              border: "none",
            }}
          >
            <GoogleOutlined style={{ marginRight: "0.5rem" }} />
            Google
          </button>
        </Row>
        <Row style={{ margin: "1rem" }}>
          <Col xs={24}>
            <input
              className={`${style.input} ${style.rounded}`}
              type="text"
              placeholder="Your Email"
              style={{
                width: "100%",
                margin: "1rem",
                outline: "none",
              }}
            />
          </Col>
          <Col span="24">
            <input
              className={`${style.input} ${style.rounded}`}
              type="text"
              placeholder="Password"
              style={{
                width: "100%",
                margin: "1rem",
                outline: "none",
              }}
            />
          </Col>
        </Row>
        <Row style={{ margin: "1rem" }}>
          <Col sm="12">
            <button
              className={`${style.button} ${style.rounded}`}
              style={{
                backgroundColor: "#DC3023",
                color: "#fff",
                outline: "none",
                border: "none",
              }}
            >
              Login
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoginPage;
