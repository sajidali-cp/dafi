import React from "react";
import styles from "./HomeDemand.module.scss";
import illustration from "../../../assets/images/demand-illustration.png";

const HomeDemand = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.illustration}>
          <img src={illustration} alt="illustration"/>
        </div>
        <div className={styles.demandInfo}>
          <div className={styles.demandHeading}>
            <span>Demand-pegged</span> Inflation
          </div>
          <div className={styles.demandText}>
            The Dafi protocol creates early-liquidity without
            hyperinflation. Building a new generation of stable
            Blockchain’s & DeFi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDemand;
