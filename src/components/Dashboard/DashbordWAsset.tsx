import React from "react";
import NumberFormat from "react-number-format";
import { toFixedNoRounding } from "../_common/FixedNoRounding";
import styles from "./Dashboard.module.scss";
const assetData = [
  {
    icon: "assets/images/currency1.svg",
    name: "wBitcoin",
    short: "wBTC",
    token:"ERC20"
  },
  {
    icon: "assets/images/currency2.svg",
    name: "Ethereum",
    short: "ETH",
    token:"ETH"
  },
  {
    icon: "assets/images/snx.png",
    name: "Synthetix",
    short: "SNX",
    token:"ERC20"
  },
  {
    icon: "assets/images/currency3.svg",
    name: "Chainlink",
    short: "LINK",
    token:"ERC20"
  },
];
const DashboardWAsset = ({selected}:any) => {
return(
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
                <img src="/assets/images/currency1.svg" alt="img"/>
                <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
                  <NumberFormat
                    value={toFixedNoRounding(selected.dBTCBalance, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  /> 
                  <div className={`${styles.grayColor}`}>/$21.13</div>
                </pre>
                 <div className={`${styles.percentage} ${styles.positive}`}>-6.36 %</div>
              </div>
              <div className={`${styles.wAssetsDiv} ${styles.leftRightBorder}`}>
              <img src="/assets/images/currency2.svg" alt="img"/>
              <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
                  <NumberFormat
                    value={toFixedNoRounding(selected.dBTCBalance, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  /> 
                  <div className={`${styles.grayColor}`}>/$21.13</div>
                </pre>
                 <div className={`${styles.percentage} ${styles.positive}`}>-6.36 %</div>
              </div>

              <div className={`${styles.wAssetsDiv} ${styles.rightBorder}`}>
              <img src="/assets/images/currency3.svg" alt="img"/>
              <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
                  <NumberFormat
                    value={toFixedNoRounding(selected.dBTCBalance, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  /> 
                  <div className={`${styles.grayColor}`}>/$21.13</div>
                </pre>
                 <div className={`${styles.percentage} ${styles.positive}`}>-6.36 %</div>
              </div>
              <div className={styles.wAssetsDiv}>
              <img src="/assets/images/currency4.svg" alt="img"/>
              <pre className={`${styles.wAssetsBalance} ${styles.positiveColor}`}>
                  <NumberFormat
                    value={toFixedNoRounding(selected.dBTCBalance, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  /> 
                  <div className={`${styles.grayColor}`}>/$21.13</div>
                </pre>
                 <div className={`${styles.percentage} ${styles.positive}`}>-6.36 %</div>
              </div>
            </div>
)
};

export default DashboardWAsset;
