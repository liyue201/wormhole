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
        inputs: [
            {
                internalType: "bytes",
                name: "encodedVm",
                type: "bytes",
            },
        ],
        name: "completeTransferAndSwap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenBridge",
                type: "address",
            },
        ],
        name: "setup",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610b48806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301c3ac6b1461003b57806366d3820314610050575b600080fd5b61004e61004936600461088d565b610080565b005b61004e61005e366004610835565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600061009a608483516100939190610a87565b839061047b565b905060006100b6606484516100af9190610a87565b84906104d9565b905060006100cc6000546001600160a01b031690565b604051630ff8f14360e11b815261ffff84166004820152602481018590526001600160a01b039190911690631ff1e2869060440160206040518083038186803b15801561011857600080fd5b505afa15801561012c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101509190610851565b6040516370a0823160e01b815230600482015290915081906000906001600160a01b038316906370a082319060240160206040518083038186803b15801561019757600080fd5b505afa1580156101ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cf9190610979565b905060006101e56000546001600160a01b031690565b6001600160a01b03166357a3a13e88336040518363ffffffff1660e01b81526004016102129291906109d9565b600060405180830381600087803b15801561022c57600080fd5b505af1158015610240573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102689190810190610906565b905060006102768282610536565b90508060ff166003146102c75760405162461bcd60e51b8152602060048201526014602482015273696e76616c6964207061796c6f6164207479706560601b60448201526064015b60405180910390fd5b60006102d483602161047b565b905080881461033e5760405162461bcd60e51b815260206004820152603060248201527f41646472657373207061727365642066726f6d2056414120616e64207061796c60448201526f0dec2c840c8de40dcdee840dac2e8c6d60831b60648201526084016102be565b600061034b8460416104d9565b90508061ffff168861ffff16146103bd5760405162461bcd60e51b815260206004820152603060248201527f436861696e4964207061727365642066726f6d2056414120616e64207061796c60448201526f0dec2c840c8de40dcdee840dac2e8c6d60831b60648201526084016102be565b6040516370a0823160e01b81523060048201526000906001600160a01b038816906370a082319060240160206040518083038186803b1580156103ff57600080fd5b505afa158015610413573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104379190610979565b905060006104458783610a87565b9050600061045487608561047b565b90508061046b6001600160a01b038b168285610592565b5050505050505050505050505050565b6000610488826020610a6f565b835110156104d05760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b60448201526064016102be565b50016020015190565b60006104e6826002610a6f565b8351101561052d5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b60448201526064016102be565b50016002015190565b6000610543826001610a6f565b835110156105895760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b60448201526064016102be565b50016001015190565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526105e49084906105e9565b505050565b600061063e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166106bb9092919063ffffffff16565b8051909150156105e4578080602001905181019061065c919061086d565b6105e45760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102be565b60606106ca84846000856106d4565b90505b9392505050565b6060824710156107355760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102be565b843b6107835760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102be565b600080866001600160a01b0316858760405161079f91906109bd565b60006040518083038185875af1925050503d80600081146107dc576040519150601f19603f3d011682016040523d82523d6000602084013e6107e1565b606091505b50915091506107f18282866107fc565b979650505050505050565b6060831561080b5750816106cd565b82511561081b5782518084602001fd5b8160405162461bcd60e51b81526004016102be9190610a03565b600060208284031215610846578081fd5b81356106cd81610afa565b600060208284031215610862578081fd5b81516106cd81610afa565b60006020828403121561087e578081fd5b815180151581146106cd578182fd5b60006020828403121561089e578081fd5b813567ffffffffffffffff8111156108b4578182fd5b8201601f810184136108c4578182fd5b80356108d76108d282610a47565b610a16565b8181528560208385010111156108eb578384fd5b81602084016020830137908101602001929092525092915050565b600060208284031215610917578081fd5b815167ffffffffffffffff81111561092d578182fd5b8201601f8101841361093d578182fd5b805161094b6108d282610a47565b81815285602083850101111561095f578384fd5b610970826020830160208601610a9e565b95945050505050565b60006020828403121561098a578081fd5b5051919050565b600081518084526109a9816020860160208601610a9e565b601f01601f19169290920160200192915050565b600082516109cf818460208701610a9e565b9190910192915050565b6040815260006109ec6040830185610991565b905060018060a01b03831660208301529392505050565b6020815260006106cd6020830184610991565b604051601f8201601f1916810167ffffffffffffffff81118282101715610a3f57610a3f610ae4565b604052919050565b600067ffffffffffffffff821115610a6157610a61610ae4565b50601f01601f191660200190565b60008219821115610a8257610a82610ace565b500190565b600082821015610a9957610a99610ace565b500390565b60005b83811015610ab9578181015183820152602001610aa1565b83811115610ac8576000848401525b50505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610b0f57600080fd5b5056fea2646970667358221220748d85c16edb95f0b397129e55da4f656837059facc6fa444df6e936ddbf314264736f6c63430008040033";
var MockTokenBridgeIntegration__factory = /** @class */ (function (_super) {
    __extends(MockTokenBridgeIntegration__factory, _super);
    function MockTokenBridgeIntegration__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    MockTokenBridgeIntegration__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockTokenBridgeIntegration__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockTokenBridgeIntegration__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockTokenBridgeIntegration__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockTokenBridgeIntegration__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    MockTokenBridgeIntegration__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    MockTokenBridgeIntegration__factory.bytecode = _bytecode;
    MockTokenBridgeIntegration__factory.abi = _abi;
    return MockTokenBridgeIntegration__factory;
}(ContractFactory));
export { MockTokenBridgeIntegration__factory };