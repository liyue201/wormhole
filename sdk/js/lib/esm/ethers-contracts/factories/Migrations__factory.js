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
import { utils, Contract, ContractFactory } from "ethers";
var _abi = [
    {
        inputs: [],
        name: "last_completed_migration",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
                internalType: "uint256",
                name: "completed",
                type: "uint256",
            },
        ],
        name: "setCompleted",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x6080604052600080546001600160a01b0319163317905534801561002257600080fd5b5061016f806100326000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063445df0ac146100465780638da5cb5b14610062578063fdacd5761461008d575b600080fd5b61004f60015481565b6040519081526020015b60405180910390f35b600054610075906001600160a01b031681565b6040516001600160a01b039091168152602001610059565b6100a061009b366004610121565b6100a2565b005b6000546001600160a01b0316331461011c5760405162461bcd60e51b815260206004820152603360248201527f546869732066756e6374696f6e206973207265737472696374656420746f207460448201527234329031b7b73a3930b1ba13b99037bbb732b960691b606482015260840160405180910390fd5b600155565b600060208284031215610132578081fd5b503591905056fea264697066735822122098760e95ecee9757125787c83deb04126a6b1815d1813d8a5f58be99167b44c664736f6c63430008040033";
var Migrations__factory = /** @class */ (function (_super) {
    __extends(Migrations__factory, _super);
    function Migrations__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    Migrations__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Migrations__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Migrations__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Migrations__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Migrations__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    Migrations__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    Migrations__factory.bytecode = _bytecode;
    Migrations__factory.abi = _abi;
    return Migrations__factory;
}(ContractFactory));
export { Migrations__factory };
