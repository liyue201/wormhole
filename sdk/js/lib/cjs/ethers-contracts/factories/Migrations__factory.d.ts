import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Migrations, MigrationsInterface } from "../Migrations";
export declare class Migrations__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Migrations>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Migrations;
    connect(signer: Signer): Migrations__factory;
    static readonly bytecode = "0x6080604052600080546001600160a01b0319163317905534801561002257600080fd5b5061016f806100326000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063445df0ac146100465780638da5cb5b14610062578063fdacd5761461008d575b600080fd5b61004f60015481565b6040519081526020015b60405180910390f35b600054610075906001600160a01b031681565b6040516001600160a01b039091168152602001610059565b6100a061009b366004610121565b6100a2565b005b6000546001600160a01b0316331461011c5760405162461bcd60e51b815260206004820152603360248201527f546869732066756e6374696f6e206973207265737472696374656420746f207460448201527234329031b7b73a3930b1ba13b99037bbb732b960691b606482015260840160405180910390fd5b600155565b600060208284031215610132578081fd5b503591905056fea264697066735822122098760e95ecee9757125787c83deb04126a6b1815d1813d8a5f58be99167b44c664736f6c63430008040033";
    static readonly abi: ({
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
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
    })[];
    static createInterface(): MigrationsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Migrations;
}
