/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "gossip.v1";

export interface GossipMessage {
  signedObservation: SignedObservation | undefined;
  signedHeartbeat: SignedHeartbeat | undefined;
  signedVaaWithQuorum: SignedVAAWithQuorum | undefined;
  signedObservationRequest: SignedObservationRequest | undefined;
}

export interface SignedHeartbeat {
  /** Serialized Heartbeat message. */
  heartbeat: Buffer;
  /** ECDSA signature using the node's guardian public key. */
  signature: Buffer;
  /**
   * Guardian address that signed this payload (truncated Eth address).
   * This is already contained in Heartbeat, however, we want to verify
   * the payload before we deserialize it.
   */
  guardianAddr: Buffer;
}

/** P2P gossip heartbeats for network introspection purposes. */
export interface Heartbeat {
  /** The node's arbitrarily chosen, untrusted nodeName. */
  nodeName: string;
  /** A monotonic counter that resets to zero on startup. */
  counter: string;
  /** UNIX wall time. */
  timestamp: string;
  networks: Heartbeat_Network[];
  /** Human-readable representation of the current bridge node release. */
  version: string;
  /** Human-readable representation of the guardian key's address. */
  guardianAddr: string;
  /** UNIX boot timestamp. */
  bootTimestamp: string;
}

export interface Heartbeat_Network {
  /** Canonical chain ID. */
  id: number;
  /** Consensus height of the node. */
  height: string;
  /** Chain-specific human-readable representation of the bridge contract address. */
  contractAddress: string;
  /** Connection error count */
  errorCount: string;
}

/**
 * A SignedObservation is a signed statement by a given guardian node
 * that they observed a given event.
 *
 * Observations always result from an external, final event being observed.
 * Examples are emitted messages in finalized blocks on a block or guardian set changes
 * injected by node operators after reaching off-chain consensus.
 *
 * The event is uniquely identified by its hashed (tx_hash, nonce, values...) tuple.
 *
 * Other nodes will verify the signature. Once any node has observed a quorum of
 * guardians submitting valid signatures for a given hash, they can be assembled into a VAA.
 *
 * Messages without valid signature are dropped unceremoniously.
 */
export interface SignedObservation {
  /** Guardian pubkey as truncated eth address. */
  addr: Buffer;
  /** The observation's deterministic, unique hash. */
  hash: Buffer;
  /** ECSDA signature of the hash using the node's guardian key. */
  signature: Buffer;
  /**
   * Transaction hash this observation was made from.
   * Optional, included for observability.
   */
  txHash: Buffer;
  /**
   * Message ID (chain/emitter/seq) for this observation.
   * Optional, included for observability.
   */
  messageId: string;
}

/**
 * A SignedVAAWithQuorum message is sent by nodes whenever one of the VAAs they observed
 * reached a 2/3+ quorum to be considered valid. Signed VAAs are broadcasted to the gossip
 * network to allow nodes to persist them even if they failed to observe the signature.
 */
export interface SignedVAAWithQuorum {
  vaa: Buffer;
}

/**
 * Any guardian can send a SignedObservationRequest to the network to request
 * all guardians to re-observe a given transaction. This is rate-limited to one
 * request per second per guardian to prevent abuse.
 *
 * In the current implementation, this is only implemented for Solana.
 * For Solana, the tx_hash is the account address of the transaction's message account.
 */
export interface SignedObservationRequest {
  /** Serialized observation request. */
  observationRequest: Buffer;
  /** Signature */
  signature: Buffer;
  guardianAddr: Buffer;
}

export interface ObservationRequest {
  chainId: number;
  txHash: Buffer;
}

const baseGossipMessage: object = {};

