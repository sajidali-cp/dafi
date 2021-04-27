import { AbiItem } from "web3-utils";

export const ChainLinkAbi: AbiItem | AbiItem[] = [
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [
      {
        "type": "string",
        "name": ""
      }
    ],
    "name": "name",
    "inputs": [],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [
      {
        "type": "bool",
        "name": ""
      }
    ],
    "name": "approve",
    "inputs": [
      {
        "type": "address",
        "name": "_spender"
      },
      {
        "type": "uint256",
        "name": "_value"
      }
    ],
    "constant": false
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [
      {
        "type": "uint256",
        "name": ""
      }
    ],
    "name": "totalSupply",
    "inputs": [],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [
      {
        "type": "bool",
        "name": ""
      }
    ],
    "name": "transferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "_from"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_value"
      }
    ],
    "constant": false
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [
      {
        "type": "uint8",
        "name": ""
      }
    ],
    "name": "decimals",
    "inputs": [],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [
      {
        "type": "bool",
        "name": "success"
      }
    ],
    "name": "transferAndCall",
    "inputs": [
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_value"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ],
    "constant": false
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [
      {
        "type": "bool",
        "name": "success"
      }
    ],
    "name": "decreaseApproval",
    "inputs": [
      {
        "type": "address",
        "name": "_spender"
      },
      {
        "type": "uint256",
        "name": "_subtractedValue"
      }
    ],
    "constant": false
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [
      {
        "type": "uint256",
        "name": "balance"
      }
    ],
    "name": "balanceOf",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [
      {
        "type": "string",
        "name": ""
      }
    ],
    "name": "symbol",
    "inputs": [],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [
      {
        "type": "bool",
        "name": "success"
      }
    ],
    "name": "transfer",
    "inputs": [
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_value"
      }
    ],
    "constant": false
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [
      {
        "type": "bool",
        "name": "success"
      }
    ],
    "name": "increaseApproval",
    "inputs": [
      {
        "type": "address",
        "name": "_spender"
      },
      {
        "type": "uint256",
        "name": "_addedValue"
      }
    ],
    "constant": false
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [
      {
        "type": "uint256",
        "name": "remaining"
      }
    ],
    "name": "allowance",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_spender"
      }
    ],
    "constant": true
  },
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "payable": false,
    "inputs": []
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value",
        "indexed": false
      },
      {
        "type": "bytes",
        "name": "data",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value",
        "indexed": false
      }
    ],
    "anonymous": false
  }
]
