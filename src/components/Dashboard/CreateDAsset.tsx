import React from "react";
import Loader from "react-loader-spinner";
import NumberFormat from "react-number-format";
import { toFixedNoRounding } from "../_common/FixedNoRounding";
import styles from "./Dashboard.module.scss";
import { dark, light } from "../../theme/theme";
import { useSelector } from "react-redux";

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
  //@ts-ignore
  const isDarkTheme = useSelector((state) => state.wallet.isDarkTheme);
  const getAndChangeInE = (val: any) => {
    debugger;
    if (val === 0) {
      return toFixedNoRounding(val, 2);
    }
    if (val >= 0.01) {
      return toFixedNoRounding(val, 2);
    } else {
      console.log(val.toExponential());
      return val.toExponential().toString();
    }
  };
  return (
    <div
      className={styles.rightSection}
      style={{
        backgroundColor: isDarkTheme ? dark.colorThree : light.colorThree,
      }}
    >
      {balances.length > 0 && isConnected ? (
        <>
          <div className={styles.assetData}>
            <div className={styles.asset}>
              <div className={styles.icon}>
                <img src={balances[activeIndex]?.icon} alt="asset" />
              </div>
              <div className={styles.nameShortDiv}>
                <div
                  className={styles.name}
                  style={{
                    color: isDarkTheme ? dark.colorSix : light.colorSix,
                  }}
                >
                  {balances[activeIndex]?.name}
                </div>
                <div className={styles.short}>
                  {balances[activeIndex]?.token}
                </div>
              </div>
            </div>
            <div className={styles.assetInfo}>
              <div
                className={`${styles.keyValueRow}`}
                style={{
                  backgroundColor: isDarkTheme
                    ? dark.colorSeven
                    : light.colorSeven,
                }}
              >
                <div
                  className={styles.key}
                  style={{
                    color: isDarkTheme ? dark.colorSix : light.colorSix,
                  }}
                >
                  PRICE
                </div>
                <div
                  className={`${styles.value} ${styles.priceTextColor}`}
                  style={{
                    color: isDarkTheme ? dark.colorSix : light.colorSix,
                  }}
                >
                  $
                  <NumberFormat
                    value={toFixedNoRounding(balances[activeIndex]?.rate, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
              </div>
              <div
                className={`${styles.keyValueRow}`}
                style={{
                  backgroundColor: isDarkTheme
                    ? dark.colorEight
                    : light.colorEight,
                }}
              >
                <div
                  className={styles.key}
                  style={{
                    color: isDarkTheme ? dark.colorSix : light.colorSix,
                  }}
                >
                  24H CHANGE
                </div>
                <div
                  className={`${styles.value} ${
                    balances[activeIndex]?.change24h >= 0
                      ? styles.changeTextColor
                      : styles.dangerTextColor
                  }`}
                >
                  {toFixedNoRounding(balances[activeIndex]?.change24h, 2)}%
                </div>
              </div>
              <div
                className={`${styles.keyValueRow}`}
                style={{
                  backgroundColor: isDarkTheme
                    ? dark.colorSeven
                    : light.colorSeven,
                }}
              >
                <div
                  className={styles.key}
                  style={{
                    color: isDarkTheme ? dark.colorSix : light.colorSix,
                  }}
                >
                  BALANCE
                </div>
                <div className={`${styles.value} ${styles.balanceTextColor}`}>
                  {balances[activeIndex]?.cryptoBalance > 0.01 ? (
                    <NumberFormat
                      value={getAndChangeInE(
                        balances[activeIndex]?.cryptoBalance
                      )}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  ) : (
                    getAndChangeInE(balances[activeIndex]?.cryptoBalance)
                  )}
                </div>
              </div>
              <div
                className={`${styles.keyValueRow}`}
                style={{
                  backgroundColor: isDarkTheme
                    ? dark.colorEight
                    : light.colorEight,
                }}
              >
                <div
                  className={styles.key}
                  style={{
                    color: isDarkTheme ? dark.colorSix : light.colorSix,
                  }}
                >
                  VALUE
                </div>
                <div
                  className={`${styles.value} ${styles.valueTextColor}`}
                  style={{
                    color: isDarkTheme ? dark.colorSix : light.colorSix,
                  }}
                >
                  $
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
        <div
          className={styles.connectYourWallet}
          style={{
            color: isDarkTheme ? dark.colorSix : light.colorSix,
          }}
        >
          Please connect your wallet...
        </div>
      )}
    </div>
  );
};

export default CreateDAsset;
