import { AbiItem } from "web3-utils";

export const DafiPlatformAbi: AbiItem | AbiItem[] = [
  {
    inputs: [
      {
        internalType: "contract IDAFI",
        name: "_DAFIContract",
        type: "address",
      },
      {
        internalType: "contract IData",
        name: "_dataContract",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "contract IoffTokens",
        name: "_mainBTC",
        type: "address",
      },
      {
        internalType: "contract IoffTokens",
        name: "_mainETH",
        type: "address",
      },
      {
        internalType: "contract IoffTokens",
        name: "_mainAAVE",
        type: "address",
      },
      {
        internalType: "contract IoffTokens",
        name: "_mainLINK",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IDAFI",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IDAFI",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "DAFIContractChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DAFIContract",
    outputs: [
      {
        internalType: "contract IDAFI",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "dAAVE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "dBTC",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "dETH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "dLINK",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "dTokenCreation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "dataContract",
    outputs: [
      {
        internalType: "contract IData",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "disabledTokenCreation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "enabledTokenCreation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "getDAFIToken",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAssetVal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "USDValOfdLINK",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "USDValOfdBTC",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "USDValOfdETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "USDValOfdAAVE",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "DAFIToken",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "_type",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "getTokenSupplyHistory",
    outputs: [
      {
        internalType: "uint256",
        name: "_day1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_day2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_day3",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_day4",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_day5",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_type",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    name: "getdToken",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "_type",
        type: "bytes32",
      },
    ],
    name: "getdTokenDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "_currentPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_demandFactor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_oldPrice",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "mainTokenAddresses",
    outputs: [
      {
        internalType: "contract IoffTokens",
        name: "tokenAddress",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "rebase",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract IDAFI",
        name: "_DAFIContract",
        type: "address",
      },
    ],
    name: "setDAFIContract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_type",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_baseLinePrice",
        type: "uint256",
      },
      {
        internalType: "contract IToken",
        name: "_address",
        type: "address",
      },
      {
        internalType: "contract IToken",
        name: "_mainAddress",
        type: "address",
      },
    ],
    name: "setdToken",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "string",
        name: "source",
        type: "string",
      },
    ],
    name: "stringToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "result",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
