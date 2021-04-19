import React from "react";
import NumberFormat from "react-number-format";
import { toFixedNoRounding } from "../_common/FixedNoRounding";
import styles from "./Dashboard.module.scss";

const DashboardWAsset = ({ selected, balances }: any) => {
  console.log(balances.filter((x: any) => x.name === "Ethereum"));
  console.log(balances);
  //   DAFIBalance: 50
  // ETHBalance: 1.85581908
  // address: "0xC3A9Df4B29477F1DF51b7aFA7a708512d665Dbaf"
  // dAAVEBalance: 0
  // dBTCBalance: 4.918035773696
  // dETHBalance: 3.32712850580634
  // dLINKBalance: 0
  // isConnected: true
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

      <div className={`${styles.wAssetsDiv} ${styles.leftBorder}`}>
        <img src="/assets/images/currency1.svg" alt="img" />
        <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
          <NumberFormat
            value={toFixedNoRounding(selected.dBTCBalance, 2)}
            displayType={"text"}
            thousandSeparator={true}
          />
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
          {toFixedNoRounding(balances.filter((x: any) => x.short === "wBTC")[0]?.change24h || 0,2)} %
        </div>
      </div>
      <div className={`${styles.wAssetsDiv} ${styles.leftRightBorder}`}>
        <img src="/assets/images/currency2.svg" alt="img" />
        <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
          <NumberFormat
            value={toFixedNoRounding(selected.dETHBalance, 2)}
            displayType={"text"}
            thousandSeparator={true}
          />
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
          {toFixedNoRounding(balances.filter((x: any) => x.short === "ETH")[0]?.change24h || 0,2)} %
        </div>
      </div>

      <div className={`${styles.wAssetsDiv} ${styles.rightBorder}`}>
        <img src="/assets/images/currency3.svg" alt="img" />
        <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
          <NumberFormat
            value={toFixedNoRounding(selected.dAAVEBalance, 2)}
            displayType={"text"}
            thousandSeparator={true}
          />
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
          {toFixedNoRounding(balances.filter((x: any) => x.short === "AAVE")[0]?.change24h || 0,2)} %
        </div>
      </div>
      <div className={styles.wAssetsDiv}>
        <img src="/assets/images/currency4.svg" alt="img" />
        <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
          <NumberFormat
            value={toFixedNoRounding(selected.dLINKBalance, 2)}
            displayType={"text"}
            thousandSeparator={true}
          />
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
          {toFixedNoRounding(balances.filter((x: any) => x.short === "LINK")[0]?.change24h || 0,2)} %
        </div>
      </div>
    </div>
  );
};

export default DashboardWAsset;
