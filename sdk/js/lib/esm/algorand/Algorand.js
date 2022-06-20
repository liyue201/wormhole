// Algorand.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { bigIntToBytes, decodeAddress, encodeAddress, getApplicationAddress, LogicSigAccount, makeApplicationCallTxnFromObject, makeApplicationOptInTxnFromObject, makeAssetTransferTxnWithSuggestedParamsFromObject, makePaymentTxnWithSuggestedParamsFromObject, OnApplicationComplete, signLogicSigTransaction, } from "algosdk";
import abi from "algosdk";
import { BigNumber } from "ethers";
import { keccak256 } from "ethers/lib/utils";
import { getEmitterAddressAlgorand } from "../bridge";
import { CHAIN_ID_ALGORAND, hexToUint8Array, textToHexString, textToUint8Array, uint8ArrayToHex, } from "../utils";
import { safeBigIntToNumber } from "../utils/bigint";
import { TmplSig } from "./TmplSig";
var SEED_AMT = 1002000;
var ZERO_PAD_BYTES = "0000000000000000000000000000000000000000000000000000000000000000";
var MAX_KEYS = 15;
var MAX_BYTES_PER_KEY = 127;
var BITS_PER_BYTE = 8;
export var BITS_PER_KEY = MAX_BYTES_PER_KEY * BITS_PER_BYTE;
var MAX_BYTES = MAX_BYTES_PER_KEY * MAX_KEYS;
export var MAX_BITS = BITS_PER_BYTE * MAX_BYTES;
var MAX_SIGS_PER_TXN = 9;
var ALGO_VERIFY_HASH = "EZATROXX2HISIRZDRGXW4LRQ46Z6IUJYYIHU3PJGP7P5IQDPKVX42N767A";
var ALGO_VERIFY = new Uint8Array([
    6, 32, 4, 1, 0, 32, 20, 38, 1, 0, 49, 32, 50, 3, 18, 68, 49, 1, 35, 18, 68,
    49, 16, 129, 6, 18, 68, 54, 26, 1, 54, 26, 3, 54, 26, 2, 136, 0, 3, 68, 34,
    67, 53, 2, 53, 1, 53, 0, 40, 53, 240, 40, 53, 241, 52, 0, 21, 53, 5, 35, 53,
    3, 35, 53, 4, 52, 3, 52, 5, 12, 65, 0, 68, 52, 1, 52, 0, 52, 3, 129, 65, 8,
    34, 88, 23, 52, 0, 52, 3, 34, 8, 36, 88, 52, 0, 52, 3, 129, 33, 8, 36, 88, 7,
    0, 53, 241, 53, 240, 52, 2, 52, 4, 37, 88, 52, 240, 52, 241, 80, 2, 87, 12,
    20, 18, 68, 52, 3, 129, 66, 8, 53, 3, 52, 4, 37, 8, 53, 4, 66, 255, 180, 34,
    137,
]);
var accountExistsCache = new Set();
/**
 * Return the message fee for the core bridge
 * @param client An Algodv2 client
 * @param bridgeId The application ID of the core bridge
 * @returns The message fee for the core bridge
 */
export function getMessageFee(client, bridgeId) {
    return __awaiter(this, void 0, void 0, function () {
        var applInfo, globalState, key, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client
                        .getApplicationByID(safeBigIntToNumber(bridgeId))
                        .do()];
                case 1:
                    applInfo = _a.sent();
                    globalState = applInfo["params"]["global-state"];
                    key = Buffer.from("MessageFee", "binary").toString("base64");
                    ret = BigInt(0);
                    globalState.forEach(function (el) {
                        if (el["key"] === key) {
                            ret = BigInt(el["value"]["uint"]);
                            return;
                        }
                    });
                    return [2 /*return*/, ret];
            }
        });
    });
}
/**
 * Checks to see it the account exists for the application
 * @param client An Algodv2 client
 * @param appId Application ID
 * @param acctAddr Account address to check
 * @returns true, if account exists for application.  Otherwise, returns false
 */
