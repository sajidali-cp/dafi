import React from "react";
import styles from "./Dashboard.module.scss";
import DashboardChart from "../_common/DashboardChart/DashboardChart";
import DashboardNavigation from "../_common/DashboardNavigation/DashboardNavigation";
import useDashboard from "../../hooks/dashboard";
import DashboardWAsset from "./DashbordWAsset";
import DashboarAreaChart from "./DashboardAreaChart";
import CreateDAsset from "./CreateDAsset";

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
  }=useDashboard()
  return (
    <div className={styles.wrapper}>
      <DashboardNavigation
        handleAssetSellection={handleAssetSellection}
        activeShort={activeShort}
      />
      <div className={styles.rightWrapper}>
        <div className={styles.midSection}>
          <div className={styles.midTop}>
            <div className={styles.chart}>
              <DashboardChart chartData={chartData} />
            </div>
            <DashboardWAsset selected={selected}/>
          </div>
          <div className={styles.midBottom}>
          <DashboarAreaChart spark24H={spark24H}/>
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
    </div>
  );
};

export default Dashboard;
