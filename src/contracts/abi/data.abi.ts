import { AbiItem } from "web3-utils";

export const dataAbi: AbiItem | AbiItem[] = [
  {
    inputs: [],
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
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "DAFIRewardDetail",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardValue",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "given",
        type: "bool",
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
        name: "",
        type: "address",
      },
    ],
    name: "User",
    outputs: [
      {
        internalType: "address",
        name: "userAddress",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "demandFactorHistory",
    outputs: [
      {
        internalType: "uint256",
        name: "day1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "day2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "day3",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time3",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "day4",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time4",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "day5",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time5",
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
    name: "getDemandFactorHistory",
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
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_type",
        type: "bytes32",
      },
    ],
    name: "isTokenMinted",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "platformUsers",
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
    name: "reduction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
    name: "reward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setDAFIContractAddress",
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
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_type",
        type: "bytes32",
      },
    ],
    name: "setIfTokenMinted",
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
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_type",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_supply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "updateDemandFactorHistory",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "userCount",
    outputs: [
      {
        internalType: "uint256",
        name: "_count",
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
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "userDAFIReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "userReward",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "userRewardGiven",
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
];
