import React from "react";
import styles from "./Footer.module.scss";
import social1 from "../../../assets/images/social1.svg";
import social2 from "../../../assets/images/social2.svg";
import social3 from "../../../assets/images/social3.svg";
import social4 from "../../../assets/images/social4.svg";
import social5 from "../../../assets/images/social5.svg";
import logo from "../../../assets/images/dashboard-nav-logo.svg";

const Footer = () => {
  return (
    <div className={`${styles.wrapper} ${styles.area}`}>
      <div className={`${styles.footer}`}>
        <div className={styles.top}>
          <div className={styles.about}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.aboutText}>
              Rewarding better users in every decentralized network.
            </div>
          </div>

          <div className={styles.topRight}>
            <div className={styles.linksWrapper}>
              <div className={styles.linksHeading}>Information</div>
              <div className={styles.link}>
                <a target="_blank" href="https://www.dafiprotocol.io/">
                  Dafi Protocol
                </a>
              </div>
              <div className={styles.link}>
                <a target="_blank" href="https://dafiprotocol.medium.com/">
                  Blog
                </a>
              </div>
            </div>
            <div className={styles.linksWrapper}>
              <div className={styles.linksHeading}>Support</div>
              <div className={styles.link}>
                <a target="_blank" href="https://www.dafiprotocol.io/">
                  FAQs
                </a>
              </div>
              <div className={styles.link}>
                <a target="_blank" href="https://t.me/dafiprotocol">
                  Community
                </a>
              </div>
            </div>
            {/*<div className={styles.subscribe}>*/}
            {/*  <div className={styles.subscribeHeading}>*/}
            {/*    Join The Dafi Protocol*/}
            {/*  </div>*/}
            {/*  <input className={styles.input} type="text" placeholder="Name" />*/}
            {/*  <input*/}
            {/*    className={styles.input}*/}
            {/*    type="text"*/}
            {/*    placeholder="Email Address"*/}
            {/*  />*/}
            {/*  <button className={`${styles.button} ${styles.btnEffect}`}>*/}
            {/*    Subscribe*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.social}>
            <div className={styles.icon}>
              <a target="_blank" href="https://t.me/dafiprotocol">
                <img src={social1} alt="social" />
              </a>
            </div>
            <div className={styles.icon}>
              <a target="_blank" href=" https://twitter.com/dafiprotocol">
                <img src={social2} alt="social" />
              </a>
            </div>
            <div className={styles.icon}>
              <a target="_blank" href="https://www.instagram.com/dafiprotocol">
                <img src={social3} alt="social" />
              </a>
            </div>
            <div className={styles.icon}>
              <a target="_blank" href="https://www.facebook.com/DAFIProtocol">
                <img src={social4} alt="social" />
              </a>
            </div>
            <div className={styles.icon}>
              <a target="_blank" href="https://dafiprotocol.medium.com">
                <img src={social5} alt="social" />
              </a>
            </div>
          </div>
          <div className={styles.copyright}>
            @ 2021 Copyrights by DAFI. All Rights Reserved.
          </div>
        </div>
      </div>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Footer;
