"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTBridgeSetup__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "implementation",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "chainId",
                type: "uint16",
            },
            {
                internalType: "address",
                name: "wormhole",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "governanceChainId",
                type: "uint16",
            },
            {
                internalType: "bytes32",
                name: "governanceContract",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "tokenImplementation",
                type: "address",
            },
        ],
        name: "setup",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061026b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80637e89644614610030575b600080fd5b61004361003e3660046101c9565b610045565b005b60028054600080546001600160a01b0388166001600160a01b031990911617905561ffff858116620100000263ffffffff19909216908816171790556003829055600180546001600160a01b0319166001600160a01b0383161790556100aa866100b2565b505050505050565b6100bb816100f2565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b61015a5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840160405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b03811681146101b257600080fd5b919050565b803561ffff811681146101b257600080fd5b60008060008060008060c087890312156101e1578182fd5b6101ea8761019b565b95506101f8602088016101b7565b94506102066040880161019b565b9350610214606088016101b7565b92506080870135915061022960a0880161019b565b9050929550929550929556fea264697066735822122021de7cd7e5d24878771fcb9e93d7c7adbe6fccc81efd4b2a8efe437a53ac7da464736f6c63430008040033";
var NFTBridgeSetup__factory = /** @class */ (function (_super) {
    __extends(NFTBridgeSetup__factory, _super);
    function NFTBridgeSetup__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    NFTBridgeSetup__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    NFTBridgeSetup__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    NFTBridgeSetup__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    NFTBridgeSetup__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    NFTBridgeSetup__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    NFTBridgeSetup__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    NFTBridgeSetup__factory.bytecode = _bytecode;
    NFTBridgeSetup__factory.abi = _abi;
    return NFTBridgeSetup__factory;
}(ethers_1.ContractFactory));
exports.NFTBridgeSetup__factory = NFTBridgeSetup__factory;