export const GossipMessage = {
  encode(
    message: GossipMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signedObservation !== undefined) {
      SignedObservation.encode(
        message.signedObservation,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.signedHeartbeat !== undefined) {
      SignedHeartbeat.encode(
        message.signedHeartbeat,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.signedVaaWithQuorum !== undefined) {
      SignedVAAWithQuorum.encode(
        message.signedVaaWithQuorum,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.signedObservationRequest !== undefined) {
      SignedObservationRequest.encode(
        message.signedObservationRequest,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GossipMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGossipMessage } as GossipMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.signedObservation = SignedObservation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.signedHeartbeat = SignedHeartbeat.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.signedVaaWithQuorum = SignedVAAWithQuorum.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.signedObservationRequest = SignedObservationRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GossipMessage {
    const message = { ...baseGossipMessage } as GossipMessage;
    if (
      object.signedObservation !== undefined &&
      object.signedObservation !== null
    ) {
      message.signedObservation = SignedObservation.fromJSON(
        object.signedObservation
      );
    } else {
      message.signedObservation = undefined;
    }
    if (
      object.signedHeartbeat !== undefined &&
      object.signedHeartbeat !== null
    ) {
      message.signedHeartbeat = SignedHeartbeat.fromJSON(
        object.signedHeartbeat
      );
    } else {
      message.signedHeartbeat = undefined;
    }
    if (
      object.signedVaaWithQuorum !== undefined &&
      object.signedVaaWithQuorum !== null
    ) {
      message.signedVaaWithQuorum = SignedVAAWithQuorum.fromJSON(
        object.signedVaaWithQuorum
      );
    } else {
      message.signedVaaWithQuorum = undefined;
    }
    if (
      object.signedObservationRequest !== undefined &&
      object.signedObservationRequest !== null
    ) {
      message.signedObservationRequest = SignedObservationRequest.fromJSON(
        object.signedObservationRequest
      );
    } else {
      message.signedObservationRequest = undefined;
    }
    return message;
  },

  toJSON(message: GossipMessage): unknown {
    const obj: any = {};
    message.signedObservation !== undefined &&
      (obj.signedObservation = message.signedObservation
        ? SignedObservation.toJSON(message.signedObservation)
        : undefined);
    message.signedHeartbeat !== undefined &&
      (obj.signedHeartbeat = message.signedHeartbeat
        ? SignedHeartbeat.toJSON(message.signedHeartbeat)
        : undefined);
    message.signedVaaWithQuorum !== undefined &&
      (obj.signedVaaWithQuorum = message.signedVaaWithQuorum
        ? SignedVAAWithQuorum.toJSON(message.signedVaaWithQuorum)
        : undefined);
    message.signedObservationRequest !== undefined &&
      (obj.signedObservationRequest = message.signedObservationRequest
        ? SignedObservationRequest.toJSON(message.signedObservationRequest)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GossipMessage>): GossipMessage {
    const message = { ...baseGossipMessage } as GossipMessage;
    if (
      object.signedObservation !== undefined &&
      object.signedObservation !== null
    ) {
      message.signedObservation = SignedObservation.fromPartial(
        object.signedObservation
      );
    } else {
      message.signedObservation = undefined;
    }
    if (
      object.signedHeartbeat !== undefined &&
      object.signedHeartbeat !== null
    ) {
      message.signedHeartbeat = SignedHeartbeat.fromPartial(
        object.signedHeartbeat
      );
    } else {
      message.signedHeartbeat = undefined;
    }
    if (
      object.signedVaaWithQuorum !== undefined &&
      object.signedVaaWithQuorum !== null
    ) {
      message.signedVaaWithQuorum = SignedVAAWithQuorum.fromPartial(
        object.signedVaaWithQuorum
      );
    } else {
      message.signedVaaWithQuorum = undefined;
    }
    if (
      object.signedObservationRequest !== undefined &&
      object.signedObservationRequest !== null
    ) {
      message.signedObservationRequest = SignedObservationRequest.fromPartial(
        object.signedObservationRequest
      );
    } else {
      message.signedObservationRequest = undefined;
    }
    return message;
  },
};

const baseSignedHeartbeat: object = {};

export const SignedHeartbeat = {
  encode(
    message: SignedHeartbeat,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.heartbeat.length !== 0) {
      writer.uint32(10).bytes(message.heartbeat);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.guardianAddr.length !== 0) {
      writer.uint32(26).bytes(message.guardianAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedHeartbeat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignedHeartbeat } as SignedHeartbeat;
    message.heartbeat = Buffer.alloc(0);
    message.signature = Buffer.alloc(0);
    message.guardianAddr = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.heartbeat = reader.bytes() as Buffer;
          break;
        case 2:
          message.signature = reader.bytes() as Buffer;
          break;
        case 3:
          message.guardianAddr = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedHeartbeat {
    const message = { ...baseSignedHeartbeat } as SignedHeartbeat;
    message.heartbeat = Buffer.alloc(0);
    message.signature = Buffer.alloc(0);
    message.guardianAddr = Buffer.alloc(0);
    if (object.heartbeat !== undefined && object.heartbeat !== null) {
      message.heartbeat = Buffer.from(bytesFromBase64(object.heartbeat));
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = Buffer.from(bytesFromBase64(object.signature));
    }
    if (object.guardianAddr !== undefined && object.guardianAddr !== null) {
      message.guardianAddr = Buffer.from(bytesFromBase64(object.guardianAddr));
    }
    return message;
  },

  toJSON(message: SignedHeartbeat): unknown {
    const obj: any = {};
    message.heartbeat !== undefined &&
      (obj.heartbeat = base64FromBytes(
        message.heartbeat !== undefined ? message.heartbeat : Buffer.alloc(0)
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : Buffer.alloc(0)
      ));
    message.guardianAddr !== undefined &&
      (obj.guardianAddr = base64FromBytes(
        message.guardianAddr !== undefined
          ? message.guardianAddr
          : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<SignedHeartbeat>): SignedHeartbeat {
    const message = { ...baseSignedHeartbeat } as SignedHeartbeat;
    if (object.heartbeat !== undefined && object.heartbeat !== null) {
      message.heartbeat = object.heartbeat;
    } else {
      message.heartbeat = Buffer.alloc(0);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = Buffer.alloc(0);
    }
    if (object.guardianAddr !== undefined && object.guardianAddr !== null) {
      message.guardianAddr = object.guardianAddr;
    } else {
      message.guardianAddr = Buffer.alloc(0);
    }
    return message;
  },
};

const baseHeartbeat: object = {
  nodeName: "",
  counter: "0",
  timestamp: "0",
  version: "",
  guardianAddr: "",
  bootTimestamp: "0",
};

export const Heartbeat = {
  encode(
    message: Heartbeat,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeName !== "") {
      writer.uint32(10).string(message.nodeName);
    }
    if (message.counter !== "0") {
      writer.uint32(16).int64(message.counter);
    }
    if (message.timestamp !== "0") {
      writer.uint32(24).int64(message.timestamp);
    }
    for (const v of message.networks) {
      Heartbeat_Network.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.guardianAddr !== "") {
      writer.uint32(50).string(message.guardianAddr);
    }
    if (message.bootTimestamp !== "0") {
      writer.uint32(56).int64(message.bootTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Heartbeat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeartbeat } as Heartbeat;
    message.networks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeName = reader.string();
          break;
        case 2:
          message.counter = longToString(reader.int64() as Long);
          break;
        case 3:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        case 4:
          message.networks.push(
            Heartbeat_Network.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.guardianAddr = reader.string();
          break;
        case 7:
          message.bootTimestamp = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Heartbeat {
    const message = { ...baseHeartbeat } as Heartbeat;
    message.networks = [];
    if (object.nodeName !== undefined && object.nodeName !== null) {
      message.nodeName = String(object.nodeName);
    } else {
      message.nodeName = "";
    }
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = String(object.counter);
    } else {
      message.counter = "0";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "0";
    }
    if (object.networks !== undefined && object.networks !== null) {
      for (const e of object.networks) {
        message.networks.push(Heartbeat_Network.fromJSON(e));
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = "";
    }
    if (object.guardianAddr !== undefined && object.guardianAddr !== null) {
      message.guardianAddr = String(object.guardianAddr);
    } else {
      message.guardianAddr = "";
    }
    if (object.bootTimestamp !== undefined && object.bootTimestamp !== null) {
      message.bootTimestamp = String(object.bootTimestamp);
    } else {
      message.bootTimestamp = "0";
    }
    return message;
  },

  toJSON(message: Heartbeat): unknown {
    const obj: any = {};
    message.nodeName !== undefined && (obj.nodeName = message.nodeName);
    message.counter !== undefined && (obj.counter = message.counter);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    if (message.networks) {
      obj.networks = message.networks.map((e) =>
        e ? Heartbeat_Network.toJSON(e) : undefined
      );
    } else {
      obj.networks = [];
    }
    message.version !== undefined && (obj.version = message.version);
    message.guardianAddr !== undefined &&
      (obj.guardianAddr = message.guardianAddr);
    message.bootTimestamp !== undefined &&
      (obj.bootTimestamp = message.bootTimestamp);
    return obj;
  },

  fromPartial(object: DeepPartial<Heartbeat>): Heartbeat {
    const message = { ...baseHeartbeat } as Heartbeat;
    message.networks = [];
    if (object.nodeName !== undefined && object.nodeName !== null) {
      message.nodeName = object.nodeName;
    } else {
      message.nodeName = "";
    }
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = object.counter;
    } else {
      message.counter = "0";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "0";
    }
    if (object.networks !== undefined && object.networks !== null) {
      for (const e of object.networks) {
        message.networks.push(Heartbeat_Network.fromPartial(e));
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    if (object.guardianAddr !== undefined && object.guardianAddr !== null) {
      message.guardianAddr = object.guardianAddr;
    } else {
      message.guardianAddr = "";
    }
    if (object.bootTimestamp !== undefined && object.bootTimestamp !== null) {
      message.bootTimestamp = object.bootTimestamp;
    } else {
      message.bootTimestamp = "0";
    }
    return message;
  },
};

const baseHeartbeat_Network: object = {
  id: 0,
  height: "0",
  contractAddress: "",
  errorCount: "0",
};

export const Heartbeat_Network = {
  encode(
    message: Heartbeat_Network,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.height !== "0") {
      writer.uint32(16).int64(message.height);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.errorCount !== "0") {
      writer.uint32(32).uint64(message.errorCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Heartbeat_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeartbeat_Network } as Heartbeat_Network;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.height = longToString(reader.int64() as Long);
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.errorCount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Heartbeat_Network {
    const message = { ...baseHeartbeat_Network } as Heartbeat_Network;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = String(object.height);
    } else {
      message.height = "0";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.errorCount !== undefined && object.errorCount !== null) {
      message.errorCount = String(object.errorCount);
    } else {
      message.errorCount = "0";
    }
    return message;
  },

  toJSON(message: Heartbeat_Network): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.height !== undefined && (obj.height = message.height);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.errorCount !== undefined && (obj.errorCount = message.errorCount);
    return obj;
  },

  fromPartial(object: DeepPartial<Heartbeat_Network>): Heartbeat_Network {
    const message = { ...baseHeartbeat_Network } as Heartbeat_Network;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = "0";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.errorCount !== undefined && object.errorCount !== null) {
      message.errorCount = object.errorCount;
    } else {
      message.errorCount = "0";
    }
    return message;
  },
};

const baseSignedObservation: object = { messageId: "" };

export const SignedObservation = {
  encode(
    message: SignedObservation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.addr.length !== 0) {
      writer.uint32(10).bytes(message.addr);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.txHash.length !== 0) {
      writer.uint32(34).bytes(message.txHash);
    }
    if (message.messageId !== "") {
      writer.uint32(42).string(message.messageId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedObservation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignedObservation } as SignedObservation;
    message.addr = Buffer.alloc(0);
    message.hash = Buffer.alloc(0);
    message.signature = Buffer.alloc(0);
    message.txHash = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.bytes() as Buffer;
          break;
        case 2:
          message.hash = reader.bytes() as Buffer;
          break;
        case 3:
          message.signature = reader.bytes() as Buffer;
          break;
        case 4:
          message.txHash = reader.bytes() as Buffer;
          break;
        case 5:
          message.messageId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedObservation {
    const message = { ...baseSignedObservation } as SignedObservation;
    message.addr = Buffer.alloc(0);
    message.hash = Buffer.alloc(0);
    message.signature = Buffer.alloc(0);
    message.txHash = Buffer.alloc(0);
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = Buffer.from(bytesFromBase64(object.addr));
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = Buffer.from(bytesFromBase64(object.hash));
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = Buffer.from(bytesFromBase64(object.signature));
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = Buffer.from(bytesFromBase64(object.txHash));
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    } else {
      message.messageId = "";
    }
    return message;
  },

  toJSON(message: SignedObservation): unknown {
    const obj: any = {};
    message.addr !== undefined &&
      (obj.addr = base64FromBytes(
        message.addr !== undefined ? message.addr : Buffer.alloc(0)
      ));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : Buffer.alloc(0)
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : Buffer.alloc(0)
      ));
    message.txHash !== undefined &&
      (obj.txHash = base64FromBytes(
        message.txHash !== undefined ? message.txHash : Buffer.alloc(0)
      ));
    message.messageId !== undefined && (obj.messageId = message.messageId);
    return obj;
  },

  fromPartial(object: DeepPartial<SignedObservation>): SignedObservation {
    const message = { ...baseSignedObservation } as SignedObservation;
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = Buffer.alloc(0);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = Buffer.alloc(0);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = Buffer.alloc(0);
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = object.txHash;
    } else {
      message.txHash = Buffer.alloc(0);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    } else {
      message.messageId = "";
    }
    return message;
  },
};

const baseSignedVAAWithQuorum: object = {};

export const SignedVAAWithQuorum = {
  encode(
    message: SignedVAAWithQuorum,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vaa.length !== 0) {
      writer.uint32(10).bytes(message.vaa);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedVAAWithQuorum {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignedVAAWithQuorum } as SignedVAAWithQuorum;
    message.vaa = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaa = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedVAAWithQuorum {
    const message = { ...baseSignedVAAWithQuorum } as SignedVAAWithQuorum;
    message.vaa = Buffer.alloc(0);
    if (object.vaa !== undefined && object.vaa !== null) {
      message.vaa = Buffer.from(bytesFromBase64(object.vaa));
    }
    return message;
  },

  toJSON(message: SignedVAAWithQuorum): unknown {
    const obj: any = {};
    message.vaa !== undefined &&
      (obj.vaa = base64FromBytes(
        message.vaa !== undefined ? message.vaa : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<SignedVAAWithQuorum>): SignedVAAWithQuorum {
    const message = { ...baseSignedVAAWithQuorum } as SignedVAAWithQuorum;
    if (object.vaa !== undefined && object.vaa !== null) {
      message.vaa = object.vaa;
    } else {
      message.vaa = Buffer.alloc(0);
    }
    return message;
  },
};

const baseSignedObservationRequest: object = {};

export const SignedObservationRequest = {
  encode(
    message: SignedObservationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.observationRequest.length !== 0) {
      writer.uint32(10).bytes(message.observationRequest);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.guardianAddr.length !== 0) {
      writer.uint32(26).bytes(message.guardianAddr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SignedObservationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSignedObservationRequest,
    } as SignedObservationRequest;
    message.observationRequest = Buffer.alloc(0);
    message.signature = Buffer.alloc(0);
    message.guardianAddr = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.observationRequest = reader.bytes() as Buffer;
          break;
        case 2:
          message.signature = reader.bytes() as Buffer;
          break;
        case 3:
          message.guardianAddr = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedObservationRequest {
    const message = {
      ...baseSignedObservationRequest,
    } as SignedObservationRequest;
    message.observationRequest = Buffer.alloc(0);
    message.signature = Buffer.alloc(0);
    message.guardianAddr = Buffer.alloc(0);
    if (
      object.observationRequest !== undefined &&
      object.observationRequest !== null
    ) {
      message.observationRequest = Buffer.from(
        bytesFromBase64(object.observationRequest)
      );
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = Buffer.from(bytesFromBase64(object.signature));
    }
    if (object.guardianAddr !== undefined && object.guardianAddr !== null) {
      message.guardianAddr = Buffer.from(bytesFromBase64(object.guardianAddr));
    }
    return message;
  },

  toJSON(message: SignedObservationRequest): unknown {
    const obj: any = {};
    message.observationRequest !== undefined &&
      (obj.observationRequest = base64FromBytes(
        message.observationRequest !== undefined
          ? message.observationRequest
          : Buffer.alloc(0)
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : Buffer.alloc(0)
      ));
    message.guardianAddr !== undefined &&
      (obj.guardianAddr = base64FromBytes(
        message.guardianAddr !== undefined
          ? message.guardianAddr
          : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<SignedObservationRequest>
  ): SignedObservationRequest {
    const message = {
      ...baseSignedObservationRequest,
    } as SignedObservationRequest;
    if (
      object.observationRequest !== undefined &&
      object.observationRequest !== null
    ) {
      message.observationRequest = object.observationRequest;
    } else {
      message.observationRequest = Buffer.alloc(0);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = Buffer.alloc(0);
    }
    if (object.guardianAddr !== undefined && object.guardianAddr !== null) {
      message.guardianAddr = object.guardianAddr;
    } else {
      message.guardianAddr = Buffer.alloc(0);
    }
    return message;
  },
};

const baseObservationRequest: object = { chainId: 0 };

export const ObservationRequest = {
  encode(
    message: ObservationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).uint32(message.chainId);
    }
    if (message.txHash.length !== 0) {
      writer.uint32(18).bytes(message.txHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObservationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObservationRequest } as ObservationRequest;
    message.txHash = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
          break;
        case 2:
          message.txHash = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObservationRequest {
    const message = { ...baseObservationRequest } as ObservationRequest;
    message.txHash = Buffer.alloc(0);
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = Number(object.chainId);
    } else {
      message.chainId = 0;
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = Buffer.from(bytesFromBase64(object.txHash));
    }
    return message;
  },

  toJSON(message: ObservationRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.txHash !== undefined &&
      (obj.txHash = base64FromBytes(
        message.txHash !== undefined ? message.txHash : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ObservationRequest>): ObservationRequest {
    const message = { ...baseObservationRequest } as ObservationRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = 0;
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = object.txHash;
    } else {
      message.txHash = Buffer.alloc(0);
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