export function accountExists(client, appId, acctAddr) {
    return __awaiter(this, void 0, void 0, function () {
        var ret, acctInfo, als, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (accountExistsCache.has([appId, acctAddr]))
                        return [2 /*return*/, true];
                    ret = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.accountInformation(acctAddr).do()];
                case 2:
                    acctInfo = _a.sent();
                    als = acctInfo["apps-local-state"];
                    if (!als) {
                        return [2 /*return*/, ret];
                    }
                    als.forEach(function (app) {
                        if (BigInt(app["id"]) === appId) {
                            accountExistsCache.add([appId, acctAddr]);
                            ret = true;
                            return;
                        }
                    });
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, ret];
            }
        });
    });
}
/**
 * Calculates the logic sig account for the application
 * @param client An Algodv2 client
 * @param appId Application ID
 * @param appIndex Application index
 * @param emitterId Emitter address
 * @returns LogicSigAccountInfo
 */
export function calcLogicSigAccount(client, appId, appIndex, emitterId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, ts, lsa, sigAddr, doesExist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = {
                        addrIdx: appIndex,
                        appAddress: getEmitterAddressAlgorand(appId),
                        appId: appId,
                        emitterId: emitterId,
                    };
                    ts = new TmplSig(client);
                    return [4 /*yield*/, ts.populate(data)];
                case 1:
                    lsa = _a.sent();
                    sigAddr = lsa.address();
                    return [4 /*yield*/, accountExists(client, appId, sigAddr)];
                case 2:
                    doesExist = _a.sent();
                    return [2 /*return*/, {
                            lsa: lsa,
                            doesExist: doesExist,
                        }];
            }
        });
    });
}
/**
 * Calculates the logic sig account for the application
 * @param client An Algodv2 client
 * @param senderAddr Sender address
 * @param appId Application ID
 * @param appIndex Application index
 * @param emitterId Emitter address
 * @returns Address and array of TransactionSignerPairs
 */
export function optin(client, senderAddr, appId, appIndex, emitterId) {
    return __awaiter(this, void 0, void 0, function () {
        var appAddr, _a, doesExist, lsa, sigAddr, txs, params, seedTxn, optinTxn;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    appAddr = getApplicationAddress(appId);
                    return [4 /*yield*/, calcLogicSigAccount(client, appId, appIndex, emitterId)];
                case 1:
                    _a = _b.sent(), doesExist = _a.doesExist, lsa = _a.lsa;
                    sigAddr = lsa.address();
                    txs = [];
                    if (!!doesExist) return [3 /*break*/, 3];
                    return [4 /*yield*/, client.getTransactionParams().do()];
                case 2:
                    params = _b.sent();
                    seedTxn = makePaymentTxnWithSuggestedParamsFromObject({
                        from: senderAddr,
                        to: sigAddr,
                        amount: SEED_AMT,
                        suggestedParams: params,
                    });
                    seedTxn.fee = seedTxn.fee * 2;
                    txs.push({ tx: seedTxn, signer: null });
                    optinTxn = makeApplicationOptInTxnFromObject({
                        from: sigAddr,
                        suggestedParams: params,
                        appIndex: safeBigIntToNumber(appId),
                        rekeyTo: appAddr,
                    });
                    optinTxn.fee = 0;
                    txs.push({
                        tx: optinTxn,
                        signer: {
                            addr: lsa.address(),
                            signTxn: function (txn) {
                                return Promise.resolve(signLogicSigTransaction(txn, lsa).blob);
                            },
                        },
                    });
                    accountExistsCache.add([appId, lsa.address()]);
                    _b.label = 3;
                case 3: return [2 /*return*/, {
                        addr: sigAddr,
                        txs: txs,
                    }];
            }
        });
    });
}
function extract3(buffer, start, size) {
    return buffer.slice(start, start + size);
}
/**
 * Parses the VAA into a Map
 * @param vaa The VAA to be parsed
 * @returns The Map<string, any> containing the parsed elements of the VAA
 */
