// import { ETHbAbi } from "./abi/ethb.abi";
import { SyntheticCategories } from "./constants/synthetic.enum";
import { ERC20Contracts } from "./constants/contracts";
import * as icons from "../utils/coinIcons";
import { DafiAbi } from "./abi/dafi.abi";
import { dBTCAbi } from "./abi/dbtc.abi";
import { dETHAbi } from "./abi/deth.abi";
import { dLINKAbi } from "./abi/dlink.abi";
import { PriceFeedAbi } from "./abi/priceFeed";
import { wBTCAbi } from "./abi/wBTC.abi";
import { ChainLinkAbi } from "./abi/chainLink.abi";
import { DafiPlatformAbi } from "./abi/dafiPlatform.abi";
import { dAAVEAbi } from "./abi/dAAVE.abi";
import { dataAbi } from "./abi/data.abi";
import { AaveAbi } from "./abi/aave.abi";
import { wETHAbi } from "./abi/wETH.abi";
// import { USDbAbi } from "./abi/Usdb.abi";

export interface IContractLookup {
    contractName: string,
    contractAddress:string,
    marketRateApiID: string,
    oracleRateID:string,
    fullName: string,
    contractAbi: any,
    decimal:number,
    bytesCode:string,
    isSyntheticAsset:boolean,
    isNativeToken: boolean,
    isMainToken: boolean, // only for BYN,
    isFixedRate:boolean,
    fixedRateValue:number,
    syntheticCategory: any, 
    icon:string
}


export const ContractLookup:IContractLookup[] = [
    {
        contractName: ERC20Contracts.DAFI,
        contractAddress: "0x74bdfB924834983E6E778F518eB34a94D5a59451",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "dafi",
        decimal:18,
        bytesCode:"",
        contractAbi: DafiAbi,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconETH
    },
    {
        contractName: ERC20Contracts.DAFIPLATFORM,
        contractAddress: "0x5491e4A4CB0b0a9FEdb0d45277aF72f18E3158D1",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "dafiPlatform",
        decimal:18,
        bytesCode:"",
        contractAbi: DafiPlatformAbi,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconETH
    },
    {
        contractName: ERC20Contracts.dBTC,
        contractAddress: "0x897F44430Cc692CC3C4a21946D148657b93487f9",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "Bitcoin",
        contractAbi: dBTCAbi,
        decimal:18,
        bytesCode:"",
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY, 
        icon:icons.iconwBTC
    }, 
    {
        contractName: ERC20Contracts.dETH,
        contractAddress: "0xB7A3632Eb09BB9744bd4D404FB9d2d149C4F8D5b",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "Ethereum",
        decimal:18,
        bytesCode:"",
        contractAbi: dETHAbi,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconETH
    },
    {
        contractName: ERC20Contracts.dLINK,
        contractAddress: "0x80AAA1493AeFEc2E6b5D01A9e913d3330815cF6D",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "Link Token",
        decimal:18,
        bytesCode:"",
        contractAbi: dLINKAbi,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconETH
    },
    {
        contractName: ERC20Contracts.dAAVE,
        contractAddress: "0x50690DD0A3C6E5e2d1186D1C462b78d4a3921095",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "AAVE",
        decimal:18,
        bytesCode:"",
        contractAbi: dAAVEAbi,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconETH
    },
    {
        contractName: ERC20Contracts.data,
        contractAddress: "0x47e27755bfa98D5Fa6D74b0fAF5057A7124bF0C7",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "Data",
        decimal:18,
        bytesCode:"",
        contractAbi: dataAbi,
        isSyntheticAsset:true,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconETH
    },
    {
        contractName: ERC20Contracts.wBTC,
        // contractAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        contractAddress: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "wBTC",
        decimal:18,
        bytesCode:"0x64425443",
        contractAbi: wBTCAbi,
        isSyntheticAsset:false,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconwBTC
    },
    {
        contractName: ERC20Contracts.AAVE,
        // main net
        // contractAddress: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
        contractAddress: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "AAVE",
        decimal:18,
        bytesCode:"0x6441415645",
        contractAbi: AaveAbi,
        isSyntheticAsset:false,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconSxn
    },
    {
        contractName: ERC20Contracts.ETH,
        contractAddress: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "Ethereum",
        decimal:18,
        bytesCode:"0x64455448",
        contractAbi: wETHAbi,
        isSyntheticAsset:false,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconETH
    },
    {
        contractName: ERC20Contracts.ChainLINK,
        // contractAddress: "0x01BE23585060835E02B77ef475b0Cc51aA1e0709",
        contractAddress: "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "CHAINLINK",
        decimal:18,
        bytesCode:"0x644c494e4b",
        contractAbi: ChainLinkAbi,
        isSyntheticAsset:false,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconLINK
    },
    {
        contractName: ERC20Contracts.PRICE_FEED,
        contractAddress: "0x3513BF29FaE96f4Bb3095deff61bB4B86BD58eFe",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "beyondExProx",
        decimal:18,
        bytesCode:"",
        contractAbi: PriceFeedAbi,
        isSyntheticAsset:false,
        isNativeToken: false,
        isMainToken: false, // only for BYN,
        isFixedRate:false,
        fixedRateValue:0,
        syntheticCategory: SyntheticCategories.CRYPTOCURRENCY,
        icon:icons.iconETH
    },
]