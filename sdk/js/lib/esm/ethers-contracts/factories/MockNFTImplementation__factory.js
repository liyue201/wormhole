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
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
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
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
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
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
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
        inputs: [
            {
                internalType: "address",
                name: "owner_",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
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
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "mint",
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
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
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
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
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
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
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
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "testNewImplementationActive",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506116dd806100206000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80636352211e116100ad578063a22cb46511610071578063a22cb46514610273578063b88d4fde14610286578063c87b56dd14610299578063d3fc9864146102ac578063e985e9c5146102bf57600080fd5b80636352211e1461021357806370a08231146102265780638da5cb5b1461023957806395d89b411461024a5780639a8a05921461025257600080fd5b80631f8cdb2b116100f45780631f8cdb2b146101c157806323b872dd146101c85780633d6c043b146101db57806342842e0e146101ed57806342966c681461020057600080fd5b806301ffc9a71461013157806303e728581461015957806306fdde031461016e578063081812fc14610183578063095ea7b3146101ae575b600080fd5b61014461013f3660046113db565b6102fb565b60405190151581526020015b60405180910390f35b61016c610167366004611413565b61034d565b005b610176610418565b6040516101509190611545565b6101966101913660046114a5565b6104ac565b6040516001600160a01b039091168152602001610150565b61016c6101bc36600461135d565b610541565b6001610144565b61016c6101d636600461126f565b610657565b6008545b604051908152602001610150565b61016c6101fb36600461126f565b610688565b61016c61020e3660046114a5565b6106a3565b6101966102213660046114a5565b610703565b6101df610234366004611223565b61077a565b6007546001600160a01b0316610196565b610176610801565b600754600160a81b900461ffff1660405161ffff9091168152602001610150565b61016c610281366004611323565b610813565b61016c6102943660046112aa565b6108d8565b6101766102a73660046114a5565b610910565b61016c6102ba366004611386565b610a2d565b6101446102cd36600461123d565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061032c57506001600160e01b03198216635b5e139f60e01b145b8061034757506301ffc9a760e01b6001600160e01b03198316145b92915050565b600754600160a01b900460ff16156103a25760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b60448201526064015b60405180910390fd5b6007805460ff60a01b1916600160a01b17905584516103c89060009060208801906110d2565b5083516103dc9060019060208701906110d2565b506007805461ffff909316600160a81b02600162ffff0160a01b03199093166001600160a01b0390941693909317919091179091556008555050565b60606000800180546104299061162a565b80601f01602080910402602001604051908101604052809291908181526020018280546104559061162a565b80156104a25780601f10610477576101008083540402835291602001916104a2565b820191906000526020600020905b81548152906001019060200180831161048557829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105255760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610399565b506000908152600460205260409020546001600160a01b031690565b600061054c82610703565b9050806001600160a01b0316836001600160a01b031614156105ba5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610399565b336001600160a01b03821614806105d657506105d681336102cd565b6106485760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610399565b6106528383610a8c565b505050565b6106613382610afa565b61067d5760405162461bcd60e51b8152600401610399906115aa565b610652838383610bf1565b610652838383604051806020016040528060008152506108d8565b6007546001600160a01b031633146106f75760405162461bcd60e51b815260206004820152601760248201527631b0b63632b91034b9903737ba103a34329037bbb732b960491b6044820152606401610399565b61070081610d91565b50565b6000818152600260205260408120546001600160a01b0316806103475760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610399565b60006001600160a01b0382166107e55760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610399565b506001600160a01b031660009081526003602052604090205490565b6060600060010180546104299061162a565b6001600160a01b03821633141561086c5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610399565b3360008181526006602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108e23383610afa565b6108fe5760405162461bcd60e51b8152600401610399906115aa565b61090a84848484610e2c565b50505050565b6000818152600260205260409020546060906001600160a01b031661098f5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610399565b600082815260056020526040902080546109a89061162a565b80601f01602080910402602001604051908101604052809291908181526020018280546109d49061162a565b8015610a215780601f106109f657610100808354040283529160200191610a21565b820191906000526020600020905b815481529060010190602001808311610a0457829003601f168201915b50505050509050919050565b6007546001600160a01b03163314610a815760405162461bcd60e51b815260206004820152601760248201527631b0b63632b91034b9903737ba103a34329037bbb732b960491b6044820152606401610399565b610652838383610e5f565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610ac182610703565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610b735760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610399565b6000610b7e83610703565b9050806001600160a01b0316846001600160a01b03161480610bb95750836001600160a01b0316610bae846104ac565b6001600160a01b0316145b80610be957506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610c0482610703565b6001600160a01b031614610c6c5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610399565b6001600160a01b038216610cce5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610399565b610cd9600082610a8c565b6001600160a01b0383166000908152600360205260408120805460019290610d02908490611613565b90915550506001600160a01b0382166000908152600360205260408120805460019290610d309084906115fb565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000610d9c82610703565b9050610da9600083610a8c565b6001600160a01b0381166000908152600360205260408120805460019290610dd2908490611613565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b610e37848484610bf1565b610e4384848484610fc5565b61090a5760405162461bcd60e51b815260040161039990611558565b6001600160a01b038316610eb55760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610399565b6000828152600260205260409020546001600160a01b031615610f1a5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610399565b6001600160a01b0383166000908152600360205260408120805460019290610f439084906115fb565b9091555050600082815260026020908152604080832080546001600160a01b0319166001600160a01b038816179055600582529091208251610f87928401906110d2565b5060405182906001600160a01b038516906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4505050565b60006001600160a01b0384163b156110c757604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611009903390899088908890600401611508565b602060405180830381600087803b15801561102357600080fd5b505af1925050508015611053575060408051601f3d908101601f19168201909252611050918101906113f7565b60015b6110ad573d808015611081576040519150601f19603f3d011682016040523d82523d6000602084013e611086565b606091505b5080516110a55760405162461bcd60e51b815260040161039990611558565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610be9565b506001949350505050565b8280546110de9061162a565b90600052602060002090601f0160209004810192826111005760008555611146565b82601f1061111957805160ff1916838001178555611146565b82800160010185558215611146579182015b8281111561114657825182559160200191906001019061112b565b50611152929150611156565b5090565b5b808211156111525760008155600101611157565b600067ffffffffffffffff808411156111865761118661167b565b604051601f8501601f19908116603f011681019082821181831017156111ae576111ae61167b565b816040528093508581528686860111156111c757600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b03811681146111f857600080fd5b919050565b600082601f83011261120d578081fd5b61121c8383356020850161116b565b9392505050565b600060208284031215611234578081fd5b61121c826111e1565b6000806040838503121561124f578081fd5b611258836111e1565b9150611266602084016111e1565b90509250929050565b600080600060608486031215611283578081fd5b61128c846111e1565b925061129a602085016111e1565b9150604084013590509250925092565b600080600080608085870312156112bf578081fd5b6112c8856111e1565b93506112d6602086016111e1565b925060408501359150606085013567ffffffffffffffff8111156112f8578182fd5b8501601f81018713611308578182fd5b6113178782356020840161116b565b91505092959194509250565b60008060408385031215611335578182fd5b61133e836111e1565b915060208301358015158114611352578182fd5b809150509250929050565b6000806040838503121561136f578182fd5b611378836111e1565b946020939093013593505050565b60008060006060848603121561139a578283fd5b6113a3846111e1565b925060208401359150604084013567ffffffffffffffff8111156113c5578182fd5b6113d1868287016111fd565b9150509250925092565b6000602082840312156113ec578081fd5b813561121c81611691565b600060208284031215611408578081fd5b815161121c81611691565b600080600080600060a0868803121561142a578081fd5b853567ffffffffffffffff80821115611441578283fd5b61144d89838a016111fd565b96506020880135915080821115611462578283fd5b5061146f888289016111fd565b94505061147e604087016111e1565b9250606086013561ffff81168114611494578182fd5b949793965091946080013592915050565b6000602082840312156114b6578081fd5b5035919050565b60008151808452815b818110156114e2576020818501810151868301820152016114c6565b818111156114f35782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061153b908301846114bd565b9695505050505050565b60208152600061121c60208301846114bd565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000821982111561160e5761160e611665565b500190565b60008282101561162557611625611665565b500390565b600181811c9082168061163e57607f821691505b6020821081141561165f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461070057600080fdfea26469706673582212209bc1b3e44cf80d503fc3a157fedadfc9088fbfc4a92b7ae9a83343e015ac94ad64736f6c63430008040033";
var MockNFTImplementation__factory = /** @class */ (function (_super) {
    __extends(MockNFTImplementation__factory, _super);
    function MockNFTImplementation__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    MockNFTImplementation__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockNFTImplementation__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockNFTImplementation__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockNFTImplementation__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockNFTImplementation__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    MockNFTImplementation__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    MockNFTImplementation__factory.bytecode = _bytecode;
    MockNFTImplementation__factory.abi = _abi;
    return MockNFTImplementation__factory;
}(ContractFactory));
export { MockNFTImplementation__factory };