export function _parseVAAAlgorand(vaa) {
    var ret = new Map();
    var buf = Buffer.from(vaa);
    ret.set("version", buf.readIntBE(0, 1));
    ret.set("index", buf.readIntBE(1, 4));
    ret.set("siglen", buf.readIntBE(5, 1));
    var siglen = ret.get("siglen");
    if (siglen) {
        ret.set("signatures", extract3(vaa, 6, siglen * 66));
    }
    var sigs = [];
    for (var i = 0; i < siglen; i++) {
        var start = 6 + i * 66;
        var len = 66;
        var sigBuf = extract3(vaa, start, len);
        sigs.push(sigBuf);
    }
    ret.set("sigs", sigs);
    var off = siglen * 66 + 6;
    ret.set("digest", vaa.slice(off)); // This is what is actually signed...
    ret.set("timestamp", buf.readIntBE(off, 4));
    off += 4;
    ret.set("nonce", buf.readIntBE(off, 4));
    off += 4;
    ret.set("chainRaw", Buffer.from(extract3(vaa, off, 2)).toString("hex"));
    ret.set("chain", buf.readIntBE(off, 2));
    off += 2;
    ret.set("emitter", Buffer.from(extract3(vaa, off, 32)).toString("hex"));
    off += 32;
    ret.set("sequence", buf.readBigUInt64BE(off));
    off += 8;
    ret.set("consistency", buf.readIntBE(off, 1));
    off += 1;
    ret.set("Meta", "Unknown");
    if (!Buffer.compare(extract3(buf, off, 32), Buffer.from("000000000000000000000000000000000000000000546f6b656e427269646765", "hex"))) {
        ret.set("Meta", "TokenBridge");
        ret.set("module", extract3(vaa, off, 32));
        off += 32;
        ret.set("action", buf.readIntBE(off, 1));
        off += 1;
        if (ret.get("action") === 1) {
            ret.set("Meta", "TokenBridge RegisterChain");
            ret.set("targetChain", buf.readIntBE(off, 2));
            off += 2;
            ret.set("EmitterChainID", buf.readIntBE(off, 2));
            off += 2;
            ret.set("targetEmitter", extract3(vaa, off, 32));
            off += 32;
        }
        else if (ret.get("action") === 2) {
            ret.set("Meta", "TokenBridge UpgradeContract");
            ret.set("targetChain", buf.readIntBE(off, 2));
            off += 2;
            ret.set("newContract", extract3(vaa, off, 32));
            off += 32;
        }
    }
    else if (!Buffer.compare(extract3(buf, off, 32), Buffer.from("00000000000000000000000000000000000000000000000000000000436f7265", "hex"))) {
        ret.set("Meta", "CoreGovernance");
        ret.set("module", extract3(vaa, off, 32));
        off += 32;
        ret.set("action", buf.readIntBE(off, 1));
        off += 1;
        ret.set("targetChain", buf.readIntBE(off, 2));
        off += 2;
        ret.set("NewGuardianSetIndex", buf.readIntBE(off, 4));
    }
    //    ret.set("len", vaa.slice(off).length)
    //    ret.set("act", buf.readIntBE(off, 1))
    if (vaa.slice(off).length === 100 && buf.readIntBE(off, 1) === 2) {
        ret.set("Meta", "TokenBridge Attest");
        ret.set("Type", buf.readIntBE(off, 1));
        off += 1;
        ret.set("Contract", uint8ArrayToHex(extract3(vaa, off, 32)));
        off += 32;
        ret.set("FromChain", buf.readIntBE(off, 2));
        off += 2;
        ret.set("Decimals", buf.readIntBE(off, 1));
        off += 1;
        ret.set("Symbol", extract3(vaa, off, 32));
        off += 32;
        ret.set("Name", extract3(vaa, off, 32));
    }
    if (vaa.slice(off).length === 133 && buf.readIntBE(off, 1) === 1) {
        ret.set("Meta", "TokenBridge Transfer");
        ret.set("Type", buf.readIntBE(off, 1));
        off += 1;
        ret.set("Amount", extract3(vaa, off, 32));
        off += 32;
        ret.set("Contract", uint8ArrayToHex(extract3(vaa, off, 32)));
        off += 32;
        ret.set("FromChain", buf.readIntBE(off, 2));
        off += 2;
        ret.set("ToAddress", extract3(vaa, off, 32));
        off += 32;
        ret.set("ToChain", buf.readIntBE(off, 2));
        off += 2;
        ret.set("Fee", extract3(vaa, off, 32));
    }
    if (off >= buf.length) {
        return ret;
    }
    if (buf.readIntBE(off, 1) === 3) {
        ret.set("Meta", "TokenBridge Transfer With Payload");
        ret.set("Type", buf.readIntBE(off, 1));
        off += 1;
        ret.set("Amount", extract3(vaa, off, 32));
        off += 32;
        ret.set("Contract", uint8ArrayToHex(extract3(vaa, off, 32)));
        off += 32;
        ret.set("FromChain", buf.readIntBE(off, 2));
        off += 2;
        ret.set("ToAddress", extract3(vaa, off, 32));
        off += 32;
        ret.set("ToChain", buf.readIntBE(off, 2));
        off += 2;
        ret.set("Fee", extract3(vaa, off, 32));
        off += 32;
        ret.set("Payload", vaa.slice(off));
    }
    return ret;
}
/**
 * Returns the local data for an application ID
 * @param client Algodv2 client
 * @param appId Application ID of interest
 * @param address Address of the account
 * @returns Uint8Array of data squirreled away
 */
