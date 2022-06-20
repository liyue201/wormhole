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
exports.FeeToken__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "decimals_",
                type: "uint8",
            },
            {
                internalType: "uint64",
                name: "sequence_",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "owner_",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "chainId_",
                type: "uint16",
            },
            {
                internalType: "bytes32",
                name: "nativeContract_",
                type: "bytes32",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
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
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
        name: "nativeContract",
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
                name: "account_",
                type: "address",
            },
        ],
        name: "balanceOf",
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
        inputs: [
            {
                internalType: "address",
                name: "recipient_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount_",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner_",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender_",
                type: "address",
            },
        ],
        name: "allowance",
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
        inputs: [
            {
                internalType: "address",
                name: "spender_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount_",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender_",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount_",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue_",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue_",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount_",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount_",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
            {
                internalType: "uint64",
                name: "sequence_",
                type: "uint64",
            },
        ],
        name: "updateDetails",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061124a806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063a18cd7c611610071578063a18cd7c614610246578063a457c2d714610259578063a9059cbb1461026c578063c71f46151461027f578063dd62ed3e1461029257600080fd5b80638da5cb5b146101ef57806395d89b411461020a5780639a8a0592146102125780639dc29fac1461023357600080fd5b8063313ce567116100e9578063313ce5671461018157806339509351146101965780633d6c043b146101a957806340c10f19146101b157806370a08231146101c657600080fd5b806306fdde031461011b578063095ea7b31461013957806318160ddd1461015c57806323b872dd1461016e575b600080fd5b6101236102cb565b60405161013091906110b5565b60405180910390f35b61014c610147366004610ea7565b6102f4565b6040519015158152602001610130565b6003545b604051908152602001610130565b61014c61017c366004610e6c565b61030a565b60045460405160ff9091168152602001610130565b61014c6101a4366004610ea7565b6103c0565b600854610160565b6101c46101bf366004610ea7565b6103f7565b005b6101606101d4366004610e19565b6001600160a01b031660009081526005602052604090205490565b6007546040516001600160a01b039091168152602001610130565b61012361042f565b600754600160a81b900461ffff1660405161ffff9091168152602001610130565b6101c4610241366004610ea7565b6104c4565b6101c4610254366004610ed0565b6104f8565b61014c610267366004610ea7565b6105ce565b61014c61027a366004610ea7565b610669565b6101c461028d366004610f41565b610676565b6101606102a0366004610e3a565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b6040516060906102e090600090602001610fff565b604051602081830303815290604052905090565b6000610301338484610775565b50600192915050565b600061031784848461089a565b6001600160a01b0384166000908152600660209081526040808320338452909152902054828110156103a15760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103b585336103b08685611196565b610775565b506001949350505050565b3360008181526006602090815260408083206001600160a01b038716845290915281205490916103019185906103b090869061113f565b6007546001600160a01b031633146104215760405162461bcd60e51b815260040161039890611108565b61042b8282610a94565b5050565b606060006001018054610441906111ad565b80601f016020809104026020016040519081016040528092919081815260200182805461046d906111ad565b80156104ba5780601f1061048f576101008083540402835291602001916104ba565b820191906000526020600020905b81548152906001019060200180831161049d57829003601f168201915b5050505050905090565b6007546001600160a01b031633146104ee5760405162461bcd60e51b815260040161039890611108565b61042b8282610b76565b6007546001600160a01b031633146105225760405162461bcd60e51b815260040161039890611108565b60025467ffffffffffffffff8083169116106105805760405162461bcd60e51b815260206004820152601e60248201527f63757272656e74206d6574616461746120697320757020746f206461746500006044820152606401610398565b8251610593906000906020860190610cc5565b5081516105a7906001906020850190610cc5565b506002805467ffffffffffffffff191667ffffffffffffffff929092169190911790555050565b3360009081526006602090815260408083206001600160a01b0386168452909152812054828110156106505760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610398565b61065f33856103b08685611196565b5060019392505050565b600061030133848461089a565b600754600160a01b900460ff16156106c65760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b6044820152606401610398565b6007805460ff60a01b1916600160a01b17905586516106ec9060009060208a0190610cc5565b508551610700906001906020890190610cc5565b506004805460ff90961660ff19909616959095179094556002805467ffffffffffffffff90941667ffffffffffffffff19909416939093179092556007805461ffff909316600160a81b02600162ffff0160a01b03199093166001600160a01b03909216919091179190911790556008555050565b6001600160a01b0383166107d75760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610398565b6001600160a01b0382166108385760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610398565b6001600160a01b0383811660008181526006602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166108fe5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610398565b6001600160a01b0382166109605760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610398565b6001600160a01b038316600090815260056020526040902054818110156109d85760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610398565b6109e28282611196565b6001600160a01b038516600090815260056020526040902055600a610a08836009611177565b610a129190611157565b6001600160a01b03841660009081526005602052604081208054909190610a3a90849061113f565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a8691815260200190565b60405180910390a350505050565b6001600160a01b038216610aea5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610398565b8060006003016000828254610aff919061113f565b90915550506001600160a01b03821660009081526005602052604081208054839290610b2c90849061113f565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610bd65760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610398565b6001600160a01b03821660009081526005602052604090205481811015610c4a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610398565b610c548282611196565b6001600160a01b03841660009081526005602052604081209190915560038054849290610c82908490611196565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161088d565b828054610cd1906111ad565b90600052602060002090601f016020900481019282610cf35760008555610d39565b82601f10610d0c57805160ff1916838001178555610d39565b82800160010185558215610d39579182015b82811115610d39578251825591602001919060010190610d1e565b50610d45929150610d49565b5090565b5b80821115610d455760008155600101610d4a565b80356001600160a01b0381168114610d7557600080fd5b919050565b600082601f830112610d8a578081fd5b813567ffffffffffffffff80821115610da557610da56111fe565b604051601f8301601f19908116603f01168101908282118183101715610dcd57610dcd6111fe565b81604052838152866020858801011115610de5578485fd5b8360208701602083013792830160200193909352509392505050565b803567ffffffffffffffff81168114610d7557600080fd5b600060208284031215610e2a578081fd5b610e3382610d5e565b9392505050565b60008060408385031215610e4c578081fd5b610e5583610d5e565b9150610e6360208401610d5e565b90509250929050565b600080600060608486031215610e80578081fd5b610e8984610d5e565b9250610e9760208501610d5e565b9150604084013590509250925092565b60008060408385031215610eb9578182fd5b610ec283610d5e565b946020939093013593505050565b600080600060608486031215610ee4578283fd5b833567ffffffffffffffff80821115610efb578485fd5b610f0787838801610d7a565b94506020860135915080821115610f1c578384fd5b50610f2986828701610d7a565b925050610f3860408501610e01565b90509250925092565b600080600080600080600060e0888a031215610f5b578283fd5b873567ffffffffffffffff80821115610f72578485fd5b610f7e8b838c01610d7a565b985060208a0135915080821115610f93578485fd5b50610fa08a828b01610d7a565b965050604088013560ff81168114610fb6578384fd5b9450610fc460608901610e01565b9350610fd260808901610d5e565b925060a088013561ffff81168114610fe8578283fd5b8092505060c0880135905092959891949750929550565b600080835482600182811c91508083168061101b57607f831692505b602080841082141561103b57634e487b7160e01b87526022600452602487fd5b81801561104f57600181146110605761108c565b60ff1986168952848901965061108c565b60008a815260209020885b868110156110845781548b82015290850190830161106b565b505084890196505b5050505050506110ad816a2028576f726d686f6c652960a81b8152600b0190565b949350505050565b6000602080835283518082850152825b818110156110e1578581018301518582016040015282016110c5565b818111156110f25783604083870101525b50601f01601f1916929092016040019392505050565b60208082526017908201527f63616c6c6572206973206e6f7420746865206f776e6572000000000000000000604082015260600190565b60008219821115611152576111526111e8565b500190565b60008261117257634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611191576111916111e8565b500290565b6000828210156111a8576111a86111e8565b500390565b600181811c908216806111c157607f821691505b602082108114156111e257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220972cfa23d668d839192022b6e31b2ae0b46ad2fb0215ccb73e88ed7166d93da564736f6c63430008040033";
var FeeToken__factory = /** @class */ (function (_super) {
    __extends(FeeToken__factory, _super);
    function FeeToken__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    FeeToken__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    FeeToken__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    FeeToken__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    FeeToken__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    FeeToken__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    FeeToken__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    FeeToken__factory.bytecode = _bytecode;
    FeeToken__factory.abi = _abi;
    return FeeToken__factory;
}(ethers_1.ContractFactory));
exports.FeeToken__factory = FeeToken__factory;
