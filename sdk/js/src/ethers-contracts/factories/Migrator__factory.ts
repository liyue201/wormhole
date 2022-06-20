/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Migrator, MigratorInterface } from "../Migrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_fromAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toAsset",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "account",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
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
    inputs: [],
    name: "fromAsset",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fromDecimals",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
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
    name: "toAsset",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "toDecimals",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620014f8380380620014f88339810160408190526200003491620002a6565b604080518082018252601481527f546f6b656e204d6967726174696f6e20506f6f6c00000000000000000000000060208083019182528351808501909452600b84526a04d69677261746f722d4c560ac1b9084015281519192916200009c91600391620001e3565b508051620000b2906004906020840190620001e3565b5050600580546001600160a01b038086166001600160a01b0319928316811790935560068054918616919092161790556040805163313ce56760e01b8152905191925063313ce567916004808301926020929190829003018186803b1580156200011b57600080fd5b505afa15801562000130573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001569190620002dd565b60ff16600781905550806001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200019957600080fd5b505afa158015620001ae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001d49190620002dd565b60ff1660085550620003449050565b828054620001f19062000307565b90600052602060002090601f01602090048101928262000215576000855562000260565b82601f106200023057805160ff191683800117855562000260565b8280016001018555821562000260579182015b828111156200026057825182559160200191906001019062000243565b506200026e92915062000272565b5090565b5b808211156200026e576000815560010162000273565b80516001600160a01b0381168114620002a157600080fd5b919050565b60008060408385031215620002b9578182fd5b620002c48362000289565b9150620002d46020840162000289565b90509250929050565b600060208284031215620002ef578081fd5b815160ff8116811462000300578182fd5b9392505050565b600181811c908216806200031c57607f821691505b602082108114156200033e57634e487b7160e01b600052602260045260246000fd5b50919050565b6111a480620003546000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80634cc82215116100ad57806395d89b411161007157806395d89b4114610262578063a457c2d71461026a578063a9059cbb1461027d578063dd62ed3e14610290578063f1354c08146102c957600080fd5b80634cc82215146101e95780634d92626a146101fc57806370a082311461020557806386e898431461022e57806392e404111461025957600080fd5b806323b872dd116100f457806323b872dd1461018e578063313ce567146101a1578063379607f5146101b057806339509351146101c3578063454b0608146101d657600080fd5b806306fdde0314610126578063095ea7b3146101445780631003e2d21461016757806318160ddd1461017c575b600080fd5b61012e6102dc565b60405161013b9190610f65565b60405180910390f35b610157610152366004610ee8565b61036e565b604051901515815260200161013b565b61017a610175366004610f31565b610385565b005b6002545b60405190815260200161013b565b61015761019c366004610ead565b6103aa565b6040516012815260200161013b565b61017a6101be366004610f31565b61045b565b6101576101d1366004610ee8565b61048e565b61017a6101e4366004610f31565b6104ca565b61017a6101f7366004610f31565b610506565b61018060075481565b610180610213366004610e61565b6001600160a01b031660009081526020819052604090205490565b600554610241906001600160a01b031681565b6040516001600160a01b03909116815260200161013b565b61018060085481565b61012e610527565b610157610278366004610ee8565b610536565b61015761028b366004610ee8565b6105cf565b61018061029e366004610e7b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600654610241906001600160a01b031681565b6060600380546102eb9061111d565b80601f01602080910402602001604051908101604052809291908181526020018280546103179061111d565b80156103645780601f1061033957610100808354040283529160200191610364565b820191906000526020600020905b81548152906001019060200180831161034757829003601f168201915b5050505050905090565b600061037b3384846105dc565b5060015b92915050565b60065461039d906001600160a01b0316333084610701565b6103a73382610772565b50565b60006103b7848484610851565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104415760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61044e85338584036105dc565b60019150505b9392505050565b6104653382610a1f565b6005546008546007546103a7926001600160a01b0316913391610489919086610b6a565b610bcb565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161037b9185906104c5908690610f98565b6105dc565b6005546104e2906001600160a01b0316333084610701565b6006546007546008546103a7926001600160a01b0316913391610489919086610b6a565b6105103382610a1f565b6006546103a7906001600160a01b03163383610bcb565b6060600480546102eb9061111d565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105b85760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610438565b6105c533858584036105dc565b5060019392505050565b600061037b338484610851565b6001600160a01b03831661063e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610438565b6001600160a01b03821661069f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610438565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6040516001600160a01b038085166024830152831660448201526064810182905261076c9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610bfb565b50505050565b6001600160a01b0382166107c85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610438565b80600260008282546107da9190610f98565b90915550506001600160a01b03821660009081526020819052604081208054839290610807908490610f98565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0383166108b55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610438565b6001600160a01b0382166109175760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610438565b6001600160a01b0383166000908152602081905260409020548181101561098f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610438565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906109c6908490610f98565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a1291815260200190565b60405180910390a361076c565b6001600160a01b038216610a7f5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610438565b6001600160a01b03821660009081526020819052604090205481811015610af35760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610438565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610b229084906110da565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016106f4565b505050565b600082841115610b9a57610b7e83856110da565b610b8990600a611013565b610b939083610fb0565b9150610bc4565b82841015610bc457610bac84846110da565b610bb790600a611013565b610bc190836110bb565b91505b5092915050565b6040516001600160a01b038316602482015260448101829052610b6590849063a9059cbb60e01b90606401610735565b6000610c50826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610ccd9092919063ffffffff16565b805190915015610b655780806020019051810190610c6e9190610f11565b610b655760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610438565b6060610cdc8484600085610ce4565b949350505050565b606082471015610d455760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610438565b843b610d935760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610438565b600080866001600160a01b03168587604051610daf9190610f49565b60006040518083038185875af1925050503d8060008114610dec576040519150601f19603f3d011682016040523d82523d6000602084013e610df1565b606091505b5091509150610e01828286610e0c565b979650505050505050565b60608315610e1b575081610454565b825115610e2b5782518084602001fd5b8160405162461bcd60e51b81526004016104389190610f65565b80356001600160a01b0381168114610e5c57600080fd5b919050565b600060208284031215610e72578081fd5b61045482610e45565b60008060408385031215610e8d578081fd5b610e9683610e45565b9150610ea460208401610e45565b90509250929050565b600080600060608486031215610ec1578081fd5b610eca84610e45565b9250610ed860208501610e45565b9150604084013590509250925092565b60008060408385031215610efa578182fd5b610f0383610e45565b946020939093013593505050565b600060208284031215610f22578081fd5b81518015158114610454578182fd5b600060208284031215610f42578081fd5b5035919050565b60008251610f5b8184602087016110f1565b9190910192915050565b6020815260008251806020840152610f848160408501602087016110f1565b601f01601f19169190910160400192915050565b60008219821115610fab57610fab611158565b500190565b600082610fcb57634e487b7160e01b81526012600452602481fd5b500490565b600181815b8085111561100b578160001904821115610ff157610ff1611158565b80851615610ffe57918102915b93841c9390800290610fd5565b509250929050565b600061045483836000826110295750600161037f565b816110365750600061037f565b816001811461104c576002811461105657611072565b600191505061037f565b60ff84111561106757611067611158565b50506001821b61037f565b5060208310610133831016604e8410600b8410161715611095575081810a61037f565b61109f8383610fd0565b80600019048211156110b3576110b3611158565b029392505050565b60008160001904831182151516156110d5576110d5611158565b500290565b6000828210156110ec576110ec611158565b500390565b60005b8381101561110c5781810151838201526020016110f4565b8381111561076c5750506000910152565b600181811c9082168061113157607f821691505b6020821081141561115257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea264697066735822122064dff04e006298bd0edf5f17086f15454dd0eaaf0dbc0e5972156dfcaa45f78d64736f6c63430008040033";

export class Migrator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _fromAsset: string,
    _toAsset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Migrator> {
    return super.deploy(
      _fromAsset,
      _toAsset,
      overrides || {}
    ) as Promise<Migrator>;
  }
  getDeployTransaction(
    _fromAsset: string,
    _toAsset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_fromAsset, _toAsset, overrides || {});
  }
  attach(address: string): Migrator {
    return super.attach(address) as Migrator;
  }
  connect(signer: Signer): Migrator__factory {
    return super.connect(signer) as Migrator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigratorInterface {
    return new utils.Interface(_abi) as MigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Migrator {
    return new Contract(address, _abi, signerOrProvider) as Migrator;
  }
}