import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTBridgeGovernance, NFTBridgeGovernanceInterface } from "../NFTBridgeGovernance";
export declare class NFTBridgeGovernance__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NFTBridgeGovernance>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NFTBridgeGovernance;
    connect(signer: Signer): NFTBridgeGovernance__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061143e806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80639a8a059211610097578063b172b22211610066578063b172b22214610342578063d60b347f1461034a578063fbe3c2cd14610376578063fbeeacd91461038857600080fd5b80639a8a0592146102bf578063a5799f93146102da578063aa4efa5b146102ed578063ad66a5f11461031057600080fd5b80632c3c02a4116100d35780632c3c02a4146102135780632f3a3d5d146102365780633ca648261461024757806384acd1bb146102ae57600080fd5b806301f53255146101055780631a2be4da146101705780631ff1e286146101ac57806325394645146101fe575b600080fd5b61011861011336600461105b565b6103d5565b6040516101679190600060a0820190508251825260ff6020840151166020830152604083015161ffff808216604085015280606086015116606085015250506080830151608083015292915050565b60405180910390f35b61019c61017e366004611015565b6001600160a01b031660009081526008602052604090205460ff1690565b6040519015158152602001610167565b6101e66101ba36600461123d565b61ffff91909116600090815260076020908152604080832093835292905220546001600160a01b031690565b6040516001600160a01b039091168152602001610167565b61021161020c36600461105b565b6105c4565b005b61019c610221366004611043565b60009081526004602052604090205460ff1690565b6001546001600160a01b03166101e6565b610293610255366004611043565b6040805180820190915260008082526020820152506000908152600a6020908152604091829020825180840190935280548352600101549082015290565b60408051825181526020928301519281019290925201610167565b6000546001600160a01b03166101e6565b60025461ffff165b60405161ffff9091168152602001610167565b6102116102e836600461105b565b61069b565b61019c6102fb366004611043565b60009081526005602052604090205460ff1690565b61033461031e366004611221565b61ffff1660009081526009602052604090205490565b604051908152602001610167565b600354610334565b61019c610358366004611015565b6001600160a01b031660009081526006602052604090205460ff1690565b60025462010000900461ffff166102c7565b61039b61039636600461105b565b610794565b60405161016791908151815260208083015160ff169082015260408083015161ffff16908201526060918201519181019190915260800190565b6040805160a08101825260008082526020820181905291810182905260608101829052608081018290529061040a8382610957565b8252610417602082611369565b8251909150684e4654427269646765146104845760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e67206d6f64604482015262756c6560e81b60648201526084015b60405180910390fd5b61048e83826109b5565b60ff1660208301526104a1600182611369565b9050816020015160ff166001146105065760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e672061637460448201526234b7b760e91b606482015260840161047b565b6105108382610a11565b61ffff166040830152610524600282611369565b90506105308382610a11565b61ffff166060830152610544600282611369565b90506105508382610957565b6080830152610560602082611369565b9050808351146105be5760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e67206c656e6044820152620cee8d60eb1b606482015260840161047b565b50919050565b60008060006105d284610a6e565b9250925092508181906105f85760405162461bcd60e51b815260040161047b91906112b0565b5061061d8361014001516000908152600460205260409020805460ff19166001179055565b600061062c8460e00151610794565b905061063b60025461ffff1690565b61ffff16816040015161ffff16146106865760405162461bcd60e51b815260206004820152600e60248201526d1ddc9bdb99c818da185a5b881a5960921b604482015260640161047b565b606081015161069490610c8d565b5050505050565b60008060006106a984610a6e565b9250925092508181906106cf5760405162461bcd60e51b815260040161047b91906112b0565b506106f48361014001516000908152600460205260409020805460ff19166001179055565b60006107038460e001516103d5565b905061071260025461ffff1690565b61ffff16816040015161ffff1614806107315750604081015161ffff16155b6107705760405162461bcd60e51b815260206004820152601060248201526f1a5b9d985b1a590818da185a5b881a5960821b604482015260640161047b565b6106948160600151826080015161ffff909116600090815260096020526040902055565b6040805160808101825260008082526020820181905291810182905260608101829052906107c28382610957565b82526107cf602082611369565b8251909150684e4654427269646765146108395760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206d6044820152646f64756c6560d81b606482015260840161047b565b61084383826109b5565b60ff166020830152610856600182611369565b9050816020015160ff166002146108bd5760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206160448201526431ba34b7b760d91b606482015260840161047b565b6108c78382610a11565b61ffff1660408301526108db600282611369565b90506108e78382610957565b60608301526108f7602082611369565b9050808351146105be5760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206c6044820152640cadccee8d60db1b606482015260840161047b565b6000610964826020611369565b835110156109ac5760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b604482015260640161047b565b50016020015190565b60006109c2826001611369565b83511015610a085760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b604482015260640161047b565b50016001015190565b6000610a1e826002611369565b83511015610a655760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b604482015260640161047b565b50016002015190565b604080516101608101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e082018190526101008201839052610120820152610140810191909152600060606000806000610ae16000546001600160a01b031690565b6001600160a01b031663c0fd8bde886040518263ffffffff1660e01b8152600401610b0c91906112b0565b60006040518083038186803b158015610b2457600080fd5b505afa158015610b38573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b6091908101906110cf565b92509250925081610b775791945092509050610c86565b60025462010000900461ffff1661ffff16836060015161ffff1614610bd35750506040805180820190915260168152753bb937b7339033b7bb32b93730b731b29031b430b4b760511b6020820152909350600092509050610c86565b600354836080015114610c2457505060408051808201909152601981527f77726f6e6720676f7665726e616e636520636f6e7472616374000000000000006020820152909350600092509050610c86565b61014083015160009081526004602052604090205460ff1615610c6b578260006040518060600160405280602281526020016113e760229139955095509550505050610c86565b50506040805160208101909152600081529093506001925090505b9193909250565b6000610cc07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b9050610ccb82610dba565b60408051600481526024810182526020810180516001600160e01b031663204a7f0760e21b179052905160009182916001600160a01b03861691610d0e91611294565b600060405180830381855af49150503d8060008114610d49576040519150601f19603f3d011682016040523d82523d6000602084013e610d4e565b606091505b5091509150818190610d735760405162461bcd60e51b815260040161047b91906112b0565b50836001600160a01b0316836001600160a01b03167f2e4cc16c100f0b55e2df82ab0b1a7e294aa9cbd01b48fbaf622683fbc0507a4960405160405180910390a350505050565b610dc381610dfa565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b610e5e5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161047b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b600082601f830112610eaf578081fd5b8151602067ffffffffffffffff821115610ecb57610ecb6113bd565b610ed9818360051b01611310565b80838252828201915082860187848660071b8901011115610ef8578586fd5b855b85811015610f5b57608080838b031215610f12578788fd5b610f1a6112c3565b8351815286840151878201526040610f33818601611004565b908201526060610f44858201611004565b908201528552938501939190910190600101610efa565b5090979650505050505050565b80518015158114610f7857600080fd5b919050565b600082601f830112610f8d578081fd5b8151610fa0610f9b82611341565b611310565b818152846020838601011115610fb4578283fd5b610fc582602083016020870161138d565b949350505050565b8051610f78816113d3565b805163ffffffff81168114610f7857600080fd5b805167ffffffffffffffff81168114610f7857600080fd5b805160ff81168114610f7857600080fd5b600060208284031215611026578081fd5b81356001600160a01b038116811461103c578182fd5b9392505050565b600060208284031215611054578081fd5b5035919050565b60006020828403121561106c578081fd5b813567ffffffffffffffff811115611082578182fd5b8201601f81018413611092578182fd5b80356110a0610f9b82611341565b8181528560208385010111156110b4578384fd5b81602084016020830137908101602001929092525092915050565b6000806000606084860312156110e3578182fd5b835167ffffffffffffffff808211156110fa578384fd5b90850190610160828803121561110e578384fd5b6111166112ec565b61111f83611004565b815261112d60208401610fd8565b602082015261113e60408401610fd8565b604082015261114f60608401610fcd565b60608201526080830151608082015261116a60a08401610fec565b60a082015261117b60c08401611004565b60c082015260e083015182811115611191578586fd5b61119d89828601610f7d565b60e0830152506101006111b1818501610fd8565b9082015261012083810151838111156111c8578687fd5b6111d48a828701610e9f565b9183019190915250610140838101519082015294506111f560208701610f68565b9350604086015191508082111561120a578283fd5b5061121786828701610f7d565b9150509250925092565b600060208284031215611232578081fd5b813561103c816113d3565b6000806040838503121561124f578182fd5b823561125a816113d3565b946020939093013593505050565b6000815180845261128081602086016020860161138d565b601f01601f19169290920160200192915050565b600082516112a681846020870161138d565b9190910192915050565b60208152600061103c6020830184611268565b6040516080810167ffffffffffffffff811182821017156112e6576112e66113bd565b60405290565b604051610160810167ffffffffffffffff811182821017156112e6576112e66113bd565b604051601f8201601f1916810167ffffffffffffffff81118282101715611339576113396113bd565b604052919050565b600067ffffffffffffffff82111561135b5761135b6113bd565b50601f01601f191660200190565b6000821982111561138857634e487b7160e01b81526011600452602481fd5b500190565b60005b838110156113a8578181015183820152602001611390565b838111156113b7576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b61ffff811681146113e357600080fd5b5056fe676f7665726e616e636520616374696f6e20616c726561647920636f6e73756d6564a2646970667358221220977e1c49bbe2c12e99888a1d74f14f2b3e84deed719118ab386e82e42cf85e8f64736f6c63430008040033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): NFTBridgeGovernanceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NFTBridgeGovernance;
}
