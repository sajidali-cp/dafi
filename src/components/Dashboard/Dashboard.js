import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";
import { useAlert } from "react-alert";
import DashboardChart from "../_common/DashboardChart/DashboardChart";
import { useSelector } from "react-redux";
import DashboardNavigation from "../_common/DashboardNavigation/DashboardNavigation";
import { toFixedNoRounding } from "../_common/FixedNoRounding";
import { getdToken } from "../../services/transaction.service";
import { updateDAssets } from "../../services/web3.service";
import format from "date-fns/format";
import Loader from "react-loader-spinner";
import NumberFormat from "react-number-format";
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { isNumber } from "lodash";
import {
  getTokenSupplyHistory,
  totalSupply,
} from "../../services/wallet.service";

const Dashboard = () => {
  const alert = useAlert();
  const {
    selected: { isConnected },
    selected,
    balances,
    chartData,
  } = useSelector((state) => state.wallet);
  console.log(selected);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeShort, setActiveShort] = useState("wBTC");
  const [isCreating, setIsCreating] = useState(false);
  const [spark24H, setSpark24H] = useState([]);
  const gassFee = [5, 10, 15];
  const [selectedFee, setSelectedFee] = useState(gassFee[0]);
  const [state, setState] = useState({
    amount: 0,
    usdValue: 0,
  });
  const setUpcomponent = async (index) => {
    ;
    let res = await asyncGetTokenSupplyHistory(
      balances.length > 0 ? balances[index].short : "wBTC"
    );
    let res2 = await asyncTotalSupply(
      balances.length > 0 ? balances[index].short : "wBTC"
    );
    res.push(res2);
    setSpark24H([...res]);
  };
  useEffect(() => {
    setState({
      amount: balances.length > 0 ? balances[activeIndex].cryptoBalance : 0,
      usdValue:
        balances.length > 0
          ? balances[activeIndex].cryptoBalance * balances[activeIndex].rate
          : 0,
    });
    setUpcomponent(activeIndex);
  }, [balances]);
  const change = (e) => {
    console.log(e.target.value);
    setSelectedFee(e.target.value);
  };
  const handleAssetSellection = async (short) => {
    let index = balances.map((obj) => obj.short).indexOf(short);
    if (balances.length > 0 && index >= 0) {
      setActiveShort(short);
      setActiveIndex(index);
      setState({
        amount: balances[index].cryptoBalance,
        usdValue: balances[index].cryptoBalance * balances[index].rate,
      });
      setErrorMessage("");
      setUpcomponent(index);
    } else {
      return;
    }
  };

  const asyncGetTokenSupplyHistory = async (short) => {
    let res = await getTokenSupplyHistory(short);
    return res.reverse();
  };
  const asyncTotalSupply = async (short) => {
    return await totalSupply(short);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    if (!value) {
      setErrorMessage("");
    }
    let USDValue = value * balances[activeIndex].rate;
    setState({
      amount: value,
      usdValue: USDValue,
    });
  };

  const handleCreate = async () => {
    setIsCreating(true);
    console.log("function called________________");
    let _type;
    if (balances[activeIndex].short === "wBTC") {
      _type = "dBTC";
    }
    if (balances[activeIndex].short === "ETH") {
      _type = "dETH";
    }
    if (balances[activeIndex].short === "LINK") {
      _type = "dLINK";
    }
    if (balances[activeIndex].short === "SNX") {
      _type = "dSNX";
    }
    try {
      if (!isValidated()) {
        setIsCreating(false);
        return;
      }
      const res = await getdToken(_type, state.amount, selectedFee).catch((e) =>
        console.log(e)
      );
      if (res.status) {
        alert.show("dToken Created Successfully.", { type: "success" });
        setIsCreating(false);
        updateDAssets();
      }
      console.log(res);
    } catch (error) {
      setIsCreating(false);
      console.log(error);
    }
  };
  const isValidated = () => {
    let validated = true;
    if (state.amount === "") {
      setErrorMessage("This Field is required");
      validated = false;
    }
    if (
      Number(state.amount) > balances[activeIndex].cryptoBalance ||
      balances[activeIndex].cryptoBalance === "0"
    ) {
      setErrorMessage("Not enough balance");
      validated = false;
    }
    if (state.submitting) {
      validated = false;
    }
    return validated;
  };
  // const spark24H = [
  //   { price: 1, date: 1612767814 },
  //   { price: 2, date: 1612767824 },
  //   { price: 1, date: 1612767834 },
  // ];
  console.log(balances, "ooooooooooooooooooooooo");
  const CustomTooltip = ({ active, label, payload }) => {
    console.log(payload);
    if (active) {
      if (payload) {
        const {
          payload: { price },
        } = payload[0];
        return (
          <div className={styles.tooltipContentStyle}>
            <div className={styles.labelStyle}>
              {format(label, "do MMM yy")}
            </div>
            <div className={styles.ItemStyle}>
              {toFixedNoRounding(price, 4)}
            </div>
          </div>
        );
      }
    }

    return null;
  };
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
          </div>
          <div className={styles.midBottom}>
            <div className={styles.chart}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={spark24H}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2EC1B2" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#2EC1B2" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    vertical={false}
                    stroke="white"
                    strokeWidth={1}
                    strokeOpacity={0.08}
                    y={2}
                  />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(val) => {
                      if (!isNumber(val)) {
                        return "";
                      }
                      return format(val, "do MMM yy");
                    }}
                  />
                  <YAxis
                    tickCount={5}
                    hide={false}
                    axisLine={false}
                    tickLine={false}
                    fontSize={14}
                    fontWeight={500}
                    stroke="#4B4B4B"
                  />
                  <Tooltip content={<CustomTooltip />} animationDuration={0} />
                  <Area
                    type="linear"
                    dataKey="price"
                    stroke="#2EC1B2"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
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
                        {gassFee.map((item, i) => (
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
                    <Loader
                      type="Bars"
                      color="#ffffff"
                      height={18}
                      width={20}
                    />
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
                    <div className={styles.name}>
                      {balances[activeIndex]?.name}
                    </div>
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
                        value={toFixedNoRounding(
                          balances[activeIndex]?.rate,
                          2
                        )}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.keyValueRow} ${styles.bottomBorder}`}
                  >
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
                  <div
                    className={`${styles.keyValueRow} ${styles.bottomBorder}`}
                  >
                    <div className={styles.key}>BALANCE</div>
                    <div
                      className={`${styles.value} ${styles.balanceTextColor}`}
                    >
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
                  <div
                    className={`${styles.keyValueRow} ${styles.bottomBorder}`}
                  >
                    <div className={styles.key}>VALUE</div>
                    <div className={`${styles.value} ${styles.valueTextColor}`}>
                      <NumberFormat
                        value={toFixedNoRounding(
                          balances[activeIndex]?.amount,
                          2
                        )}
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
      </div>
    </div>
  );
};

export default Dashboard;
