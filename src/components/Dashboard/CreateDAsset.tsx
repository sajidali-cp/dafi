import React from "react";
import Loader from "react-loader-spinner";
import NumberFormat from "react-number-format";
import { toFixedNoRounding } from "../_common/FixedNoRounding";
import styles from "./Dashboard.module.scss";

const CreateDAsset = ({
  balances,
  isConnected,
  state,
  handleChange,
  errorMessage,
  change,
  selectedFee,
  gassFee,
  handleCreate,
  isCreating,
  activeIndex,
}: any) => {
  return (
    <div className={styles.rightSection}>
      {balances.length > 0 && isConnected ? (
        <>
          <div className={styles.assetData}>
            <div className={styles.asset}>
              <div className={styles.icon}>
                <img src={balances[activeIndex]?.icon} alt="asset" />
              </div>
              <div className={styles.nameShortDiv}>
                <div className={styles.name}>{balances[activeIndex]?.name}</div>
                <div className={styles.short}>
                  {balances[activeIndex]?.token}
                </div>
              </div>
            </div>
            <div className={styles.assetInfo}>
              <div
                className={`${styles.keyValueRow} ${styles.topBorder} ${styles.bottomBorder}`}
              >
                <div className={styles.key}>PRICE</div>
                <div className={`${styles.value} ${styles.priceTextColor}`}>
                  <NumberFormat
                    value={toFixedNoRounding(balances[activeIndex]?.rate, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
              </div>
              <div className={`${styles.keyValueRow} ${styles.bottomBorder}`}>
                <div className={styles.key}>24H CHANGE</div>
                <div
                  className={`${styles.value} ${
                    balances[activeIndex]?.change24h >= 0
                      ? styles.changeTextColor
                      : styles.dangerTextColor
                  }`}
                >
                  {toFixedNoRounding(balances[activeIndex]?.change24h, 2)}
                </div>
              </div>
              <div className={`${styles.keyValueRow} ${styles.bottomBorder}`}>
                <div className={styles.key}>BALANCE</div>
                <div className={`${styles.value} ${styles.balanceTextColor}`}>
                  <NumberFormat
                    value={toFixedNoRounding(
                      balances[activeIndex]?.cryptoBalance,
                      2
                    )}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
              </div>
              <div className={`${styles.keyValueRow} ${styles.bottomBorder}`}>
                <div className={styles.key}>VALUE</div>
                <div className={`${styles.value} ${styles.valueTextColor}`}>
                  <NumberFormat
                    value={toFixedNoRounding(balances[activeIndex]?.amount, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.connectYourWallet}>
          Please connect your wallet...
        </div>
      )}
    </div>
  );
};

export default CreateDAsset;
