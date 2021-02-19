import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { getdToken } from "../services/transaction.service";
import {
  getTokenSupplyHistory,
  totalSupply,
  updateBalances,
} from "../services/wallet.service";
import { updateDAssets } from "../services/web3.service";
import Decimal from "decimal.js-light";

const useDashboard = () => {
  const x = new Decimal(0.1); // false
  const res2 = new Decimal(0).gt(x);
  const alert = useAlert();
  const {
    selected: { isConnected },
    selected,
    balances,
    chartData,
  } = useSelector((state: any) => state.wallet);
  console.log(chartData);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeShort, setActiveShort] = useState("wBTC");
  const [isCreating, setIsCreating] = useState(false);
  const [spark24H, setSpark24H] = useState<any>([]);
  const gassFee = [5, 10, 15];
  const [selectedFee, setSelectedFee] = useState(gassFee[0]);
  const [state, setState] = useState({
    amount: 0,
    usdValue: 0,
  });
  const setUpcomponent = async (index: any) => {
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
  const change = (e: any) => {
    console.log(e.target.value);
    setSelectedFee(e.target.value);
  };
  const handleAssetSellection = async (short: any) => {
    let index = balances.map((obj: any) => obj.short).indexOf(short);
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

  const asyncGetTokenSupplyHistory = async (short: any) => {
    let res = await getTokenSupplyHistory(short);
    return res.reverse();
  };
  const asyncTotalSupply = async (short: any) => {
    return await totalSupply(short);
  };
  const handleChange = (e: any) => {
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
      //@ts-ignore
      if (res.status) {
        alert.show("dToken Created Successfully.", { type: "success" });
        setIsCreating(false);
        updateDAssets();
        updateBalances();
      }
      console.log(res);
    } catch (error) {
      setIsCreating(false);
      console.log(error);
    }
  };
  const isValidated = () => {
    let validated = true;
    //@ts-ignore
    if (state.amount === "") {
      setErrorMessage("This Field is required");
      validated = false;
    }
    //@ts-ignore
    if (state.amount === "0") {
      setErrorMessage("Enter an valid value");
      validated = false;
    }
    let x = new Decimal(balances[activeIndex].cryptoBalance);
    if (new Decimal(state.amount).gt(x)) {
      setErrorMessage("Not enough balance");
      validated = false;
    }
    //@ts-ignore
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

  return {
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
  };
};
export default useDashboard;
