import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Getters, GettersInterface } from "../Getters";
export declare class Getters__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Getters>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Getters;
    connect(signer: Signer): Getters__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610399806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063b172b22211610066578063b172b22214610173578063d60b347f1461017b578063eb8d3f12146101a7578063f951975a146101bd578063fbe3c2cd146101dd57600080fd5b80631a90a219146100a35780631cfe7951146100ba5780632c3c02a4146100d95780634cf842b51461010c5780639a8a059214610158575b600080fd5b6007545b6040519081526020015b60405180910390f35b60035463ffffffff165b60405163ffffffff90911681526020016100b1565b6100fc6100e73660046102bc565b60009081526005602052604090205460ff1690565b60405190151581526020016100b1565b61013f61011a36600461028e565b6001600160a01b031660009081526004602052604090205467ffffffffffffffff1690565b60405167ffffffffffffffff90911681526020016100b1565b60005461ffff165b60405161ffff90911681526020016100b1565b6001546100a7565b6100fc61018936600461028e565b6001600160a01b031660009081526006602052604090205460ff1690565b600354640100000000900463ffffffff166100c4565b6101d06101cb3660046102d4565b6101ef565b6040516100b191906102f8565b60005462010000900461ffff16610160565b60408051808201825260608082526000602080840182905263ffffffff8616825260028152908490208451815492830281018401865294850182815293949390928492849184018282801561026d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161024f575b50505091835250506001919091015463ffffffff1660209091015292915050565b60006020828403121561029f578081fd5b81356001600160a01b03811681146102b5578182fd5b9392505050565b6000602082840312156102cd578081fd5b5035919050565b6000602082840312156102e5578081fd5b813563ffffffff811681146102b5578182fd5b6020808252825160408383015280516060840181905260009291820190839060808601905b808310156103465783516001600160a01b0316825292840192600192909201919084019061031d565b5063ffffffff84880151166040870152809450505050509291505056fea26469706673582212203e9c7a77f471c084c1f6437849beb91fb79c1f4c4f0d0d935781bc0cae90a43064736f6c63430008040033";
    static readonly abi: ({
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
    })[];
    static createInterface(): GettersInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Getters;
}