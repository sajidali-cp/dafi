// import { Web3Wrapper } from '@0x/web3-wrapper';
// import { providerUtils } from '@0x/utils';
// import WalletLink from 'walletlink'
// import { providers } from 'ethers';
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

// import WalletConnectProvider from "@walletconnect/web3-provider";
import { web3Sources } from "../constants";

import { ERC20Contracts } from "../contracts/constants/contracts";
import { store } from "../App";
import {
  loadingBalancePending,
  resetWalletsInfoAction,
  saveAssetsDataInUSD,
  saveWalletsInfoAction,
  SaveWeb3InfoAction,
  SetSelectedWalletAction,
} from "../store/actions/WalletActions";
import { Wallet } from "../store/types/WalletState";
import {
  getDAFI20Balance,
  getERC20Balance,
  getETHBalance,
  updateBalances,
} from "./wallet.service";
import { ContractLookup } from "../contracts/contracts.lookup";


// let web3Wrapper: Web3Wrapper | null = null;
const web3: Web3 = new Web3();

// @ts-ignore
export const initializeWeb3 = async (source: web3Sources): Promise<any> => {
  store.dispatch(loadingBalancePending());
  try {
    switch (source) {
      case web3Sources.Metamask:
        await initMetamask();
        break;
      case web3Sources.MEW:
        await initMEW();
        break;
    }
    if (web3.currentProvider) {
      store.dispatch(SaveWeb3InfoAction(source, web3));
      await updateDAssets();
      await updateBalances(); //Update all assets balances
    } else {
      throw new Error("Error while accessing web3 provider.");
    }
  } catch (e) {
  }
};

export const updateDAssets = async () => {
  
  const accounts = await web3.eth.getAccounts();
  if (accounts.length <= 0) {
    throw new Error("Error, Provider is not available");
  }

  let wallets: Wallet[] = [];
  let data: any;
  let isDefaultSelected = false;
  const dLINK = ContractLookup.find(
    (contract) => contract.contractName === ERC20Contracts.dLINK
  );
  const dBTC = ContractLookup.find(
    (contract) => contract.contractName === ERC20Contracts.dBTC
  );
  const dETH = ContractLookup.find(
    (contract) => contract.contractName === ERC20Contracts.dETH
  );

  const DAFI = ContractLookup.find(
    (contract) => contract.contractName === ERC20Contracts.DAFIPLATFORM
  );
  const dAAVE = ContractLookup.find(
    (contract) => contract.contractName === ERC20Contracts.dAAVE
  );
  for (let i = 0; i < accounts.length; i++) {
    let dLINKBalance: any = await getERC20Balance(dLINK, accounts[i]); 
    let dBTCBalance: any = await getERC20Balance(dBTC, accounts[i]);
    let dETHBalance: any = await getERC20Balance(dETH, accounts[i]);
    let dAAVEBalance: any = await getERC20Balance(dAAVE, accounts[i]);
    
    let DAFIObj: any = await getDAFI20Balance(DAFI, accounts[i]);
    let ETHBalance = await getETHBalance(accounts[i]);
    let walletObj: Wallet = {
      address: accounts[i],
      dLINKBalance: dLINKBalance ? Number(dLINKBalance) : 0,
      dBTCBalance: dBTCBalance ? Number(dBTCBalance) : 0,
      dETHBalance: dETHBalance ? Number(dETHBalance) : 0,
      dAAVEBalance: dAAVEBalance ? Number(dAAVEBalance) : 0,
      DAFIBalance: DAFIObj ? Number(DAFIObj.DFYToken) : 0,
      ETHBalance: ETHBalance ? ETHBalance : 0,
      isConnected : true,
    };
    
    let chartsAssets = [
      { name: "dBTC", value: Number(DAFIObj.USDValOfdBTC), fill: "#f8c624" },
      { name: "dETH", value: Number(DAFIObj.USDValOfdETH), fill: "#6b74b5" },
      { name: "dLINK", value: Number(DAFIObj.USDValOfdLINK), fill: "#57e3fd" },
      { name: "dAAVE", value: Number(DAFIObj.USDValOfdAAVE), fill: "#bf2071" },
    ];
    let finalChartData =
      Number(DAFIObj.USDValOfdBTC) > 0 ||
      Number(DAFIObj.USDValOfdETH) > 0 ||
      Number(DAFIObj.USDValOfdLINK) > 0 ||
      Number(DAFIObj.USDValOfdAAVE) > 0
        ? chartsAssets
        : [];
    data = {
      dAsset: Number(DAFIObj.totalAssetVal),
      ChartData: finalChartData,
    };
    wallets.push(walletObj);
    if (!isDefaultSelected) {
      isDefaultSelected = true;
      store.dispatch(SetSelectedWalletAction(walletObj));
    }
  }
  if (wallets.length <= 0) {
    throw new Error("Error while accessing accounts.");
  }
  store.dispatch(saveAssetsDataInUSD(data));
  store.dispatch(saveWalletsInfoAction(wallets));
};

// @ts-ignore
export const initMetamask = async (): Promise<Web3> => {
  //@ts-ignore
  const provider = await detectEthereumProvider();

  if (provider) {
    try {
      // @ts-ignore
      web3.setProvider(provider);
      // Request account access if needed
      // @ts-ignore
      // await provider.request('eth_requestAccounts')
      await provider.enable();
      // Subscriptions register
      //@ts-ignore
      provider.on("accountsChanged", async (accounts: []) => {
        // Reload to avoid MetaMask bug: "MetaMask - RPC Error: Internal JSON-RPC"
        window.location.reload();
      });
      //@ts-ignore
      provider.on("chainChanged", async (network: number) => {
        window.location.reload();
      });
      // localStorage.saveWalletConnected(web3Sources.Metamask);
      return web3;
    } catch (error) {
      // The user denied account access
    }
  } else {
    // @ts-ignore
    if (window.web3) {
      // @ts-ignore
      web3.setProvider(window.web3.currentProvider);
      return web3;
    } else {
      //localStorage.resetWalletConnected();
      store.dispatch(resetWalletsInfoAction());
      //  The user does not have metamask installed
    }
  }
};
export const initMEW = () => {
  // ethereum.send("eth_requestAccounts").then((accounts) => {
  //   console.log(`User's address is ${accounts[0]}`)
  // })
}
