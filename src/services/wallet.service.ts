import Web3 from 'web3';
import { ERC20Contracts } from "../contracts/constants/contracts";
import { store } from '../App';
import { Balance } from '../store/types/WalletState';
import { ContractLookup, IContractLookup } from '../contracts/contracts.lookup';
import { SyntheticCategories } from '../contracts/constants/synthetic.enum';
import { saveBalanceInfoAction } from '../store/actions/WalletActions';
import { getCrypto, getForex, getSynthetixPrices } from './axios.service';
// import { BYNTokenValue } from './swap.service';
import moment from "moment"
import ConvertFromE from '../components/_common/ConvertFromE';
import { fetchSynthRateUpdates, fetchSynthVolumeInUSD } from './rates/rates';
import { debug } from 'console';


let cryptoRates: any, forexRates: any, synthetixRates: any, activeAddress: any;
let web3: Web3 = new Web3();

// var curDate = new Date(Date.now());
// var today = curDate.getFullYear() + "-" + (curDate.getMonth() + 1) + "-" + curDate.getDate();
// var yesterday = curDate.getFullYear() + "-" + (curDate.getMonth() + 1) + "-" + (curDate.getDate() - 1);
var today=moment().unix() * 1000;
var day1=moment().subtract(1, "days").unix() * 1000;
var day2=moment().subtract(2, "days").unix() * 1000;
var day3=moment().subtract(3, "days").unix() * 1000;
var day4=moment().subtract(4, "days").unix() * 1000;
var day5=moment().subtract(5, "days").unix() * 1000;
console.log(today,"<<<<TODAY>>>>")

// const loadRates = async () => {
//     var cryptoCoinsIds = ContractLookup.reduce(function (filtered: any, option: any) {
//         if (option.syntheticCategory === SyntheticCategories.CRYPTOCURRENCY && !option.isFixedRate && !option.isNativeToken && option.isSyntheticAsset) {
//             filtered.push(option.marketRateApiID);
//         }
//         return filtered;
//     }, []).join(",");

//     var forexCoinsIds = ContractLookup.reduce(function (filtered: any, option: any) {
//         if (option.syntheticCategory === SyntheticCategories.FOREX && !option.isFixedRate && !option.isNativeToken && option.isSyntheticAsset) {
//             filtered.push(option.marketRateApiID);
//         }
//         return filtered;
//     }, []).join(",");
    
//     [cryptoRates, forexRates, synthetixRates] = await Promise.all([
//         getCrypto(cryptoCoinsIds),
//         getForex({
//             today: today, yesterday: yesterday, symbols: forexCoinsIds
//         }),
//         getSynthetixPrices()
//     ])
// }




const getPriceObject = async (asset: IContractLookup,activeAddress:any): Promise<Balance> => {
    let balance: Balance = {
        name: asset.fullName,
        short: asset.contractName,
        rate: 0,
        change24h: 0,
        cryptoBalance: 0,
        amount:0,
        icon: `/${asset.icon}`
    }
   try {
    const contractInfo = ContractLookup.find(
        ( contract) => contract.contractName === asset.contractName
      );
      let bal;
      if(asset.contractName === "ETH"){
        bal = await getETHBalance(activeAddress);
      }
      else{
        bal = await getERC20Balance(contractInfo, activeAddress);
      }
      debugger
const obj:any=await dTokenDetails(asset.bytesCode);
console.log(obj)

let currentPrice=Web3.utils.fromWei(obj._currentPrice, 'ether');
let oldPrice=Web3.utils.fromWei(obj._oldPrice, 'ether');
let change=getChange(Number(oldPrice),Number(currentPrice))

let amount = Number(currentPrice) * bal;
balance.rate= Number(currentPrice);
balance.change24h= change;
balance.cryptoBalance= bal;
balance.amount=amount;
console.log(balance)
    return balance;
   } catch (error) {
    return balance;
   }
}
const getChange=(closePrev:number, closeNow:number) => {
    
    let val=(((closeNow - closePrev) / closePrev)*100)
    if(closePrev === 0){
        return 0
    }
    return val;
  }
export const updateBalances = async () => {
    let walletInfo = store.getState().wallet;
    activeAddress = walletInfo.selected.address;
    const assets = ContractLookup.filter(c => !c.isSyntheticAsset);
    const noPriceFeed= assets.filter(c => c.contractName != "PriceFeed");
    let balances: Balance[] = [];
    for (let i = 0; i < noPriceFeed.length; i++) {
        balances.push(await getPriceObject(noPriceFeed[i],activeAddress));
    }
    store.dispatch(saveBalanceInfoAction(balances));
    
}

export const getETHBalance = async (address: string): Promise<number> => {
    web3 = store.getState().wallet.web3;
    if (web3.currentProvider) {
        try {
            var balanceInWei = await web3.eth.getBalance(address)
            
            balanceInWei =  ConvertFromE(Web3.utils.fromWei(balanceInWei, 'ether'))
            return Number(balanceInWei);
        } catch (error) {
            return 0;
        }
    } else {
        return 0
    }
}

// @ts-ignore
export const getERC20Balance = async (contractInfo: any, address: string): Promise<number> => {
    web3 = store.getState().wallet.web3;
    if (web3.currentProvider) {
        if (contractInfo) {
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo.contractAddress, {});
            try {
                const balance = await contract.methods.balanceOf(address).call();
                
                var balanceInWei =  ConvertFromE(web3.utils.fromWei(balance, 'ether'));
                return Number(balanceInWei);
                // let bal: number = Number(balanceInWei);// / Math.pow(10, contractInfo.decimal)
                // return bal;
            } catch (error) {
                return 0;
            }
        }
    } else {
        return 0
    }
}


