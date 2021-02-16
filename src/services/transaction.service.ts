import Web3 from "web3";
import { store } from "../App";
import { ERC20Contracts } from "../contracts/constants/contracts";
import { ContractLookup } from "../contracts/contracts.lookup";
 import {ethers} from "ethers"

let web3: Web3 = new Web3();

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
      
//       web3.eth.getGasPrice()
// .then((gas)=>console.log({gas}));

var block = await web3.eth.getBlock("latest");
var gasLimit = Math.ceil(block.gasLimit/block.transactions.length);
console.log(gasLimit)

      //amount = amount * Math.pow(10, contractInfo.decimal);
     let gassPrice = gassFee * Math.pow(10, 9);
     let gassLimit=gasLimit;
     let temp=web3.utils.fromWei(String(gassPrice * gassLimit), 'ether')
     let finalDeduction=Number(temp)
     var _balanceInWei;
     if(_type == "dETH"){
      _balanceInWei = Web3.utils.toWei(String(_balance-0.0015-finalDeduction), 'ether');
     }else{
       _balanceInWei = Web3.utils.toWei(String(_balance),'ether');
       console.log(_balanceInWei)
     }
      const amount = web3.utils.toWei("0.0015", 'ether');
      const tx = await web3.eth.sendTransaction({
      from: activeAddress,
      to: contractInfo.contractAddress,
      gasPrice:gassPrice,
      gas:gassLimit,
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
     console.log(error)
   }
  } else return null;
};
