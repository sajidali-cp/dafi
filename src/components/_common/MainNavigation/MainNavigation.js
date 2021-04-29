import React, { useState } from "react";
import styles from "./MainNavigation.module.scss";
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import logo from "../../../assets/images/dashboard-nav-logo.svg";
import menu from "../../../assets/images/burger-menu.svg";

const MainNavigation = () => {
  const location = useLocation();

  const [menuOpenState, setMenuOpenState] = useState(false);
  const stateChangeHandler = (newState) => setMenuOpenState(newState.isOpen);
  const handleMenu = () => {
    setMenuOpenState(!menuOpenState);
  };

  if (location.pathname === "/app") {
    return null;
  }

  return (
    <>
      <Menu
        right
        disableAutoFocus
        customBurgerIcon={false}
        isOpen={menuOpenState}
        onStateChange={(state) => stateChangeHandler(state)}
        itemListElement="nav"
      >
        <div className="bm-item">
          <a href="https://www.dafiprotocol.io/">
            <div className="mainNavLink">Home</div>
          </a>
        </div>
        {/* <div className="bm-item">
          <a href="https://www.dafiprotocol.io/">
            <div className="mainNavLink">Token</div>
          </a>
        </div>
        <div className="bm-item">
          <Link to="/">
            <div className="mainNavLink">Features</div>
          </Link>
        </div> */}
        <div className="bm-item">
          <Link to="/app">
            <button className="mainNavButton btnEffect">Go to Dashboard</button>
          </Link>
        </div>
      </Menu>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className={styles.burgerMenu} onClick={handleMenu}>
            <img src={menu} alt="menu" />
          </div>

          <div className={styles.mainNavLinks}>
            <a href="https://www.dafiprotocol.io/">
              <div className={styles.navLink}>Home</div>
            </a>

            {/* <a href="https://www.dafiprotocol.io/">
              <div className={styles.navLink}>Token</div>
            </a>

            <Link to="/">
              <div className={styles.navLink}>Features</div>
            </Link> */}

            <Link to="/app">
              <button
                className={`
                     ${styles.navButton}
                     ${styles.btnEffect}
                     `}
              >
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
