import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BridgeSetup, BridgeSetupInterface } from "../BridgeSetup";
export declare class BridgeSetup__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BridgeSetup>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BridgeSetup;
    connect(signer: Signer): BridgeSetup__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610299806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633bfa063814610030575b600080fd5b61004361003e3660046101e5565b610045565b005b60028054600080546001600160a01b0389166001600160a01b031990911617905561ffff868116620100000263ffffffff19909216908916171790556003839055600180546001600160a01b0319166001600160a01b038416179055600480546001600160a01b0319166001600160a01b0383161790556100c5876100ce565b50505050505050565b6100d78161010e565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6101765760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840160405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b03811681146101ce57600080fd5b919050565b803561ffff811681146101ce57600080fd5b600080600080600080600060e0888a0312156101ff578283fd5b610208886101b7565b9650610216602089016101d3565b9550610224604089016101b7565b9450610232606089016101d3565b93506080880135925061024760a089016101b7565b915061025560c089016101b7565b90509295989194975092955056fea2646970667358221220c5db565d9ad99763ce356ff332d18966aa04aa11191303335a6956a0c6ba826e64736f6c63430008040033";
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
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): BridgeSetupInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BridgeSetup;
}