export function decodeLocalState(client, appId, address) {
    return __awaiter(this, void 0, void 0, function () {
        var app_state, ai, _a, _b, app, ret, empty, e, m, sk, vals_1, app_state_1, app_state_1_1, kv, k, key, v;
        var e_2, _c, e_3, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    app_state = null;
                    return [4 /*yield*/, client.accountInformation(address).do()];
                case 1:
                    ai = _e.sent();
                    try {
                        for (_a = __values(ai["apps-local-state"]), _b = _a.next(); !_b.done; _b = _a.next()) {
                            app = _b.value;
                            if (BigInt(app["id"]) === appId) {
                                app_state = app["key-value"];
                                break;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    ret = Buffer.alloc(0);
                    empty = Buffer.alloc(0);
                    if (app_state) {
                        e = Buffer.alloc(127);
                        m = Buffer.from("meta");
                        sk = [];
                        vals_1 = new Map();
                        try {
                            for (app_state_1 = __values(app_state), app_state_1_1 = app_state_1.next(); !app_state_1_1.done; app_state_1_1 = app_state_1.next()) {
                                kv = app_state_1_1.value;
                                k = Buffer.from(kv["key"], "base64");
                                key = k.readInt8();
                                if (!Buffer.compare(k, m)) {
                                    continue;
                                }
                                v = Buffer.from(kv["value"]["bytes"], "base64");
                                if (Buffer.compare(v, e)) {
                                    vals_1.set(key.toString(), v);
                                    sk.push(key.toString());
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (app_state_1_1 && !app_state_1_1.done && (_d = app_state_1.return)) _d.call(app_state_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        sk.sort(function (a, b) { return a.localeCompare(b, "en", { numeric: true }); });
                        sk.forEach(function (v) {
                            ret = Buffer.concat([ret, vals_1.get(v) || empty]);
                        });
                    }
                    return [2 /*return*/, new Uint8Array(ret)];
            }
        });
    });
}
/**
 * Checks if the asset has been opted in by the receiver
 * @param client Algodv2 client
 * @param asset Algorand asset index
 * @param receiver Account address
 * @returns True if the asset was opted in, else false
 */
export function assetOptinCheck(client, asset, receiver) {
    return __awaiter(this, void 0, void 0, function () {
        var acctInfo, assets, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.accountInformation(receiver).do()];
                case 1:
                    acctInfo = _a.sent();
                    assets = acctInfo.assets;
                    ret = false;
                    assets.forEach(function (a) {
                        var assetId = BigInt(a["asset-id"]);
                        if (assetId === asset) {
                            ret = true;
                            return;
                        }
                    });
                    return [2 /*return*/, ret];
            }
        });
    });
}
var SubmitVAAState = /** @class */ (function () {
    function SubmitVAAState(vaaMap, accounts, txs, guardianAddr) {
        this.vaaMap = vaaMap;
        this.accounts = accounts;
        this.txs = txs;
        this.guardianAddr = guardianAddr;
    }
    return SubmitVAAState;
}());
/**
 * Submits just the header of the VAA
 * @param client AlgodV2 client
 * @param bridgeId Application ID of the core bridge
 * @param vaa The VAA (Just the header is used)
 * @param senderAddr Sending account address
 * @param appid Application ID
 * @returns Current VAA state
 */