// @ts-ignore
export const getDAFI20Balance = async (contractInfo: any, address: string): Promise<number> => {
    web3 = store.getState().wallet.web3;
    const chartsAssets:any={
        DFYToken: 0,
        USDValOfdBTC: 0,
        USDValOfdETH: 0,
        USDValOfdLINK: 0,
        USDValOfdSNX:0,
        totalAssetVal: 0
    }
    if (web3.currentProvider) {
        if (contractInfo) {
            const contract = new web3.eth.Contract(contractInfo.contractAbi, contractInfo.contractAddress, {});
            try {
                debugger
                const obj = await contract.methods.getDAFIToken(address).call();
                if(obj){
                    chartsAssets.DFYToken=  ConvertFromE(web3.utils.fromWei(obj.DFYToken, 'ether'));
                    chartsAssets.USDValOfdBTC=  ConvertFromE(web3.utils.fromWei(obj.USDValOfdBTC, 'ether'));
                    chartsAssets.USDValOfdETH=  ConvertFromE(web3.utils.fromWei(obj.USDValOfdETH, 'ether'));
                    chartsAssets.USDValOfdLINK=  ConvertFromE(web3.utils.fromWei(obj.USDValOfdLINK, 'ether'));
                    chartsAssets.totalAssetVal=  ConvertFromE(web3.utils.fromWei(obj.totalAssetVal, 'ether'));
                    chartsAssets.USDValOfdSNX=  ConvertFromE(web3.utils.fromWei(obj.USDValOfdSNX, 'ether'));
                }
                return chartsAssets;
            } catch (error) {
                console.log(error)
                return 0;
            }
        }
    } else {
        return 0
    }
}

  // @ts-ignore
export const dTokenDetails = async (bytesCode: string): Promise<number> => {
    web3 = store.getState().wallet.web3;
    const DAFI = ContractLookup.find(
        (contract) => contract.contractName === ERC20Contracts.DAFIPLATFORM
      );
    if (web3.currentProvider) {
        if (DAFI) {
            const contract = new web3.eth.Contract(DAFI.contractAbi, DAFI.contractAddress, {});
            try {
                const balance = await contract.methods.getdTokenDetails(bytesCode).call();
                // var balanceInWei =  ConvertFromE(web3.utils.fromWei(balance, 'ether'));
                return balance;
            } catch (error) {
                console.log(error)
                return 0;
            }
        }
    } else {
        return 0
    }
}

//@ts-ignore
export const getTokenSupplyHistory = async (short: string): Promise<Array> => {
    debugger
    web3 = store.getState().wallet.web3;
    const DAFIPLATFORM = ContractLookup.find(
        (contract) => contract.contractName === ERC20Contracts.DAFIPLATFORM
      );
      const shortObj = ContractLookup.find(
        (contract) => contract.contractName === short
      );
    if (web3.currentProvider) {
        if (DAFIPLATFORM) {
            const contract = new web3.eth.Contract(DAFIPLATFORM.contractAbi, DAFIPLATFORM.contractAddress, {});
            try {
                const balance = await contract.methods.getTokenSupplyHistory(shortObj?.bytesCode).call();
                // var balanceInWei =  ConvertFromE(web3.utils.fromWei(balance, 'ether'));
                const rebaseHistory=[
                    {
                        date:day1,
                        price:Number(web3.utils.fromWei(balance._day1, 'ether'))
                    },
                    {
                        date:day2,
                        price:Number(web3.utils.fromWei(balance._day2, 'ether'))
                    },
                    {
                        date:day3,
                        price:Number(web3.utils.fromWei(balance._day3, 'ether'))
                    },
                    {
                        date:day4,
                        price:Number(web3.utils.fromWei(balance._day4, 'ether'))
                    },
                    {
                        date:day5,
                        price:Number(web3.utils.fromWei(balance._day5, 'ether'))
                    },
                ]
                return rebaseHistory;
            } catch (error) {
                console.log(error)
                return [{ date:day1, price:0},{ date:day2,price:0 }, { date:day3,price:0 }, { date:day4,price:0 },{ date:day5, price:0} ]
            }
        }
    } else {
        return [{ date:day1, price:0},{ date:day2,price:0 }, { date:day3,price:0 }, { date:day4,price:0 },{ date:day5, price:0} ]
    }
}

//@ts-ignore
export const totalSupply = async (short: string): Promise<object> => {
    debugger
    let asset:any;
    switch (short){
        case "wBTC":
            asset="dBTC";
            break;
        case "ETH":
            asset="dETH";
            break;
        case "LINK":
           asset="dLINK";
            break; 
        case "SNX":
           asset="dSNX";
            break; 
                
    }
   const date= moment().format();
   console.log(date)
    web3 = store.getState().wallet.web3;
    const shortObj = ContractLookup.find(
        (contract) => contract.contractName === asset
      );
      
    if (web3.currentProvider) {
        if (shortObj) {
            const contract = new web3.eth.Contract(shortObj.contractAbi, shortObj.contractAddress, {});
            try {
                const balance = await contract.methods.totalSupply().call();
                const rebaseHistory={date:today, price:Number(web3.utils.fromWei(balance, 'ether'))}
                // var balanceInWei =  ConvertFromE(web3.utils.fromWei(balance, 'ether'));
                return rebaseHistory;
            } catch (error) {
                console.log(error)
                return {date:today, price:0}
            }
        }
    } else {
        return {date:today, price:0}
    }
}







