import React from "react";
import styles from "./TokenAllocation.module.scss";
import progress from "../../../assets/images/progress-bar.svg"

const TokenAllocation = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.tokenAllocation}>
          <div className={styles.left}>
            <div className={styles.time}>
              <div className={styles.timeDiv}>
                <div className={styles.duration}>70</div>
                <div className={styles.type}>Days</div>
              </div>
              <div className={styles.divider}>:</div>
              <div className={styles.timeDiv}>
                <div className={styles.duration}>15</div>
                <div className={styles.type}>Hours</div>
              </div>
              <div className={styles.divider}>:</div>
              <div className={styles.timeDiv}>
                <div className={styles.duration}>35</div>
                <div className={styles.type}>Minutes</div>
              </div>
              <div className={styles.divider}>:</div>
              <div className={styles.timeDiv}>
                <div className={styles.duration}>11</div>
                <div className={styles.type}>Seconds</div>
              </div>
            </div>
            <div className={styles.progress}>
              <img src={progress} alt="progress"/>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightHeading}>
              <span>TOKEN SALE</span> ALLOCATION
            </div>
            <div className={styles.rightText}>
              It is a long established fact that a reader will be
              distracted by the readable content of a page
            </div>
            <button className={styles.button}>Know More</button>
          </div>
        </div>
    </div>
  );
};

export default TokenAllocation;
