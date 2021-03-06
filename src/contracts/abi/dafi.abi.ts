import { AbiItem } from "web3-utils";

export const DafiAbi: AbiItem | AbiItem[] = [
  {
    inputs: [
      {
        internalType: "contract IPriceConsumerV3",
        name: "_price",
        type: "address",
      },
      {
        internalType: "contract IData",
        name: "_dataContract",
        type: "address",
      },
      {
        internalType: "contract IToken",
        name: "_dBTC",
        type: "address",
      },
      {
        internalType: "contract IToken",
        name: "_dETH",
        type: "address",
      },
      {
        internalType: "contract IToken",
        name: "_dLINK",
        type: "address",
      },
      {
        internalType: "contract IToken",
        name: "_dAAVE",
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
    name: "DAFIPlatformContract",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "dTokenDetails",
    outputs: [
      {
        internalType: "bool",
        name: "minted",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "baseLinePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oldPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "demandFactor",
        type: "uint256",
      },
      {
        internalType: "contract IToken",
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
        name: "totalAssetVal",
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
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "getdToken",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    constant: true,
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "contract IPriceConsumerV3",
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
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setDAFIPlatformContract",
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
];
