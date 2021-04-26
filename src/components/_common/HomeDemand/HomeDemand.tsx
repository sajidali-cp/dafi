import React from "react";
import styles from "./HomeDemand.module.scss";
import illustration from "../../../assets/images/demand-illustration.png";

const HomeDemand = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.illustration}>
          <img src={illustration} alt="illustration" />
        </div>
        <div className={styles.demandInfo}>
          <div className={styles.demandHeading}>
            <span>Simulate</span> dToken rewards
          </div>
          <div className={styles.demandText}>
            DAFI Simulate is the first product which enables users to create
            dTokens from four existing crypto-assets - wBTC, ETH, AAVE and LINK.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDemand;
