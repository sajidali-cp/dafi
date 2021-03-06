import React, { useEffect, useState } from "react";
import styles from "./DashboardNavigation.module.scss";
import logo from "../../../assets/images/dashboard-nav-logo.svg";
import lightActive from "../../../assets/images/light-active.svg";
import lightInactive from "../../../assets/images/light-inactive.svg";
import darkActive from "../../../assets/images/dark-active.svg";
import darkInactive from "../../../assets/images/dark-inactive.svg";
import wallet from "../../../assets/images/wallet-icon.svg";
import menu from "../../../assets/images/burger-menu.svg";
import metamask from "../../../assets/images/Metamask.svg";
import ether from "../../../assets/images/ether.png";
import DafiModal from "../Modal/DafiModal";
import { slide as Menu } from "react-burger-menu";
import "../../../styles/burgerMenu.scss";
import { web3Sources } from "../../../constants";
import { initializeWeb3 } from "../../../services/web3.service";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { light, dark } from "../../../theme/theme";
import { toggleTheme, wrongNetworkSelection } from "../../../store/actions/WalletActions";

const DashboardNavigation = ({ handleAssetSellection, activeShort }) => {
  const isDarkTheme = useSelector((state) => state.wallet.isDarkTheme);
  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useAlert();
  const {
    selected: { address, isConnected },
    isWrongNetwork,
  } = useSelector((state) => state.wallet);
  const [connectOpen, setConnectOpen] = useState(false);
  const handleConnectOpen = () => {
    setMenuOpenState(false);
    setConnectOpen(!connectOpen);
  };
  const [menuOpenState, setMenuOpenState] = useState(false);
  const stateChangeHandler = (newState) => {
    setMenuOpenState(newState.isOpen);
  };
  const handleMenu = () => {
    setMenuOpenState(!menuOpenState);
  };

  const handleBurgerMenuActions = () => {
    handleConnectOpen();
    handleMenu();
  };

  const handleAssetChange = (i) => {
    handleAssetSellection(i);
  };
  const connectToWallet = async (value) => {
    // props.onConnected();
    const res = await initializeWeb3(value).catch((e) => {
      alert.show("Provider is not available", { type: "error" });
    });
    console.log(res);
  };

  const assetData = [
    {
      icon: "assets/images/currency1.svg",
      name: "wBTC",
      short: "wBTC",
      token: "ERC20",
    },
    {
      icon: "assets/images/currency2.svg",
      name: "Ethereum",
      short: "ETH",
      token: "ETH",
    },
    {
      icon: "assets/images/currency3.svg",
      name: "AAVE",
      short: "AAVE",
      token: "ERC20",
    },
    {
      icon: "assets/images/currency4.svg",
      name: "Chainlink",
      short: "LINK",
      token: "ERC20",
    },
  ];

  if (location.pathname === "/app") {
    return (
      <>
        <Menu
          right
          disableAutoFocus
          customBurgerIcon={false}
          isOpen={menuOpenState}
          onStateChange={(state) => stateChangeHandler(state)}
          itemListElement="div"
        >
          <div className="bm-item">
            <div className="connect" onClick={handleConnectOpen}>
              <div className="walletIcon">
                <img src={wallet} alt="wallet" />
              </div>
              <div className="text">
                {address
                  ? "Connected Wallet" + " (" + address.substring(0, 4) + ")"
                  : "Connect Wallet"}
              </div>
            </div>
          </div>
          <div className="tokenSelection">
            <div className="selectionText"> Select a token below:</div>
            {assetData.map((item, i) => (
              <div
                className={`assetDiv ${
                  activeShort === item.short ? "assetActiveDiv" : ""
                }`}
                onClick={() => {
                  setMenuOpenState(false);
                  handleAssetSellection(item.short);
                }}
              >
                <div className="icon">
                  <img src={item.icon} alt="asset" />
                </div>
                <div className="iconInfo">
                  <div className="name">{item.name}</div>
                  <div className="info">{item.token}</div>
                </div>
              </div>
            ))}

            <div
              className="learnText"
              onClick={() => {
                setMenuOpenState(false);
              }}
            >
              <a target="_blank" href="https://www.dafiprotocol.io/whitepaper">
                Learn about DAFI
              </a>
              <div className="toggleIcons">
                <div
                  className="light"
                  onClick={() => dispatch(toggleTheme(false))}
                >
                  <img
                    src={isDarkTheme ? lightInactive : lightActive}
                    alt="light"
                  />
                </div>
                <span>|</span>
                <div
                  className="dark"
                  onClick={() => dispatch(toggleTheme(true))}
                >
                  <img
                    src={isDarkTheme ? darkActive : darkInactive}
                    alt="dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </Menu>
        <div
          className={styles.wrapper}
          style={{
            backgroundColor: isDarkTheme ? dark.colorOne : light.colorOne,
          }}
        >
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className={styles.burgerMenu} onClick={handleMenu}>
            <img src={menu} alt="menu" />
          </div>
          <div className={styles.actionsDiv}>
            <div
              className={`${styles.connectButton} ${styles.btnOne}`}
              onClick={handleConnectOpen}
            >
              <div className={styles.btnAlt} />
              <span>
                <div className={styles.walletIcon}>
                  <img src={wallet} alt="wallet" />
                </div>
                <div className={styles.text}>
                  {address
                    ? "Connected Wallet" + " (" + address.substring(0, 4) + ")"
                    : "Connect Wallet"}
                </div>
              </span>
            </div>
            <div className={styles.webtokenSelection}>
              <div className={styles.webselectionText}>
                Select a token below:
              </div>
              {assetData.map((item, i) => (
                <div
                  className={`${styles.webassetDiv} ${
                    activeShort === item.short ? styles.webassetActiveDiv : ""
                  }`}
                  onClick={() => {
                    setMenuOpenState(false);
                    handleAssetSellection(item.short);
                  }}
                >
                  <div className={styles.webicon}>
                    {" "}
                    <img src={item.icon} alt="asset" />
                  </div>
                  <div className={styles.webiconInfo}>
                    <div className={styles.webname}>{item.name}</div>
                    <div className={styles.webinfo}>{item.token}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.weblearnText}>
            <a target="_blank" href="https://www.dafiprotocol.io/whitepaper">
              Learn about DAFI
            </a>
            <div className={styles.toggleIcons}>
              <div
                className={styles.light}
                onClick={() => dispatch(toggleTheme(false))}
              >
                <img
                  src={isDarkTheme ? lightInactive : lightActive}
                  alt="light"
                />
              </div>
              <span>|</span>
              <div
                className={styles.dark}
                onClick={() => dispatch(toggleTheme(true))}
              >
                <img src={isDarkTheme ? darkActive : darkInactive} alt="dark" />
              </div>
            </div>
          </div>
        </div>
        <DafiModal isOpen={isWrongNetwork} toggle={() => dispatch(wrongNetworkSelection(false))}>
          <div className={styles.wrongNetworkModel}>
            <div className={styles.text}>
              {" "}
              Switch to the Matic mainnet as your network, this is enabled to
              keep gas fees low for everyone.
            </div>
            <a target="_blank" href="https://docs.matic.network/docs/develop/metamask/config-matic/">
              {" "}
             How?
            </a>
          </div>
        </DafiModal>
        <DafiModal isOpen={connectOpen} toggle={handleConnectOpen}>
          <div className={styles.connectModal}>
            <div className={styles.connectOption}>
              <div className={styles.provider}>
                <div className={styles.image}>
                  <img src={metamask} alt="provider" />
                </div>
                <div className={styles.name}>Metamask</div>
              </div>
              <button
                className={styles.button}
                disabled={isConnected}
                onClick={() => {
                  handleConnectOpen();
                  connectToWallet(web3Sources.Metamask);
                }}
              >
                {isConnected ? "Connected" : "Connect Now"}
              </button>
            </div>
            {/* <div className={styles.connectOption}>
              <div className={styles.provider}>
                <div className={styles.image}>
                  <img src={ether} alt="provider" />
                </div>
                <div className={styles.name}>My Ether Wallet</div>
              </div>
              <button className={styles.button}>Connect Now</button>
            </div> */}
          </div>
        </DafiModal>
      </>
    );
  }

  return null;
};

export default DashboardNavigation;
