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
exports.GovernanceStructs__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes",
                name: "encodedUpgrade",
                type: "bytes",
            },
        ],
        name: "parseContractUpgrade",
        outputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "module",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint8",
                        name: "action",
                        type: "uint8",
                    },
                    {
                        internalType: "uint16",
                        name: "chain",
                        type: "uint16",
                    },
                    {
                        internalType: "address",
                        name: "newContract",
                        type: "address",
                    },
                ],
                internalType: "struct GovernanceStructs.ContractUpgrade",
                name: "cu",
                type: "tuple",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "encodedUpgrade",
                type: "bytes",
            },
        ],
        name: "parseGuardianSetUpgrade",
        outputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "module",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint8",
                        name: "action",
                        type: "uint8",
                    },
                    {
                        internalType: "uint16",
                        name: "chain",
                        type: "uint16",
                    },
                    {
                        components: [
                            {
                                internalType: "address[]",
                                name: "keys",
                                type: "address[]",
                            },
                            {
                                internalType: "uint32",
                                name: "expirationTime",
                                type: "uint32",
                            },
                        ],
                        internalType: "struct Structs.GuardianSet",
                        name: "newGuardianSet",
                        type: "tuple",
                    },
                    {
                        internalType: "uint32",
                        name: "newGuardianSetIndex",
                        type: "uint32",
                    },
                ],
                internalType: "struct GovernanceStructs.GuardianSetUpgrade",
                name: "gsu",
                type: "tuple",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "encodedSetMessageFee",
                type: "bytes",
            },
        ],
        name: "parseSetMessageFee",
        outputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "module",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint8",
                        name: "action",
                        type: "uint8",
                    },
                    {
                        internalType: "uint16",
                        name: "chain",
                        type: "uint16",
                    },
                    {
                        internalType: "uint256",
                        name: "messageFee",
                        type: "uint256",
                    },
                ],
                internalType: "struct GovernanceStructs.SetMessageFee",
                name: "smf",
                type: "tuple",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "encodedTransferFees",
                type: "bytes",
            },
        ],
        name: "parseTransferFees",
        outputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "module",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint8",
                        name: "action",
                        type: "uint8",
                    },
                    {
                        internalType: "uint16",
                        name: "chain",
                        type: "uint16",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "recipient",
                        type: "bytes32",
                    },
                ],
                internalType: "struct GovernanceStructs.TransferFees",
                name: "tf",
                type: "tuple",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610bed806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630319e59c1461005157806304ca84cf146100b65780634fdc60fa146100d6578063515f32471461012c575b600080fd5b61006461005f3660046109fb565b610179565b6040516100ad9190600060a0820190508251825260ff602084015116602083015261ffff6040840151166040830152606083015160608301526080830151608083015292915050565b60405180910390f35b6100c96100c43660046109fb565b6102d4565b6040516100ad9190610aa5565b6100e96100e43660046109fb565b610508565b6040516100ad91908151815260208083015160ff169082015260408083015161ffff16908201526060918201516001600160a01b03169181019190915260800190565b61013f61013a3660046109fb565b610644565b6040516100ad91908151815260208083015160ff169082015260408083015161ffff16908201526060918201519181019190915260800190565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101829052906101ae8382610773565b82526101bb602082610b58565b90506101c783826107d1565b60ff1660208301526101da600182610b58565b9050816020015160ff1660041461022f5760405162461bcd60e51b8152602060048201526014602482015273696e76616c6964205472616e736665724665657360601b60448201526064015b60405180910390fd5b610239838261082d565b61ffff16604083015261024d600282610b58565b9050610259838261088a565b6060830152610269602082610b58565b90506102758382610773565b6080830152610285602082610b58565b9050808351146102ce5760405162461bcd60e51b8152602060048201526014602482015273696e76616c6964205472616e736665724665657360601b6044820152606401610226565b50919050565b6102dc6109a1565b60006102e88382610773565b82526102f5602082610b58565b905061030183826107d1565b60ff166020830152610314600182610b58565b9050816020015160ff1660021461036d5760405162461bcd60e51b815260206004820152601a60248201527f696e76616c696420477561726469616e536574557067726164650000000000006044820152606401610226565b610377838261082d565b61ffff16604083015261038b600282610b58565b905061039783826108df565b63ffffffff1660808301526103ad600482610b58565b905060006103bb84836107d1565b90506103c8600183610b58565b915060405180604001604052808260ff1667ffffffffffffffff8111156103ff57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610428578160200160208202803683370190505b5081526000602090910181905260608501919091525b8160ff168110156104b057610453858461093c565b60608501515180518390811061047957634e487b7160e01b600052603260045260246000fd5b6001600160a01b039092166020928302919091019091015261049c601484610b58565b9250806104a881610b70565b91505061043e565b50818451146105015760405162461bcd60e51b815260206004820152601a60248201527f696e76616c696420477561726469616e536574557067726164650000000000006044820152606401610226565b5050919050565b6040805160808101825260008082526020820181905291810182905260608101829052906105368382610773565b8252610543602082610b58565b905061054f83826107d1565b60ff166020830152610562600182610b58565b9050816020015160ff166001146105b55760405162461bcd60e51b8152602060048201526017602482015276696e76616c696420436f6e74726163745570677261646560481b6044820152606401610226565b6105bf838261082d565b61ffff1660408301526105d3600282610b58565b90506105df8382610773565b6001600160a01b031660608301526105f8602082610b58565b9050808351146102ce5760405162461bcd60e51b8152602060048201526017602482015276696e76616c696420436f6e74726163745570677261646560481b6044820152606401610226565b6040805160808101825260008082526020820181905291810182905260608101829052906106728382610773565b825261067f602082610b58565b905061068b83826107d1565b60ff16602083015261069e600182610b58565b9050816020015160ff166003146106ef5760405162461bcd60e51b8152602060048201526015602482015274696e76616c6964205365744d65737361676546656560581b6044820152606401610226565b6106f9838261082d565b61ffff16604083015261070d600282610b58565b9050610719838261088a565b6060830152610729602082610b58565b9050808351146102ce5760405162461bcd60e51b8152602060048201526015602482015274696e76616c6964205365744d65737361676546656560581b6044820152606401610226565b6000610780826020610b58565b835110156107c85760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606401610226565b50016020015190565b60006107de826001610b58565b835110156108245760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606401610226565b50016001015190565b600061083a826002610b58565b835110156108815760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b6044820152606401610226565b50016002015190565b6000610897826020610b58565b835110156107c85760405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606401610226565b60006108ec826004610b58565b835110156109335760405162461bcd60e51b8152602060048201526014602482015273746f55696e7433325f6f75744f66426f756e647360601b6044820152606401610226565b50016004015190565b6000610949826014610b58565b835110156109915760405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b6044820152606401610226565b500160200151600160601b900490565b6040518060a0016040528060008019168152602001600060ff168152602001600061ffff1681526020016109ee604051806040016040528060608152602001600063ffffffff1681525090565b8152600060209091015290565b600060208284031215610a0c578081fd5b813567ffffffffffffffff80821115610a23578283fd5b818401915084601f830112610a36578283fd5b813581811115610a4857610a48610ba1565b604051601f8201601f19908116603f01168101908382118183101715610a7057610a70610ba1565b81604052828152876020848701011115610a88578586fd5b826020860160208301379182016020019490945295945050505050565b6000602080835283518184015260ff8185015116604084015261ffff6040850151166060840152606084015160a0608085015261010084018151604060c08701528181518084526101208801915085830193508692505b80831015610b255783516001600160a01b03168252928501926001929092019190850190610afc565b509383015163ffffffff1660e0870152608087015193610b4d60a088018663ffffffff169052565b979650505050505050565b60008219821115610b6b57610b6b610b8b565b500190565b6000600019821415610b8457610b84610b8b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212201c8e0605dbdab86b10423b09d3692868a1ba6d3f2c8301afa931bc9a77d0bd9764736f6c63430008040033";
var GovernanceStructs__factory = /** @class */ (function (_super) {
    __extends(GovernanceStructs__factory, _super);
    function GovernanceStructs__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    GovernanceStructs__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    GovernanceStructs__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    GovernanceStructs__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    GovernanceStructs__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    GovernanceStructs__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    GovernanceStructs__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    GovernanceStructs__factory.bytecode = _bytecode;
    GovernanceStructs__factory.abi = _abi;
    return GovernanceStructs__factory;
}(ethers_1.ContractFactory));
exports.GovernanceStructs__factory = GovernanceStructs__factory;
