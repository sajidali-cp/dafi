import React from "react";
import styles from "./HomeFeatures.module.scss";
import feature1 from "../../../assets/images/feature1.svg";
import feature2 from "../../../assets/images/feature2.svg";
import feature3 from "../../../assets/images/feature3.svg";
import feature4 from "../../../assets/images/feature4.svg";
import feature5 from "../../../assets/images/feature5.svg";

const HomeFeatures = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.featureRow}>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <img src={feature1} alt="feature" />
            </div>
            <div className={styles.heading}>The problem</div>
            <div className={styles.text}>
              The only way to incentivize in decentralized economies, creates
              hyperinflation with low demand.
            </div>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <img src={feature2} alt="feature" />
            </div>
            <div className={styles.heading}>A new model</div>
            <div className={styles.text}>
              The Dafi protocol incentivizes staking and liquidity through a
              synthetic unit, pegged to protocol value.
            </div>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <img src={feature3} alt="feature" />
            </div>
            <div className={styles.heading}>Ability</div>
            <div className={styles.text}>
              Incentivizing staking, nodes and liquidity in periods of low
              demand, without excess supply.
            </div>
          </div>
        </div>
        <div className={styles.featureRow}>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <img src={feature4} alt="feature" />
            </div>
            <div className={styles.heading}>Uniting Chains</div>
            <div className={styles.text}>
              Any Blockchain or DeFi application can create an elastic xDFY,
              pegged to their own demand, and issued to the network.
            </div>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <img src={feature5} alt="feature" />
            </div>
            <div className={styles.heading}>DAFI, not DeFi</div>
            <div className={styles.text}>
              Everything from Blockchain protocols, to Exchanges and Liquidity
              in DeFi – can create new possibilities using Dafi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
