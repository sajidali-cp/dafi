import React from "react";
import NumberFormat from "react-number-format";
import { toFixedNoRounding } from "../_common/FixedNoRounding";
import styles from "./Dashboard.module.scss";
import { dark, light } from "../../theme/theme";
import { useSelector } from "react-redux";

const DashboardWAsset = ({ selected, balances }: any) => {
  //@ts-ignore
  const isDarkTheme = useSelector((state) => state.wallet.isDarkTheme);
  console.log(balances.filter((x: any) => x.name === "Ethereum"));
  console.log(balances);
  const getAndChangeInE = (val: any) => {
    
    if(val === 0){
      return toFixedNoRounding(val, 2);
    }
    if (val >= 0.01) {
      return toFixedNoRounding(val, 2);
    } else {
      console.log(val.toExponential());
      return val.toExponential(1).toString();
    }
  };

  return (
    <div className={styles.wAssetsWrapper}>
      {/* <div className={styles.wAssetsDiv}>
                <div className={`${styles.wAssetsBalance}`}>
                  <NumberFormat
                    value={toFixedNoRounding(selected.DAFIBalance, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  {}
                </div>
                <div className={`${styles.wAssetsBorder} ${styles.dafi}`}></div>
                <div className={`${styles.percentage} ${styles.positive}`}>Total DAFI</div>
              </div> */}

      <div
        className={`${styles.wAssetsDiv} ${styles.leftBorder}`}
        style={{
          backgroundColor: isDarkTheme ? dark.colorFive : light.colorFive,
        }}
      >
        <img src="/assets/images/currency1.svg" alt="img" />
        <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
          {selected.dBTCBalance > 0.01 ? (
            <NumberFormat
              value={getAndChangeInE(selected.dBTCBalance)}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            getAndChangeInE(selected.dBTCBalance)
          )}
          <div className={`${styles.grayColor}`}>
            /$
            {toFixedNoRounding(
              balances.filter((x: any) => x.short === "wBTC")[0]?.rate || 0,
              2
            )}
          </div>
        </pre>
        <div
          className={`${styles.percentage} ${
            balances.filter((x: any) => x.short === "wBTC")[0]?.change24h >= 0
              ? styles.positive
              : styles.negative
          }`}
        >
          {toFixedNoRounding(
            balances.filter((x: any) => x.short === "wBTC")[0]?.change24h || 0,
            2
          )}{" "}
          %
        </div>
      </div>
      <div
        className={`${styles.wAssetsDiv} ${styles.leftRightBorder}`}
        style={{
          backgroundColor: isDarkTheme ? dark.colorFive : light.colorFive,
        }}
      >
        <img src="/assets/images/currency2.svg" alt="img" />
        <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
          {selected.dETHBalance > 0.01 ? (
            <NumberFormat
              value={getAndChangeInE(selected.dETHBalance)}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            getAndChangeInE(selected.dETHBalance)
          )}

          <div className={`${styles.grayColor}`}>
            /$
            {toFixedNoRounding(
              balances.filter((x: any) => x.short === "ETH")[0]?.rate || 0,
              2
            )}
          </div>
        </pre>
        <div
          className={`${styles.percentage} ${
            balances.filter((x: any) => x.short === "ETH")[0]?.change24h >= 0
              ? styles.positive
              : styles.negative
          }`}
        >
          {toFixedNoRounding(
            balances.filter((x: any) => x.short === "ETH")[0]?.change24h || 0,
            2
          )}{" "}
          %
        </div>
      </div>

      <div
        className={`${styles.wAssetsDiv} ${styles.rightBorder}`}
        style={{
          backgroundColor: isDarkTheme ? dark.colorFive : light.colorFive,
        }}
      >
        <img src="/assets/images/currency3.svg" alt="img" />
        <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
          {selected.dAAVEBalance > 0.01 ? (
            <NumberFormat
              value={getAndChangeInE(selected.dAAVEBalance)}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            getAndChangeInE(selected.dAAVEBalance)
          )}
          <div className={`${styles.grayColor}`}>
            /$
            {toFixedNoRounding(
              balances.filter((x: any) => x.short === "AAVE")[0]?.rate || 0,
              2
            )}
          </div>
        </pre>
        <div
          className={`${styles.percentage} ${
            balances.filter((x: any) => x.short === "AAVE")[0]?.change24h >= 0
              ? styles.positive
              : styles.negative
          }`}
        >
          {toFixedNoRounding(
            balances.filter((x: any) => x.short === "AAVE")[0]?.change24h || 0,
            2
          )}{" "}
          %
        </div>
      </div>
      <div
        className={styles.wAssetsDiv}
        style={{
          backgroundColor: isDarkTheme ? dark.colorFive : light.colorFive,
        }}
      >
        <img src="/assets/images/currency4.svg" alt="img" />
        <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
          {selected.dLINKBalance > 0.01 ? (
            <NumberFormat
              value={getAndChangeInE(selected.dLINKBalance)}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            getAndChangeInE(selected.dLINKBalance)
          )}
          <div className={`${styles.grayColor}`}>
            /$
            {toFixedNoRounding(
              balances.filter((x: any) => x.short === "LINK")[0]?.rate || 0,
              2
            )}
          </div>
        </pre>
        <div
          className={`${styles.percentage} ${
            balances.filter((x: any) => x.short === "LINK")[0]?.change24h >= 0
              ? styles.positive
              : styles.negative
          }`}
        >
          {toFixedNoRounding(
            balances.filter((x: any) => x.short === "LINK")[0]?.change24h || 0,
            2
          )}{" "}
          %
        </div>
      </div>
    </div>
  );
};

export default DashboardWAsset;
