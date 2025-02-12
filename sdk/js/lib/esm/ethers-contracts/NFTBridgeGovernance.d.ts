/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface NFTBridgeGovernanceInterface extends ethers.utils.Interface {
  functions: {
    "bridgeContracts(uint16)": FunctionFragment;
    "chainId()": FunctionFragment;
    "governanceActionIsConsumed(bytes32)": FunctionFragment;
    "governanceChainId()": FunctionFragment;
    "governanceContract()": FunctionFragment;
    "isInitialized(address)": FunctionFragment;
    "isTransferCompleted(bytes32)": FunctionFragment;
    "isWrappedAsset(address)": FunctionFragment;
    "splCache(uint256)": FunctionFragment;
    "tokenImplementation()": FunctionFragment;
    "wormhole()": FunctionFragment;
    "wrappedAsset(uint16,bytes32)": FunctionFragment;
    "registerChain(bytes)": FunctionFragment;
    "upgrade(bytes)": FunctionFragment;
    "parseRegisterChain(bytes)": FunctionFragment;
    "parseUpgrade(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bridgeContracts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governanceActionIsConsumed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "governanceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governanceContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTransferCompleted",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isWrappedAsset",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "splCache",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wormhole", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wrappedAsset",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerChain",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "parseRegisterChain",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "parseUpgrade",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "bridgeContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "governanceActionIsConsumed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTransferCompleted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWrappedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "splCache", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wormhole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrappedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "parseRegisterChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseUpgrade",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "ContractUpgraded(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export class NFTBridgeGovernance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: NFTBridgeGovernanceInterface;

  functions: {
    bridgeContracts(
      chainId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    chainId(overrides?: CallOverrides): Promise<[number]>;

    governanceActionIsConsumed(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    governanceChainId(overrides?: CallOverrides): Promise<[number]>;

    governanceContract(overrides?: CallOverrides): Promise<[string]>;

    isInitialized(impl: string, overrides?: CallOverrides): Promise<[boolean]>;

    isTransferCompleted(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isWrappedAsset(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    splCache(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[[string, string] & { name: string; symbol: string }]>;

    tokenImplementation(overrides?: CallOverrides): Promise<[string]>;

    wormhole(overrides?: CallOverrides): Promise<[string]>;

    wrappedAsset(
      tokenChainId: BigNumberish,
      tokenAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    registerChain(
      encodedVM: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgrade(
      encodedVM: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    parseRegisterChain(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, number, number, number, string] & {
          module: string;
          action: number;
          chainId: number;
          emitterChainID: number;
          emitterAddress: string;
        }
      ] & {
        chain: [string, number, number, number, string] & {
          module: string;
          action: number;
          chainId: number;
          emitterChainID: number;
          emitterAddress: string;
        };
      }
    >;

    parseUpgrade(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, number, number, string] & {
          module: string;
          action: number;
          chainId: number;
          newContract: string;
        }
      ] & {
        chain: [string, number, number, string] & {
          module: string;
          action: number;
          chainId: number;
          newContract: string;
        };
      }
    >;
  };

  bridgeContracts(
    chainId_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  chainId(overrides?: CallOverrides): Promise<number>;

  governanceActionIsConsumed(
    hash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  governanceChainId(overrides?: CallOverrides): Promise<number>;

  governanceContract(overrides?: CallOverrides): Promise<string>;

  isInitialized(impl: string, overrides?: CallOverrides): Promise<boolean>;

  isTransferCompleted(
    hash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isWrappedAsset(token: string, overrides?: CallOverrides): Promise<boolean>;

  splCache(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { name: string; symbol: string }>;

  tokenImplementation(overrides?: CallOverrides): Promise<string>;

  wormhole(overrides?: CallOverrides): Promise<string>;

  wrappedAsset(
    tokenChainId: BigNumberish,
    tokenAddress: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  registerChain(
    encodedVM: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgrade(
    encodedVM: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  parseRegisterChain(
    encoded: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, number, number, number, string] & {
      module: string;
      action: number;
      chainId: number;
      emitterChainID: number;
      emitterAddress: string;
    }
  >;

  parseUpgrade(
    encoded: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, number, number, string] & {
      module: string;
      action: number;
      chainId: number;
      newContract: string;
    }
  >;

  callStatic: {
    bridgeContracts(
      chainId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    chainId(overrides?: CallOverrides): Promise<number>;

    governanceActionIsConsumed(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    governanceChainId(overrides?: CallOverrides): Promise<number>;

    governanceContract(overrides?: CallOverrides): Promise<string>;

    isInitialized(impl: string, overrides?: CallOverrides): Promise<boolean>;

    isTransferCompleted(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isWrappedAsset(token: string, overrides?: CallOverrides): Promise<boolean>;

    splCache(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { name: string; symbol: string }>;

    tokenImplementation(overrides?: CallOverrides): Promise<string>;

    wormhole(overrides?: CallOverrides): Promise<string>;

    wrappedAsset(
      tokenChainId: BigNumberish,
      tokenAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    registerChain(
      encodedVM: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    upgrade(encodedVM: BytesLike, overrides?: CallOverrides): Promise<void>;

    parseRegisterChain(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, number, number, number, string] & {
        module: string;
        action: number;
        chainId: number;
        emitterChainID: number;
        emitterAddress: string;
      }
    >;

    parseUpgrade(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, number, number, string] & {
        module: string;
        action: number;
        chainId: number;
        newContract: string;
      }
    >;
  };

  filters: {
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      { previousAdmin: string; newAdmin: string }
    >;

    BeaconUpgraded(
      beacon?: string | null
    ): TypedEventFilter<[string], { beacon: string }>;

    ContractUpgraded(
      oldContract?: string | null,
      newContract?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldContract: string; newContract: string }
    >;

    Upgraded(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;
  };

  estimateGas: {
    bridgeContracts(
      chainId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    governanceActionIsConsumed(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governanceChainId(overrides?: CallOverrides): Promise<BigNumber>;

    governanceContract(overrides?: CallOverrides): Promise<BigNumber>;

    isInitialized(impl: string, overrides?: CallOverrides): Promise<BigNumber>;

    isTransferCompleted(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWrappedAsset(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    splCache(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    wormhole(overrides?: CallOverrides): Promise<BigNumber>;

    wrappedAsset(
      tokenChainId: BigNumberish,
      tokenAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerChain(
      encodedVM: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgrade(
      encodedVM: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    parseRegisterChain(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseUpgrade(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bridgeContracts(
      chainId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceActionIsConsumed(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governanceChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInitialized(
      impl: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTransferCompleted(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWrappedAsset(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    splCache(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wormhole(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wrappedAsset(
      tokenChainId: BigNumberish,
      tokenAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerChain(
      encodedVM: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgrade(
      encodedVM: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    parseRegisterChain(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseUpgrade(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
