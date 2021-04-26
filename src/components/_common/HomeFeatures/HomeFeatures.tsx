import React from "react";
import styles from "./HomeFeatures.module.scss";
import feature1 from "../../../assets/images/feature1.svg";
import feature2 from "../../../assets/images/feature2.svg";
import feature3 from "../../../assets/images/feature3.svg";

const HomeFeatures = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.featureRow}>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <img src={feature1} alt="feature" />
            </div>
            <div className={styles.heading}>Connect</div>
            <div className={styles.text}>
              Connect your Metamask ERC20 wallet to the Polygon chain and view
              your compatible balance.
            </div>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <img src={feature2} alt="feature" />
            </div>
            <div className={styles.heading}>Create</div>
            <div className={styles.text}>
              Create dBTC, dETH, dAAVE and dLINK with low fees.
            </div>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <img src={feature3} alt="feature" />
            </div>
            <div className={styles.heading}>Simulate</div>
            <div className={styles.text}>
              See your dToken balance pegging to the underlying crypto-asset’s
              deman.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
