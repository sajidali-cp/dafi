import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import DashboardChart from "../_common/DashboardChart/DashboardChart";
import DashboardNavigation from "../_common/DashboardNavigation/DashboardNavigation";
import useDashboard from "../../hooks/dashboard";
import DashboardWAsset from "./DashbordWAsset";
import DashboarAreaChart from "./DashboardAreaChart";
import CreateDAsset from "./CreateDAsset";
// import NumberFormat from "react-number-format";
import { toFixedNoRounding } from "../_common/FixedNoRounding";
import Loader from "react-loader-spinner";
import { light, dark } from "../../theme/theme";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const isDarkTheme = useSelector((state) => state.wallet.isDarkTheme);

  const {
    handleAssetSellection,
    activeShort,
    chartData,
    selected,
    spark24H,
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
  } = useDashboard();
  return (
    <div className={styles.wrapper}>
      <DashboardNavigation
        handleAssetSellection={handleAssetSellection}
        activeShort={activeShort}
      />
      <div
        className={styles.rightWrapper}
        style={{
          backgroundColor: isDarkTheme ? dark.colorTwo : light.colorTwo,
        }}
      >
        <div className={styles.topSection}>
          <div
            className={styles.leftSection}
            style={{
              backgroundColor: isDarkTheme ? dark.colorThree : light.colorThree,
            }}
          >
            <div className={styles.flexCol}>
              <div className={styles.chart}>
                <DashboardChart
                  chartData={chartData}
                  isDarkTheme={isDarkTheme}
                />
              </div>
              <div className={styles.flexRow}>
                <img src="/assets/Icons/Group 5874.svg"></img>
                <div
                  className={styles.amount}
                  style={{
                    color: isDarkTheme ? dark.colorSix : light.colorSix,
                  }}
                >
                  {toFixedNoRounding(selected.DAFIBalance, 4)}
                </div>
              </div>
            </div>
            <DashboardWAsset selected={selected} balances={balances} />
            <div className={styles.createAsset}>
              <div
                className={styles.heading}
                style={{
                  color: isDarkTheme ? dark.colorSix : light.colorSix,
                }}
              >
                Create a dToken
              </div>
              <div className={styles.inputDiv}>
                <div
                  className={styles.inputText}
                  style={{
                    color: isDarkTheme ? dark.colorSix : light.colorSix,
                  }}
                >
                  Amount
                </div>
                <input
                  type="number"
                  placeholder="0.00  "
                  value={state.amount}
                  onChange={handleChange}
                  style={{
                    backgroundColor: isDarkTheme
                      ? dark.colorFive
                      : light.colorFive,
                    border: isDarkTheme ? "none" : "1px solid #cbcbc9",
                  }}
                />
                {errorMessage ? (
                  <div className={styles.errorMessage}>{errorMessage}</div>
                ) : null}
              </div>
              <button
                className={`${styles.createBtn} ${styles.btnEffect}`}
                disabled={isConnected ? false : true}
                onClick={handleCreate}
              >
                {isCreating ? (
                  <Loader type="Bars" color="#ffffff" height={18} width={20} />
                ) : (
                  "Create"
                )}
              </button>
            </div>
          </div>
          <CreateDAsset
            balances={balances}
            isConnected={isConnected}
            state={state}
            handleChange={handleChange}
            errorMessage={errorMessage}
            change={change}
            selectedFee={selectedFee}
            gassFee={gassFee}
            handleCreate={handleCreate}
            isCreating={isCreating}
            activeIndex={activeIndex}
          />
        </div>
        <div
          className={styles.bottomSection}
          style={{
            backgroundColor: isDarkTheme ? dark.colorThree : light.colorThree,
          }}
        >
          <DashboarAreaChart spark24H={spark24H} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
{
  /* <CreateDAsset 
      balances={balances}
      isConnected={isConnected}
      state={state}
      handleChange={handleChange}
      errorMessage={errorMessage}
      change={change}
      selectedFee={selectedFee}
      gassFee={gassFee}
      handleCreate={handleCreate}
      isCreating={isCreating}
      activeIndex={activeIndex}
      /> */
}

// <DashboarAreaChart spark24H={spark24H}/>
