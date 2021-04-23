import React from "react";
import styles from "./HomeHeader.module.scss";
import MainNavigation from "../MainNavigation/MainNavigation";
import headerIllustration from "../../../assets/images/home-header-illustration.png";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className={styles.wrapper}>
      <MainNavigation />
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <div className={styles.headerHeading}>A Synthetic DeFi Protocol</div>
          <div className={styles.headerText}>
            Creating a new inflation model for every Blockchain and DeFi
            application. DAFI, not DeFi.
          </div>
          <Link to="/app">
            <button className={`${styles.headerButton} ${styles.btnEffect}`}>
              Go to Dashboard
            </button>
          </Link>
        </div>
        <div className={styles.headerIllustration}>
          <img src={headerIllustration} alt="Header Illustration" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
