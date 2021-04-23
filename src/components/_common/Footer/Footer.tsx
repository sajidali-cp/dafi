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
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.about}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.aboutText}>
              Creating a new inflation model for every Blockchain and DeFi
              application. DAFI, not DeFi.
            </div>
          </div>

          <div className={styles.topRight}>
            <div className={styles.linksWrapper}>
              <div className={styles.linksHeading}>Information</div>
              <div className={styles.link}>
                <a target="_blank" href="https://www.dafiprotocol.io/">
                  Terms of service
                </a>
              </div>
              <div className={styles.link}>
                <a target="_blank" href="https://www.dafiprotocol.io/">
                  About
                </a>
              </div>
              <div className={styles.link}>
                <a target="_blank" href="https://www.dafiprotocol.io/">
                  Blog
                </a>
              </div>
              <div className={styles.link}>
                <a target="_blank" href="https://www.dafiprotocol.io/">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className={styles.linksWrapper}>
              <div className={styles.linksHeading}>Support</div>
              <div className={styles.link}>
                <a target="_blank" href="https://www.dafiprotocol.io/">
                  FAQ
                </a>
              </div>
              <div className={styles.link}>
                <a target="_blank" href="https://www.dafiprotocol.io/">
                  Contact
                </a>
              </div>
              <div className={styles.link}>
                <a target="_blank" href="https://www.dafiprotocol.io/">
                  Community
                </a>
              </div>
            </div>
            <div className={styles.subscribe}>
              <div className={styles.subscribeHeading}>
                Join The Dafi Protocol
              </div>
              <input className={styles.input} type="text" placeholder="Name" />
              <input
                className={styles.input}
                type="text"
                placeholder="Email Address"
              />
              <button className={`${styles.button} ${styles.btnEffect}`}>
                Subscribe
              </button>
            </div>
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
    </div>
  );
};

export default Footer;
