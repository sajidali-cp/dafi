import Web3 from "web3";
import { SyntheticCategories } from "../../contracts/constants/synthetic.enum";

export interface Wallet {
  address: string;
  dLINKBalance: number;
  ETHBalance: number;
  dBTCBalance: number;
  dETHBalance: number;
  dAAVEBalance: number;
  DAFIBalance: number;
  isConnected: boolean;
}
export interface ChartData {}

export interface Balance {
  name: string;
  short: string;
  token: string;
  rate: number;
  change24h: number;
  amount: number;
  cryptoBalance: number;
  icon: string;
}

export interface WalletState {
  web3: Web3;
  selected: Wallet;
  stackedBYN: number;
  unstacked: number;
  totalByn: number;
  source: string; //Metamask etc
  wallets: Wallet[]; // Reset balance is new source
  balances: Balance[]; //Current source default wallet balances
  isConnected: boolean;
  loadingBalance: boolean;
  currentCRatio: any;
  targetCRatio: any;
  chartData: object;
  isDarkTheme: boolean;
}
