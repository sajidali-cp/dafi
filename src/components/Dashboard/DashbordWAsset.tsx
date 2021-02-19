import React from "react";
import NumberFormat from "react-number-format";
import { toFixedNoRounding } from "../_common/FixedNoRounding";
import styles from "./Dashboard.module.scss";
const DashboardWAsset = ({selected}:any) => {
return(
    <div className={styles.wAssetsWrapper}>
              <div className={styles.wAssetsDiv}>
                <div className={`${styles.wAssetsBalance}`}>
                  <NumberFormat
                    value={toFixedNoRounding(selected.DAFIBalance, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  {}
                </div>
                <div className={`${styles.wAssetsBorder} ${styles.dafi}`}></div>
                <div className={styles.wAssetsName}>Total DAFI</div>
              </div>
              <div className={`${styles.wAssetsDiv} ${styles.leftBorder}`}>
                <div className={`${styles.wAssetsBalance}`}>
                  <NumberFormat
                    value={toFixedNoRounding(selected.dBTCBalance, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
                <div className={`${styles.wAssetsBorder} ${styles.dBTC}`}></div>
                <div className={styles.wAssetsName}>dBTC</div>
              </div>
              <div className={`${styles.wAssetsDiv} ${styles.leftRightBorder}`}>
                <div className={`${styles.wAssetsBalance}`}>
                  <NumberFormat
                    value={toFixedNoRounding(selected.dETHBalance, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
                <div
                  className={`${styles.wAssetsBorder} ${styles.dEther}`}
                ></div>
                <div className={styles.wAssetsName}>dETH</div>
              </div>

              <div className={`${styles.wAssetsDiv} ${styles.rightBorder}`}>
                <div className={`${styles.wAssetsBalance}`}>
                  <NumberFormat
                    value={toFixedNoRounding(selected.dSNXBalance, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
                <div
                  className={`${styles.wAssetsBorder} ${styles.dUniswap}`}
                ></div>
                <div className={styles.wAssetsName}>dSNX</div>
              </div>
              <div className={styles.wAssetsDiv}>
                <div className={`${styles.wAssetsBalance}`}>
                  <NumberFormat
                    value={toFixedNoRounding(selected.dLINKBalance, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
                <div
                  className={`${styles.wAssetsBorder} ${styles.dLINK}`}
                ></div>
                <div className={styles.wAssetsName}>dLINK</div>
              </div>
            </div>
)
};

export default DashboardWAsset;
