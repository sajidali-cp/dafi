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
import { dSNXAbi } from "./abi/dsnx.abi";
import { dataAbi } from "./abi/data.abi";
import { SNXAbi } from "./abi/snx.abi";
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
        contractAddress: "0x058a906209CAA1fA295bEb0dD3148c7230203aE0",
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
        contractAddress: "0x3EA9aa8CbE6304B1D94cCc5cDd15Ee382F787C71",
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
        contractAddress: "0x25e3de9f8033FB526F56c5C4704aAB3a3e833930",
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
        contractAddress: "0x679f3Fc29b4213BeA2287b967442e70EA1dF05a8",
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
        contractAddress: "0xF2306DaF0618148B047ceA220bfCF6B265cCa679",
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
        contractName: ERC20Contracts.dSNX,
        contractAddress: "0xd69fC7F48Ad1FFd0D9B8775889a1ED61555BA7e1",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "AAVE",
        decimal:18,
        bytesCode:"",
        contractAbi: dSNXAbi,
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
        contractAddress: "0x8cac4ad8b146608192E686b98710403F0A363016",
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
        contractAddress: "0x2298110655a46664f61d6127B39d60cC73313CB6",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "wBitcoin",
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
        contractName: ERC20Contracts.SNX,
        // main net
        // contractAddress: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
        contractAddress: "0x1e652F42EC0a2a56fd9D37E58c72018cFe5b60c5",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "Synthetix",
        decimal:18,
        bytesCode:"0x64534e58",
        contractAbi: SNXAbi,
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
        contractAddress: "",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "Ethereum",
        decimal:18,
        bytesCode:"0x64455448",
        contractAbi: wBTCAbi,
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
        contractAddress: "0x5C18680556781B885814B87887580e385ac6f3Be",
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
        contractAddress: "0x926786816eEA10e7aeDDcF7240E59a2F25bd7378",
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