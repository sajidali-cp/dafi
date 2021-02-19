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
          <div className={styles.createAsset}>
            <div className={styles.heading}>Create a Synthetic dToken</div>
            <div className={styles.inputDiv}>
              <div className={styles.inputText}>Amount</div>
              <input
                type="number"
                placeholder="0.00  "
                value={state.amount}
                onChange={handleChange}
              />
              {errorMessage ? (
                <div className={styles.errorMessage}>{errorMessage}</div>
              ) : null}
            </div>
            <div className={styles.usdDiv}>
              <div className={styles.text}>USD :</div>
              <div className={styles.value}>
                <NumberFormat
                  value={toFixedNoRounding(state.usdValue, 2)}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </div>
            </div>
            <div className={styles.fee}>
              <div className={styles.feeText}>GAS PRICE (GWE) :</div>
              <div className={styles.feeDetail}>
                <div className={styles.feeInUSD}>
                  <select onChange={change} value={selectedFee}>
                    {gassFee.map((item: any, i: any) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.create} onClick={handleCreate}>
              {isCreating ? (
                <Loader type="Bars" color="#ffffff" height={18} width={20} />
              ) : (
                "Create"
              )}
            </div>
          </div>
          <div className={styles.assetData}>
            <div className={styles.asset}>
              <div className={styles.icon}>
                <img src={balances[activeIndex]?.icon} alt="asset" />
              </div>
              <div className={styles.nameShortDiv}>
                <div className={styles.name}>{balances[activeIndex]?.name}</div>
                <div className={styles.short}>
                  {balances[activeIndex]?.short}
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
