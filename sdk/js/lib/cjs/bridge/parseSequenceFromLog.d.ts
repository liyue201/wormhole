import { TransactionResponse } from "@solana/web3.js";
import { TxInfo } from "@terra-money/terra.js";
import { ContractReceipt } from "ethers";
export declare function parseSequenceFromLogEth(receipt: ContractReceipt, bridgeAddress: string): string;
export declare function parseSequencesFromLogEth(receipt: ContractReceipt, bridgeAddress: string): string[];
export declare function parseSequenceFromLogTerra(info: TxInfo): string;
export declare function parseSequencesFromLogTerra(info: TxInfo): string[];
export declare function parseSequenceFromLogSolana(info: TransactionResponse): string;
export declare function parseSequencesFromLogSolana(info: TransactionResponse): string[] | undefined;
export declare function parseSequenceFromLogAlgorand(result: Record<string, any>): string;
