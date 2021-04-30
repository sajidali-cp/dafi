import Web3 from "web3";
import { store } from "../App";
import { ERC20Contracts } from "../contracts/constants/contracts";
import { ContractLookup } from "../contracts/contracts.lookup";
 import {ethers} from "ethers"
 import {Decimal} from "decimal.js"

let web3: Web3 = new Web3();

export const dTokenCreation = async () => {
  web3 = store.getState().wallet.web3;
  const DAFI = ContractLookup.find(
      (contract) => contract.contractName === ERC20Contracts.DAFIPLATFORM
    );
  if (web3.currentProvider) {
      if (DAFI) {
          const contract = new web3.eth.Contract(DAFI.contractAbi, DAFI.contractAddress, {});
          try {
              const res = await contract.methods.getdTokenCreation().call();
              // var balanceInWei =  ConvertFromE(web3.utils.fromWei(balance, 'ether'));
              return res;
          } catch (error) {
              return false;
          }
      }
  } else {
      return false
  }
}
// @ts-ignore
export const getdToken = async (
    _type:any,
    _balance:any,
    gassFee:any
) => {
  web3 = store.getState().wallet.web3;
  let walletInfo = store.getState().wallet;

  let activeAddress = walletInfo.selected.address;

  if (web3.currentProvider) {
   try {
    const contractInfo = ContractLookup.find(
      (c) => c.contractName == ERC20Contracts.DAFIPLATFORM
    );
    if (contractInfo) {
      const contract = new web3.eth.Contract(
        contractInfo.contractAbi,
        contractInfo.contractAddress,
        { from: activeAddress }
      );
      

var block = await web3.eth.getBlock("latest");
var gasLimit = Math.ceil(block.gasLimit/block.transactions.length);

      //amount = amount * Math.pow(10, contractInfo.decimal);
     let gassPrice = gassFee * Math.pow(10, 9);
     let gassLimit=gasLimit;
     let temp=web3.utils.fromWei(String(gassPrice * gassLimit), 'ether')
     let finalDeduction=Number(temp)
     var _balanceInWei;
    //  if(_type == "dETH"){
    //   var a = new Decimal(_balance);
    //   var b = new Decimal(0.0015);
    //   var c = new Decimal(finalDeduction)
    //   var res = a.minus(b).minus(c);
    //   var toConvert = res.toString();
    //   _balanceInWei = Web3.utils.toWei(_balance, 'ether');
    //  }else{
    //    _balanceInWei = Web3.utils.toWei(String(_balance),'ether');
    //  }
     _balanceInWei = Web3.utils.toWei(String(_balance),'ether');
      const amount = web3.utils.toWei("5", 'ether');
      const tx = await web3.eth.sendTransaction({
      from: activeAddress,
      to: contractInfo.contractAddress,
      gasPrice:gassPrice,
      //gas:gassLimit,
      value: amount as unknown as string,
      data: contract.methods.getdToken(_type,_balanceInWei).encodeABI()
  })

      // @ts-ignore
      // const tx = await contract.methods
      //   .getdToken(_type,_balanceInWei)
      //   .send({ gasPrice: gasPrice });
      return tx;
    }
   } catch (error) {
   }
  } else return null;
};
