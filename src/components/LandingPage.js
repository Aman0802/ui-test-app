import React from "react";
import {
  SearchOutlined,
  GlobalOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Row } from "antd";
import style from "../utils/utility.module.scss";
import styles from "./landingPage.module.scss";

function Landing() {
  return (
    <div className={styles.home_page}>
      <div className={styles.popover}>
        Get the latest on our COVID-19 response
      </div>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "white",
            margin: "1rem 0",
          }}
        >
          <div style={{ fontSize: "1.1rem", marginRight: "0.2rem" }}>
            <span style={{ marginRight: "0.5rem" }}>Switch to hosting</span>
            <GlobalOutlined style={{ marginRight: "0.5rem" }} />
            <MenuOutlined tyle={{ marginRight: "0.5rem" }} />
          </div>
        </div>
        <Row className={`${style.rounded} ${styles.tags}`}>
          <div className={styles.tagName}>
            <span className={styles.heading}>Location</span>
            <span className={styles.subHeading}>Where are you going?</span>
          </div>
          <div className={styles.tagName}>
            <span className={styles.heading}>Check in</span>
            <span className={styles.subHeading}>Adds dates</span>
          </div>
          <div className={styles.tagName}>
            <span className={styles.heading}>Checkout</span>
            <span className={styles.subHeading}>Add date</span>
          </div>
          <div className={styles.tagName}>
            <span className={styles.heading}>Guests</span>
            <span className={styles.subHeading}>Add guests</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchOutlined
              style={{
                color: "#fff",
                backgroundColor: "#7D26CD",
                fontSize: "1.5rem",
                borderRadius: "50%",
                padding: "0.5rem",
              }}
            />
          </div>
        </Row>
        <div className={styles.hero_content}>
          <span className={styles.tagline}>
            Go <br />
            Near
          </span>
          <br />
          <button
            className={`${style.rounded} ${style.button} ${styles.hero_button}`}
          >
            Explore nearby stays
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
