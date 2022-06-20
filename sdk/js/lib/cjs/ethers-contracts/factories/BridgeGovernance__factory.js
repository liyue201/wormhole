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
exports.BridgeGovernance__factory = void 0;
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
                name: "oldContract",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newContract",
                type: "address",
            },
        ],
        name: "ContractUpgraded",
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
        inputs: [],
        name: "WETH",
        outputs: [
            {
                internalType: "contract IWETH",
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
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "outstandingBridged",
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
                internalType: "bytes",
                name: "encodedVM",
                type: "bytes",
            },
        ],
        name: "registerChain",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "encodedVM",
                type: "bytes",
            },
        ],
        name: "upgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "encoded",
                type: "bytes",
            },
        ],
        name: "parseRegisterChain",
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
                        name: "chainId",
                        type: "uint16",
                    },
                    {
                        internalType: "uint16",
                        name: "emitterChainID",
                        type: "uint16",
                    },
                    {
                        internalType: "bytes32",
                        name: "emitterAddress",
                        type: "bytes32",
                    },
                ],
                internalType: "struct BridgeStructs.RegisterChain",
                name: "chain",
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
                name: "encoded",
                type: "bytes",
            },
        ],
        name: "parseUpgrade",
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
                        name: "chainId",
                        type: "uint16",
                    },
                    {
                        internalType: "bytes32",
                        name: "newContract",
                        type: "bytes32",
                    },
                ],
                internalType: "struct BridgeStructs.UpgradeContract",
                name: "chain",
                type: "tuple",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50611485806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063a5799f93116100a2578063b172b22211610071578063b172b222146102f7578063b96c7e4d146102ff578063d60b347f14610328578063fbe3c2cd14610354578063fbeeacd91461036657600080fd5b8063a5799f931461027e578063aa4efa5b14610291578063ad5c4648146102b4578063ad66a5f1146102c557600080fd5b80632c3c02a4116100de5780632c3c02a41461021e5780632f3a3d5d1461024157806384acd1bb146102525780639a8a05921461026357600080fd5b806301f53255146101105780631a2be4da1461017b5780631ff1e286146101b75780632539464514610209575b600080fd5b61012361011e3660046110a2565b6103b3565b6040516101729190600060a0820190508251825260ff6020840151166020830152604083015161ffff808216604085015280606086015116606085015250506080830151608083015292915050565b60405180910390f35b6101a761018936600461105c565b6001600160a01b031660009081526009602052604090205460ff1690565b6040519015158152602001610172565b6101f16101c5366004611284565b61ffff91909116600090815260086020908152604080832093835292905220546001600160a01b031690565b6040516001600160a01b039091168152602001610172565b61021c6102173660046110a2565b6105a4565b005b6101a761022c36600461108a565b60009081526005602052604090205460ff1690565b6001546001600160a01b03166101f1565b6000546001600160a01b03166101f1565b60025461ffff165b60405161ffff9091168152602001610172565b61021c61028c3660046110a2565b61067b565b6101a761029f36600461108a565b60009081526006602052604090205460ff1690565b6004546001600160a01b03166101f1565b6102e96102d3366004611268565b61ffff166000908152600b602052604090205490565b604051908152602001610172565b6003546102e9565b6102e961030d36600461105c565b6001600160a01b03166000908152600a602052604090205490565b6101a761033636600461105c565b6001600160a01b031660009081526007602052604090205460ff1690565b60025462010000900461ffff1661026b565b6103796103743660046110a2565b6107d9565b60405161017291908151815260208083015160ff169082015260408083015161ffff16908201526060918201519181019190915260800190565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101829052906103e8838261099e565b82526103f56020826113b0565b82519091506a546f6b656e427269646765146104645760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e67206d6f64604482015262756c6560e81b60648201526084015b60405180910390fd5b61046e83826109fc565b60ff1660208301526104816001826113b0565b9050816020015160ff166001146104e65760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e672061637460448201526234b7b760e91b606482015260840161045b565b6104f08382610a58565b61ffff1660408301526105046002826113b0565b90506105108382610a58565b61ffff1660608301526105246002826113b0565b9050610530838261099e565b60808301526105406020826113b0565b90508083511461059e5760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e67206c656e6044820152620cee8d60eb1b606482015260840161045b565b50919050565b60008060006105b284610ab5565b9250925092508181906105d85760405162461bcd60e51b815260040161045b91906112f7565b506105fd8361014001516000908152600560205260409020805460ff19166001179055565b600061060c8460e001516107d9565b905061061b60025461ffff1690565b61ffff16816040015161ffff16146106665760405162461bcd60e51b815260206004820152600e60248201526d1ddc9bdb99c818da185a5b881a5960921b604482015260640161045b565b606081015161067490610cd4565b5050505050565b600080600061068984610ab5565b9250925092508181906106af5760405162461bcd60e51b815260040161045b91906112f7565b506106d48361014001516000908152600560205260409020805460ff19166001179055565b60006106e38460e001516103b3565b90506106f260025461ffff1690565b61ffff16816040015161ffff1614806107115750604081015161ffff16155b6107505760405162461bcd60e51b815260206004820152601060248201526f1a5b9d985b1a590818da185a5b881a5960821b604482015260640161045b565b606081015161ffff166000908152600b6020526040812054146107b55760405162461bcd60e51b815260206004820152601860248201527f636861696e20616c726561647920726567697374657265640000000000000000604482015260640161045b565b6106748160600151826080015161ffff9091166000908152600b6020526040902055565b604080516080810182526000808252602082018190529181018290526060810182905290610807838261099e565b82526108146020826113b0565b82519091506a546f6b656e427269646765146108805760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206d6044820152646f64756c6560d81b606482015260840161045b565b61088a83826109fc565b60ff16602083015261089d6001826113b0565b9050816020015160ff166002146109045760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206160448201526431ba34b7b760d91b606482015260840161045b565b61090e8382610a58565b61ffff1660408301526109226002826113b0565b905061092e838261099e565b606083015261093e6020826113b0565b90508083511461059e5760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206c6044820152640cadccee8d60db1b606482015260840161045b565b60006109ab8260206113b0565b835110156109f35760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b604482015260640161045b565b50016020015190565b6000610a098260016113b0565b83511015610a4f5760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b604482015260640161045b565b50016001015190565b6000610a658260026113b0565b83511015610aac5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b604482015260640161045b565b50016002015190565b604080516101608101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e082018190526101008201839052610120820152610140810191909152600060606000806000610b286000546001600160a01b031690565b6001600160a01b031663c0fd8bde886040518263ffffffff1660e01b8152600401610b5391906112f7565b60006040518083038186803b158015610b6b57600080fd5b505afa158015610b7f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610ba79190810190611116565b92509250925081610bbe5791945092509050610ccd565b60025462010000900461ffff1661ffff16836060015161ffff1614610c1a5750506040805180820190915260168152753bb937b7339033b7bb32b93730b731b29031b430b4b760511b6020820152909350600092509050610ccd565b600354836080015114610c6b57505060408051808201909152601981527f77726f6e6720676f7665726e616e636520636f6e7472616374000000000000006020820152909350600092509050610ccd565b61014083015160009081526005602052604090205460ff1615610cb25782600060405180606001604052806022815260200161142e60229139955095509550505050610ccd565b50506040805160208101909152600081529093506001925090505b9193909250565b6000610d077f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b9050610d1282610e01565b60408051600481526024810182526020810180516001600160e01b031663204a7f0760e21b179052905160009182916001600160a01b03861691610d55916112db565b600060405180830381855af49150503d8060008114610d90576040519150601f19603f3d011682016040523d82523d6000602084013e610d95565b606091505b5091509150818190610dba5760405162461bcd60e51b815260040161045b91906112f7565b50836001600160a01b0316836001600160a01b03167f2e4cc16c100f0b55e2df82ab0b1a7e294aa9cbd01b48fbaf622683fbc0507a4960405160405180910390a350505050565b610e0a81610e41565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b610ea55760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161045b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b600082601f830112610ef6578081fd5b8151602067ffffffffffffffff821115610f1257610f12611404565b610f20818360051b01611357565b80838252828201915082860187848660071b8901011115610f3f578586fd5b855b85811015610fa257608080838b031215610f59578788fd5b610f6161130a565b8351815286840151878201526040610f7a81860161104b565b908201526060610f8b85820161104b565b908201528552938501939190910190600101610f41565b5090979650505050505050565b80518015158114610fbf57600080fd5b919050565b600082601f830112610fd4578081fd5b8151610fe7610fe282611388565b611357565b818152846020838601011115610ffb578283fd5b61100c8260208301602087016113d4565b949350505050565b8051610fbf8161141a565b805163ffffffff81168114610fbf57600080fd5b805167ffffffffffffffff81168114610fbf57600080fd5b805160ff81168114610fbf57600080fd5b60006020828403121561106d578081fd5b81356001600160a01b0381168114611083578182fd5b9392505050565b60006020828403121561109b578081fd5b5035919050565b6000602082840312156110b3578081fd5b813567ffffffffffffffff8111156110c9578182fd5b8201601f810184136110d9578182fd5b80356110e7610fe282611388565b8181528560208385010111156110fb578384fd5b81602084016020830137908101602001929092525092915050565b60008060006060848603121561112a578182fd5b835167ffffffffffffffff80821115611141578384fd5b908501906101608288031215611155578384fd5b61115d611333565b6111668361104b565b81526111746020840161101f565b60208201526111856040840161101f565b604082015261119660608401611014565b6060820152608083015160808201526111b160a08401611033565b60a08201526111c260c0840161104b565b60c082015260e0830151828111156111d8578586fd5b6111e489828601610fc4565b60e0830152506101006111f881850161101f565b90820152610120838101518381111561120f578687fd5b61121b8a828701610ee6565b91830191909152506101408381015190820152945061123c60208701610faf565b93506040860151915080821115611251578283fd5b5061125e86828701610fc4565b9150509250925092565b600060208284031215611279578081fd5b81356110838161141a565b60008060408385031215611296578182fd5b82356112a18161141a565b946020939093013593505050565b600081518084526112c78160208601602086016113d4565b601f01601f19169290920160200192915050565b600082516112ed8184602087016113d4565b9190910192915050565b60208152600061108360208301846112af565b6040516080810167ffffffffffffffff8111828210171561132d5761132d611404565b60405290565b604051610160810167ffffffffffffffff8111828210171561132d5761132d611404565b604051601f8201601f1916810167ffffffffffffffff8111828210171561138057611380611404565b604052919050565b600067ffffffffffffffff8211156113a2576113a2611404565b50601f01601f191660200190565b600082198211156113cf57634e487b7160e01b81526011600452602481fd5b500190565b60005b838110156113ef5781810151838201526020016113d7565b838111156113fe576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b61ffff8116811461142a57600080fd5b5056fe676f7665726e616e636520616374696f6e20616c726561647920636f6e73756d6564a2646970667358221220b763b380df6f6cc856de217231eef75babd1e73f54b1cfefeede0c4f4fbcbfca64736f6c63430008040033";
var BridgeGovernance__factory = /** @class */ (function (_super) {
    __extends(BridgeGovernance__factory, _super);
    function BridgeGovernance__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    BridgeGovernance__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    BridgeGovernance__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    BridgeGovernance__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    BridgeGovernance__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    BridgeGovernance__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    BridgeGovernance__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    BridgeGovernance__factory.bytecode = _bytecode;
    BridgeGovernance__factory.abi = _abi;
    return BridgeGovernance__factory;
}(ethers_1.ContractFactory));
exports.BridgeGovernance__factory = BridgeGovernance__factory;
