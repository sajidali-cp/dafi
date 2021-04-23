import React from "react";
import styles from "./Splash.module.scss";
import { PropagateLoader } from "react-spinners";
import logo from "../../assets/images/dashboard-nav-logo.svg";

const Splash = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <PropagateLoader color={"white"} />
      </div>
    </div>
  );
};

export default Splash;
