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
        contractAddress: "0xf251374fc3d121a41f925680fb38a347edca4a7b",
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
        contractAddress: "0x392dc60e02efbfca586fbfc1cca797015de23955",
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
        contractAddress: "0x79fe8edd6b4cea8ad7c49842ce261f1a3c113195",
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
        contractAddress: "0x71a6610212f34fa28c445984e161c3a8a27fb0fa",
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
        contractAddress: "0xc6e3c2ddf90cb148c11e54031d2fbbc8fd35e68f",
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
        contractAddress: "0x9c2401607b8d5bed41908143c0fd4fa7ea49ab07",
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
        contractAddress: "0xe578dc110f9fe9733a535c40dca1133bb61e79ab",
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
        contractAddress: "0x5C18680556781B885814B87887580e385ac6f3Be",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "wBTC",
        decimal:18,
        bytesCode:"0x64425443",
        contractAbi: ChainLinkAbi,
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
        contractAddress: "0x5C18680556781B885814B87887580e385ac6f3Be",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "AAVE",
        decimal:18,
        bytesCode:"0x6441415645",
        contractAbi: ChainLinkAbi,
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
        contractAddress: "0x5C18680556781B885814B87887580e385ac6f3Be",
        marketRateApiID: "",
        oracleRateID: "",
        fullName: "Ethereum",
        decimal:18,
        bytesCode:"0x64455448",
        contractAbi: ChainLinkAbi,
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
        contractAddress: "0x7407b97ff2c611eccd1221b58331920882bfc21b",
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