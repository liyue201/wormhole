import algosdk, { Algodv2, LogicSigAccount, Transaction } from "algosdk";
export declare const BITS_PER_KEY: number;
export declare const MAX_BITS: number;
declare type Signer = {
    addr: string;
    signTxn(txn: Transaction): Promise<Uint8Array>;
};
export declare type TransactionSignerPair = {
    tx: Transaction;
    signer: Signer | null;
};
export declare type OptInResult = {
    addr: string;
    txs: TransactionSignerPair[];
};
/**
 * Return the message fee for the core bridge
 * @param client An Algodv2 client
 * @param bridgeId The application ID of the core bridge
 * @returns The message fee for the core bridge
 */
export declare function getMessageFee(client: Algodv2, bridgeId: bigint): Promise<bigint>;
/**
 * Checks to see it the account exists for the application
 * @param client An Algodv2 client
 * @param appId Application ID
 * @param acctAddr Account address to check
 * @returns true, if account exists for application.  Otherwise, returns false
 */
export declare function accountExists(client: Algodv2, appId: bigint, acctAddr: string): Promise<boolean>;
export declare type LogicSigAccountInfo = {
    lsa: LogicSigAccount;
    doesExist: boolean;
};
/**
 * Calculates the logic sig account for the application
 * @param client An Algodv2 client
 * @param appId Application ID
 * @param appIndex Application index
 * @param emitterId Emitter address
 * @returns LogicSigAccountInfo
 */
export declare function calcLogicSigAccount(client: algosdk.Algodv2, appId: bigint, appIndex: bigint, emitterId: string): Promise<LogicSigAccountInfo>;
/**
 * Calculates the logic sig account for the application
 * @param client An Algodv2 client
 * @param senderAddr Sender address
 * @param appId Application ID
 * @param appIndex Application index
 * @param emitterId Emitter address
 * @returns Address and array of TransactionSignerPairs
 */
export declare function optin(client: Algodv2, senderAddr: string, appId: bigint, appIndex: bigint, emitterId: string): Promise<OptInResult>;
/**
 * Parses the VAA into a Map
 * @param vaa The VAA to be parsed
 * @returns The Map<string, any> containing the parsed elements of the VAA
 */
export declare function _parseVAAAlgorand(vaa: Uint8Array): Map<string, any>;
/**
 * Returns the local data for an application ID
 * @param client Algodv2 client
 * @param appId Application ID of interest
 * @param address Address of the account
 * @returns Uint8Array of data squirreled away
 */
export declare function decodeLocalState(client: Algodv2, appId: bigint, address: string): Promise<Uint8Array>;
/**
 * Checks if the asset has been opted in by the receiver
 * @param client Algodv2 client
 * @param asset Algorand asset index
 * @param receiver Account address
 * @returns True if the asset was opted in, else false
 */
export declare function assetOptinCheck(client: Algodv2, asset: bigint, receiver: string): Promise<boolean>;
declare class SubmitVAAState {
    vaaMap: Map<string, any>;
    accounts: string[];
    txs: TransactionSignerPair[];
    guardianAddr: string;
    constructor(vaaMap: Map<string, any>, accounts: string[], txs: TransactionSignerPair[], guardianAddr: string);
}
/**
 * Submits just the header of the VAA
 * @param client AlgodV2 client
 * @param bridgeId Application ID of the core bridge
 * @param vaa The VAA (Just the header is used)
 * @param senderAddr Sending account address
 * @param appid Application ID
 * @returns Current VAA state
 */
export declare function submitVAAHeader(client: Algodv2, bridgeId: bigint, vaa: Uint8Array, senderAddr: string, appid: bigint): Promise<SubmitVAAState>;
/**
 * Submits the VAA to the application
 * @param client AlgodV2 client
 * @param tokenBridgeId Application ID of the token bridge
 * @param bridgeId Application ID of the core bridge
 * @param vaa The VAA to be submitted
 * @param senderAddr Sending account address
 * @returns Confirmation log
 */
export declare function _submitVAAAlgorand(client: Algodv2, tokenBridgeId: bigint, bridgeId: bigint, vaa: Uint8Array, senderAddr: string): Promise<TransactionSignerPair[]>;
export declare function uint8ArrayToNativeStringAlgorand(a: Uint8Array): string;
export declare function hexToNativeStringAlgorand(s: string): string;
export declare function nativeStringToHexAlgorand(s: string): string;
export declare function hexToNativeAssetBigIntAlgorand(s: string): bigint;
export declare function hexToNativeAssetStringAlgorand(s: string): string;
export {};
