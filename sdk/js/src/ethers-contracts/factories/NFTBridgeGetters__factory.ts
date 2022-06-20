/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NFTBridgeGetters,
  NFTBridgeGettersInterface,
} from "../NFTBridgeGetters";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "governanceActionIsConsumed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "isTransferCompleted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wormhole",
    outputs: [
      {
        internalType: "contract IWormhole",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governanceChainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governanceContract",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "tokenChainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "tokenAddress",
        type: "bytes32",
      },
    ],
    name: "wrappedAsset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16",
      },
    ],
    name: "bridgeContracts",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "isWrappedAsset",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "splCache",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "name",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "symbol",
            type: "bytes32",
          },
        ],
        internalType: "struct NFTBridgeStorage.SPLCache",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610384806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80639a8a0592116100715780639a8a0592146101f8578063aa4efa5b14610213578063ad66a5f114610236578063b172b22214610268578063d60b347f14610270578063fbe3c2cd1461029c57600080fd5b80631a2be4da146100b95780631ff1e286146100fa5780632c3c02a41461014c5780632f3a3d5d1461016f5780633ca648261461018057806384acd1bb146101e7575b600080fd5b6100e56100c73660046102c5565b6001600160a01b031660009081526008602052604090205460ff1690565b60405190151581526020015b60405180910390f35b610134610108366004610325565b61ffff91909116600090815260076020908152604080832093835292905220546001600160a01b031690565b6040516001600160a01b0390911681526020016100f1565b6100e561015a3660046102f3565b60009081526004602052604090205460ff1690565b6001546001600160a01b0316610134565b6101cc61018e3660046102f3565b6040805180820190915260008082526020820152506000908152600a6020908152604091829020825180840190935280548352600101549082015290565b604080518251815260209283015192810192909252016100f1565b6000546001600160a01b0316610134565b60025461ffff165b60405161ffff90911681526020016100f1565b6100e56102213660046102f3565b60009081526005602052604090205460ff1690565b61025a61024436600461030b565b61ffff1660009081526009602052604090205490565b6040519081526020016100f1565b60035461025a565b6100e561027e3660046102c5565b6001600160a01b031660009081526006602052604090205460ff1690565b60025462010000900461ffff16610200565b803561ffff811681146102c057600080fd5b919050565b6000602082840312156102d6578081fd5b81356001600160a01b03811681146102ec578182fd5b9392505050565b600060208284031215610304578081fd5b5035919050565b60006020828403121561031c578081fd5b6102ec826102ae565b60008060408385031215610337578081fd5b610340836102ae565b94602093909301359350505056fea2646970667358221220789609cd96af25b9423bf1c2427050d2b1f1c85fab321184e656c599674589d064736f6c63430008040033";

export class NFTBridgeGetters__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTBridgeGetters> {
    return super.deploy(overrides || {}) as Promise<NFTBridgeGetters>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFTBridgeGetters {
    return super.attach(address) as NFTBridgeGetters;
  }
  connect(signer: Signer): NFTBridgeGetters__factory {
    return super.connect(signer) as NFTBridgeGetters__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTBridgeGettersInterface {
    return new utils.Interface(_abi) as NFTBridgeGettersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTBridgeGetters {
    return new Contract(address, _abi, signerOrProvider) as NFTBridgeGetters;
  }
}