export function submitVAAHeader(client, bridgeId, vaa, senderAddr, appid) {
    return __awaiter(this, void 0, void 0, function () {
        var parsedVAA, seq, chainRaw, em, index, txs, _a, seqAddr, seqOptInTxs, guardianPgmName, _b, guardianAddr, guardianOptInTxs, accts, keys, params, digest, numSigs, numTxns, SIG_LEN, BSIZE, signatures, verifySigArg, lsa, nt, sigs, GuardianKeyLen, numSigsThisTxn, arraySize, keySet, i, idx, key, appTxn_1, appTxn;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    parsedVAA = _parseVAAAlgorand(vaa);
                    seq = parsedVAA.get("sequence") / BigInt(MAX_BITS);
                    chainRaw = parsedVAA.get("chainRaw");
                    em = parsedVAA.get("emitter");
                    index = parsedVAA.get("index");
                    txs = [];
                    return [4 /*yield*/, optin(client, senderAddr, appid, seq, chainRaw + em)];
                case 1:
                    _a = _c.sent(), seqAddr = _a.addr, seqOptInTxs = _a.txs;
                    txs.push.apply(txs, __spreadArray([], __read(seqOptInTxs)));
                    guardianPgmName = textToHexString("guardian");
                    return [4 /*yield*/, optin(client, senderAddr, bridgeId, BigInt(index), guardianPgmName)];
                case 2:
                    _b = _c.sent(), guardianAddr = _b.addr, guardianOptInTxs = _b.txs;
                    txs.push.apply(txs, __spreadArray([], __read(guardianOptInTxs)));
                    accts = [seqAddr, guardianAddr];
                    return [4 /*yield*/, decodeLocalState(client, bridgeId, guardianAddr)];
                case 3:
                    keys = _c.sent();
                    return [4 /*yield*/, client
                            .getTransactionParams()
                            .do()];
                case 4:
                    params = _c.sent();
                    digest = keccak256(keccak256(parsedVAA.get("digest"))).slice(2);
                    numSigs = parsedVAA.get("siglen");
                    numTxns = Math.floor(numSigs / MAX_SIGS_PER_TXN) + 1;
                    SIG_LEN = 66;
                    BSIZE = SIG_LEN * MAX_SIGS_PER_TXN;
                    signatures = parsedVAA.get("signatures");
                    verifySigArg = textToUint8Array("verifySigs");
                    lsa = new LogicSigAccount(ALGO_VERIFY);
                    for (nt = 0; nt < numTxns; nt++) {
                        sigs = signatures.slice(nt * BSIZE);
                        if (sigs.length > BSIZE) {
                            sigs = sigs.slice(0, BSIZE);
                        }
                        GuardianKeyLen = 20;
                        numSigsThisTxn = sigs.length / SIG_LEN;
                        arraySize = numSigsThisTxn * GuardianKeyLen;
                        keySet = new Uint8Array(arraySize);
                        for (i = 0; i < numSigsThisTxn; i++) {
                            idx = sigs[i * SIG_LEN];
                            key = keys.slice(idx * GuardianKeyLen + 1, (idx + 1) * GuardianKeyLen + 1);
                            keySet.set(key, i * 20);
                        }
                        appTxn_1 = makeApplicationCallTxnFromObject({
                            appArgs: [verifySigArg, sigs, keySet, hexToUint8Array(digest)],
                            accounts: accts,
                            appIndex: safeBigIntToNumber(bridgeId),
                            from: ALGO_VERIFY_HASH,
                            onComplete: OnApplicationComplete.NoOpOC,
                            suggestedParams: params,
                        });
                        appTxn_1.fee = 0;
                        txs.push({
                            tx: appTxn_1,
                            signer: {
                                addr: lsa.address(),
                                signTxn: function (txn) {
                                    return Promise.resolve(signLogicSigTransaction(txn, lsa).blob);
                                },
                            },
                        });
                    }
                    appTxn = makeApplicationCallTxnFromObject({
                        appArgs: [textToUint8Array("verifyVAA"), vaa],
                        accounts: accts,
                        appIndex: safeBigIntToNumber(bridgeId),
                        from: senderAddr,
                        onComplete: OnApplicationComplete.NoOpOC,
                        suggestedParams: params,
                    });
                    appTxn.fee = appTxn.fee * (1 + numTxns);
                    txs.push({ tx: appTxn, signer: null });
                    return [2 /*return*/, new SubmitVAAState(parsedVAA, accts, txs, guardianAddr)];
            }
        });
    });
}
/**
 * Submits the VAA to the application
 * @param client AlgodV2 client
 * @param tokenBridgeId Application ID of the token bridge
 * @param bridgeId Application ID of the core bridge
 * @param vaa The VAA to be submitted
 * @param senderAddr Sending account address
 * @returns Confirmation log
 */
