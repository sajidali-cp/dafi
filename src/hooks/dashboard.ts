import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { getdToken,dTokenCreation } from "../services/transaction.service";
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
  console.log(balances);
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
    let _type;
    if (balances[activeIndex]?.short === "wBTC") {
      _type = "dBTC";
    }
    if (balances[activeIndex]?.short === "ETH") {
      _type = "dETH";
    }
    if (balances[activeIndex]?.short === "LINK") {
      _type = "dLINK";
    }
    if (balances[activeIndex]?.short === "AAVE") {
      _type = "dAAVE";
    }
    try {
      if (!isValidated()) {
        setIsCreating(false);
        return;
      }
      const allowed=await dTokenCreation();
     if(allowed){
      const res = await getdToken(
        _type,
        state.amount,
        selectedFee
      ).catch((e) => {});
      //@ts-ignore
      if (res.status) {
        alert.show("dToken Created Successfully.", { type: "success" });
        setIsCreating(false);
        updateDAssets();
        updateBalances();
      }
     }else{
      alert.show("Can`t Create dToken.", { type: "error" });
     }
    } catch (error) {
      setIsCreating(false);
    }
  };
  const isdTokenGenerated = () => {
    
    const activeObj = balances[activeIndex];
    if (activeObj.short === "wBTC") {
      return selected.dBTCBalance ? true : false;
    }
    if (activeObj.short === "AAVE") {
      return selected.dAAVEBalance ? true : false;
    }
    if (activeObj.short === "ETH") {
      return selected.dETHBalance ? true : false;
    }
    if (activeObj.short === "LINK") {
      return selected.dLINKBalance ? true : false;
    }
  };
  const isValidated = () => {
    ;
    let validated = true;
    //@ts-ignore
    if (state.amount === "") {
      setErrorMessage("This Field is required");
      validated = false;
    }
    //@ts-ignore
    if (state.amount === 0 || state.amount === "0") {
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
    if(isdTokenGenerated()){
      alert.show("A dToken for this asset has already been created", { type: "error" });
      validated = false;
    }
    return validated;
  };

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
