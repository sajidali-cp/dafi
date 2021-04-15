import React from "react";
import styles from "./Dashboard.module.scss";
import DashboardChart from "../_common/DashboardChart/DashboardChart";
import DashboardNavigation from "../_common/DashboardNavigation/DashboardNavigation";
import useDashboard from "../../hooks/dashboard";
import DashboardWAsset from "./DashbordWAsset";
import DashboarAreaChart from "./DashboardAreaChart";
import CreateDAsset from "./CreateDAsset";
import NumberFormat from "react-number-format";
import { toFixedNoRounding } from "../_common/FixedNoRounding";
import Loader from "react-loader-spinner";
const Dashboard = () => {
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
      <div className={styles.rightWrapper}>
        <div className={styles.topSection}>
          <div className={styles.leftSection}>
            <div className={styles.flexCol}>
              <div className={styles.chart}>
                <DashboardChart chartData={chartData} />
              </div>
              <div className={styles.flexRow}>
                <img src="/assets/Icons/Group 5874.svg"></img>
                <div className={styles.amount}>0.00</div>
              </div>
            </div>
            <DashboardWAsset selected={selected} />
            <div className={styles.createAsset}>
              <div className={styles.heading}>Create a dToken</div>
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
              <div className={styles.create} onClick={handleCreate}>
                {isCreating ? (
                  <Loader type="Bars" color="#ffffff" height={18} width={20} />
                ) : (
                  "Create"
                )}
              </div>
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
        <div className={styles.bottomSection}>
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