export function _submitVAAAlgorand(client, tokenBridgeId, bridgeId, vaa, senderAddr) {
    return __awaiter(this, void 0, void 0, function () {
        var sstate, parsedVAA, accts, txs, ngsi, guardianPgmName, _a, newGuardianAddr, newGuardianOptInTxs, meta, chainAddr, result, assetId, result, params, asset, foreignAssets, tmp, buf, foreignAssets, a, asset, tmp, aid, addr, m;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, submitVAAHeader(client, bridgeId, vaa, senderAddr, tokenBridgeId)];
                case 1:
                    sstate = _b.sent();
                    parsedVAA = sstate.vaaMap;
                    accts = sstate.accounts;
                    txs = sstate.txs;
                    if (!(parsedVAA.get("Meta") === "CoreGovernance" &&
                        parsedVAA.get("action") === 2)) return [3 /*break*/, 3];
                    ngsi = parsedVAA.get("NewGuardianSetIndex");
                    guardianPgmName = textToHexString("guardian");
                    return [4 /*yield*/, optin(client, senderAddr, bridgeId, ngsi, guardianPgmName)];
                case 2:
                    _a = _b.sent(), newGuardianAddr = _a.addr, newGuardianOptInTxs = _a.txs;
                    accts.push(newGuardianAddr);
                    txs.unshift.apply(txs, __spreadArray([], __read(newGuardianOptInTxs)));
                    _b.label = 3;
                case 3:
                    meta = parsedVAA.get("Meta");
                    chainAddr = "";
                    if (!(meta === "TokenBridge Attest" ||
                        meta === "TokenBridge Transfer" ||
                        meta === "TokenBridge Transfer With Payload")) return [3 /*break*/, 8];
                    if (!(parsedVAA.get("FromChain") !== CHAIN_ID_ALGORAND)) return [3 /*break*/, 5];
                    return [4 /*yield*/, optin(client, senderAddr, tokenBridgeId, parsedVAA.get("FromChain"), parsedVAA.get("Contract"))];
                case 4:
                    result = _b.sent();
                    chainAddr = result.addr;
                    txs.unshift.apply(txs, __spreadArray([], __read(result.txs)));
                    return [3 /*break*/, 7];
                case 5:
                    assetId = hexToNativeAssetBigIntAlgorand(parsedVAA.get("Contract"));
                    return [4 /*yield*/, optin(client, senderAddr, tokenBridgeId, assetId, textToHexString("native"))];
                case 6:
                    result = _b.sent();
                    chainAddr = result.addr;
                    txs.unshift.apply(txs, __spreadArray([], __read(result.txs)));
                    _b.label = 7;
                case 7:
                    accts.push(chainAddr);
                    _b.label = 8;
                case 8: return [4 /*yield*/, client
                        .getTransactionParams()
                        .do()];
                case 9:
                    params = _b.sent();
                    if (meta === "CoreGovernance") {
                        txs.push({
                            tx: makeApplicationCallTxnFromObject({
                                appArgs: [textToUint8Array("governance"), vaa],
                                accounts: accts,
                                appIndex: safeBigIntToNumber(bridgeId),
                                from: senderAddr,
                                onComplete: OnApplicationComplete.NoOpOC,
                                suggestedParams: params,
                            }),
                            signer: null,
                        });
                        txs.push({
                            tx: makeApplicationCallTxnFromObject({
                                appArgs: [textToUint8Array("nop"), bigIntToBytes(5, 8)],
                                appIndex: safeBigIntToNumber(bridgeId),
                                from: senderAddr,
                                onComplete: OnApplicationComplete.NoOpOC,
                                suggestedParams: params,
                            }),
                            signer: null,
                        });
                    }
                    if (meta === "TokenBridge RegisterChain" ||
                        meta === "TokenBridge UpgradeContract") {
                        txs.push({
                            tx: makeApplicationCallTxnFromObject({
                                appArgs: [textToUint8Array("governance"), vaa],
                                accounts: accts,
                                appIndex: safeBigIntToNumber(tokenBridgeId),
                                foreignApps: [safeBigIntToNumber(bridgeId)],
                                from: senderAddr,
                                onComplete: OnApplicationComplete.NoOpOC,
                                suggestedParams: params,
                            }),
                            signer: null,
                        });
                    }
                    if (!(meta === "TokenBridge Attest")) return [3 /*break*/, 11];
                    return [4 /*yield*/, decodeLocalState(client, tokenBridgeId, chainAddr)];
                case 10:
                    asset = _b.sent();
                    foreignAssets = [];
                    if (asset.length > 8) {
                        tmp = Buffer.from(asset.slice(0, 8));
                        foreignAssets.push(safeBigIntToNumber(tmp.readBigUInt64BE(0)));
                    }
                    txs.push({
                        tx: makePaymentTxnWithSuggestedParamsFromObject({
                            from: senderAddr,
                            to: chainAddr,
                            amount: 100000,
                            suggestedParams: params,
                        }),
                        signer: null,
                    });
                    buf = new Uint8Array(1);
                    buf[0] = 0x01;
                    txs.push({
                        tx: makeApplicationCallTxnFromObject({
                            appArgs: [textToUint8Array("nop"), buf],
                            appIndex: safeBigIntToNumber(tokenBridgeId),
                            from: senderAddr,
                            onComplete: OnApplicationComplete.NoOpOC,
                            suggestedParams: params,
                        }),
                        signer: null,
                    });
                    buf = new Uint8Array(1);
                    buf[0] = 0x02;
                    txs.push({
                        tx: makeApplicationCallTxnFromObject({
                            appArgs: [textToUint8Array("nop"), buf],
                            appIndex: safeBigIntToNumber(tokenBridgeId),
                            from: senderAddr,
                            onComplete: OnApplicationComplete.NoOpOC,
                            suggestedParams: params,
                        }),
                        signer: null,
                    });
                    txs.push({
                        tx: makeApplicationCallTxnFromObject({
                            accounts: accts,
                            appArgs: [textToUint8Array("receiveAttest"), vaa],
                            appIndex: safeBigIntToNumber(tokenBridgeId),
                            foreignAssets: foreignAssets,
                            from: senderAddr,
                            onComplete: OnApplicationComplete.NoOpOC,
                            suggestedParams: params,
                        }),
                        signer: null,
                    });
                    txs[txs.length - 1].tx.fee = txs[txs.length - 1].tx.fee * 2;
                    _b.label = 11;
                case 11:
                    if (!(meta === "TokenBridge Transfer" ||
                        meta === "TokenBridge Transfer With Payload")) return [3 /*break*/, 17];
                    foreignAssets = [];
                    a = 0;
                    if (!(parsedVAA.get("FromChain") !== CHAIN_ID_ALGORAND)) return [3 /*break*/, 13];
                    return [4 /*yield*/, decodeLocalState(client, tokenBridgeId, chainAddr)];
                case 12:
                    asset = _b.sent();
                    if (asset.length > 8) {
                        tmp = Buffer.from(asset.slice(0, 8));
                        a = safeBigIntToNumber(tmp.readBigUInt64BE(0));
                    }
                    return [3 /*break*/, 14];
                case 13:
                    a = parseInt(parsedVAA.get("Contract"), 16);
                    _b.label = 14;
                case 14:
                    aid = 0;
                    addr = void 0;
                    if ((parsedVAA.get("ToChain") === 8) && (parsedVAA.get("Type") === 3)) {
                        aid = Number(hexToNativeAssetBigIntAlgorand(parsedVAA.get("ToAddress")));
                        addr = getApplicationAddress(aid);
                    }
                    else {
                        addr = encodeAddress(hexToUint8Array(parsedVAA.get("ToAddress")));
                    }
                    if (!(a !== 0)) return [3 /*break*/, 16];
                    foreignAssets.push(a);
                    return [4 /*yield*/, assetOptinCheck(client, BigInt(a), addr)];
                case 15:
                    if (!(_b.sent())) {
                        if (senderAddr != addr) {
                            throw new Error("cannot ASA optin for somebody else (asset " + a.toString() + ")");
                        }
                        txs.unshift({
                            tx: makeAssetTransferTxnWithSuggestedParamsFromObject({
                                amount: 0,
                                assetIndex: a,
                                from: senderAddr,
                                suggestedParams: params,
                                to: senderAddr,
                            }),
                            signer: null,
                        });
                    }
                    _b.label = 16;
                case 16:
                    accts.push(addr);
                    txs.push({
                        tx: makeApplicationCallTxnFromObject({
                            accounts: accts,
                            appArgs: [textToUint8Array("completeTransfer"), vaa],
                            appIndex: safeBigIntToNumber(tokenBridgeId),
                            foreignAssets: foreignAssets,
                            from: senderAddr,
                            onComplete: OnApplicationComplete.NoOpOC,
                            suggestedParams: params,
                        }),
                        signer: null,
                    });
                    // We need to cover the inner transactions
                    if (Buffer.compare(parsedVAA.get("Fee"), Buffer.from(ZERO_PAD_BYTES, "hex")) === 0)
                        txs[txs.length - 1].tx.fee = txs[txs.length - 1].tx.fee * 2;
                    else
                        txs[txs.length - 1].tx.fee = txs[txs.length - 1].tx.fee * 3;
                    if (meta === "TokenBridge Transfer With Payload") {
                        txs[txs.length - 1].tx.appForeignApps = [aid];
                        m = abi.ABIMethod.fromSignature("portal_transfer(byte[])byte[]");
                        txs.push({
                            tx: makeApplicationCallTxnFromObject({
                                appArgs: [m.getSelector(), m.args[0].type.encode(vaa)],
                                appIndex: aid,
                                foreignAssets: foreignAssets,
                                from: senderAddr,
                                onComplete: OnApplicationComplete.NoOpOC,
                                suggestedParams: params,
                            }),
                            signer: null,
                        });
                    }
                    _b.label = 17;
                case 17: return [2 /*return*/, txs];
            }
        });
    });
}
export function uint8ArrayToNativeStringAlgorand(a) {
    return encodeAddress(a);
}
export function hexToNativeStringAlgorand(s) {
    return uint8ArrayToNativeStringAlgorand(hexToUint8Array(s));
}
export function nativeStringToHexAlgorand(s) {
    return uint8ArrayToHex(decodeAddress(s).publicKey);
}
export function hexToNativeAssetBigIntAlgorand(s) {
    return BigNumber.from(hexToUint8Array(s)).toBigInt();
}
export function hexToNativeAssetStringAlgorand(s) {
    return BigNumber.from(hexToUint8Array(s)).toString();
}
