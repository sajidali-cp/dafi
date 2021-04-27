import React, { useEffect, useState } from "react";
import styles from "./HomeFeatures.module.scss";
import feature1 from "../../../assets/images/feature1.svg";
import feature2 from "../../../assets/images/feature2.svg";
import feature3 from "../../../assets/images/feature3.svg";
import { CSSTransition } from "react-transition-group";
import VisibilitySensor from "react-visibility-sensor";

const HomeFeatures = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("=========>", show);
  }, [show]);
  return (
    <div className={styles.container}>
      <VisibilitySensor
        partialVisibility={true}
        onChange={(isVisible) => {
          setShow(isVisible);
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.featureRow}>
            <CSSTransition
              in={show}
              timeout={1000}
              classNames={{
                enter: styles.featureEnter,
                enterActive: styles.featureEnterActive,
                // exit: styles.featureExit,
                // exitActive: styles.featureExitActive,
              }}
            >
              <div className={styles.featureCard}>
                <div className={styles.icon}>
                  <img src={feature1} alt="feature" />
                </div>
                <div className={styles.heading}>Connect</div>
                <div className={styles.text}>
                  Connect your Metamask ERC20 wallet to the Polygon chain and
                  view your compatible balance.
                </div>
              </div>
            </CSSTransition>
            <CSSTransition
              in={show}
              timeout={1000}
              classNames={{
                enter: styles.featureEnter,
                enterActive: styles.featureEnterActive,
                // exit: styles.featureExit,
                // exitActive: styles.featureExitActive,
              }}
            >
              <div className={styles.featureCard}>
                <div className={styles.icon}>
                  <img src={feature2} alt="feature" />
                </div>
                <div className={styles.heading}>Create</div>
                <div className={styles.text}>
                  Create dBTC, dETH, dAAVE and dLINK with low fees.
                </div>
              </div>
            </CSSTransition>
            <CSSTransition
              in={show}
              timeout={2000}
              classNames={{
                enter: styles.featureEnter,
                enterActive: styles.featureEnterActive,
                // exit: styles.featureExit,
                // exitActive: styles.featureExitActive,
              }}
            >
              <div className={styles.featureCard}>
                <div className={styles.icon}>
                  <img src={feature3} alt="feature" />
                </div>
                <div className={styles.heading}>Simulate</div>
                <div className={styles.text}>
                  See your dToken balance pegging to the underlying
                  crypto-asset’s demand.
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default HomeFeatures;
