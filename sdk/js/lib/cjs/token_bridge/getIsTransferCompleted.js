"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsTransferCompletedAlgorand = exports.getIsTransferCompletedSolana = exports.getIsTransferCompletedTerra = exports.getIsTransferCompletedEth = void 0;
var web3_js_1 = require("@solana/web3.js");
var algosdk_1 = require("algosdk");
var axios_1 = __importDefault(require("axios"));
var _1 = require(".");
var __1 = require("..");
var algorand_1 = require("../algorand");
var bridge_1 = require("../bridge");
var ethers_contracts_1 = require("../ethers-contracts");
var wasm_1 = require("../solana/wasm");
var bigint_1 = require("../utils/bigint");
function getIsTransferCompletedEth(tokenBridgeAddress, provider, signedVAA) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenBridge, signedVAAHash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tokenBridge = ethers_contracts_1.Bridge__factory.connect(tokenBridgeAddress, provider);
                    return [4 /*yield*/, bridge_1.getSignedVAAHash(signedVAA)];
                case 1:
                    signedVAAHash = _a.sent();
                    return [4 /*yield*/, tokenBridge.isTransferCompleted(signedVAAHash)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getIsTransferCompletedEth = getIsTransferCompletedEth;
function getIsTransferCompletedTerra(tokenBridgeAddress, signedVAA, client, gasPriceUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var msg, gasPrices, account, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _1.redeemOnTerra(tokenBridgeAddress, __1.TERRA_REDEEMED_CHECK_WALLET_ADDRESS, signedVAA)];
                case 1:
                    msg = _a.sent();
                    return [4 /*yield*/, axios_1.default.get(gasPriceUrl).then(function (result) { return result.data; })];
                case 2:
                    gasPrices = _a.sent();
                    return [4 /*yield*/, client.auth.accountInfo(__1.TERRA_REDEEMED_CHECK_WALLET_ADDRESS)];
                case 3:
                    account = _a.sent();
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, client.tx.estimateFee([
                            {
                                sequenceNumber: account.getSequenceNumber(),
                                publicKey: account.getPublicKey(),
                            },
                        ], {
                            msgs: [msg],
                            memo: "already redeemed calculation",
                            feeDenoms: ["uluna"],
                            gasPrices: gasPrices,
                        })];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    e_1 = _a.sent();
                    // redeemed if the VAA was already executed
                    return [2 /*return*/, e_1.response.data.message.includes("VaaAlreadyExecuted")];
                case 7: return [2 /*return*/, false];
            }
        });
    });
}
exports.getIsTransferCompletedTerra = getIsTransferCompletedTerra;
function getIsTransferCompletedSolana(tokenBridgeAddress, signedVAA, connection) {
    return __awaiter(this, void 0, void 0, function () {
        var claim_address, claimAddress, claimInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wasm_1.importCoreWasm()];
                case 1:
                    claim_address = (_a.sent()).claim_address;
                    return [4 /*yield*/, claim_address(tokenBridgeAddress, signedVAA)];
                case 2:
                    claimAddress = _a.sent();
                    return [4 /*yield*/, connection.getAccountInfo(new web3_js_1.PublicKey(claimAddress), "confirmed")];
                case 3:
                    claimInfo = _a.sent();
                    return [2 /*return*/, !!claimInfo];
            }
        });
    });
}
exports.getIsTransferCompletedSolana = getIsTransferCompletedSolana;
// Algorand
/**
 * This function is used to check if a VAA has been redeemed by looking at a specific bit.
 * @param client AlgodV2 client
 * @param appId Application Id
 * @param addr Wallet address. Someone has to pay for this.
 * @param seq The sequence number of the redemption
 * @returns true, if the bit was set and VAA was redeemed, false otherwise.
 */
function checkBitsSet(client, appId, addr, seq) {
    return __awaiter(this, void 0, void 0, function () {
        var retval, appState, acctInfo, als, BIG_MAX_BITS, BIG_EIGHT, start, beg, s, b, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    retval = false;
                    appState = [];
                    return [4 /*yield*/, client.accountInformation(addr).do()];
                case 1:
                    acctInfo = _a.sent();
                    als = acctInfo["apps-local-state"];
                    als.forEach(function (app) {
                        if (BigInt(app["id"]) === appId) {
                            appState = app["key-value"];
                        }
                    });
                    if (appState.length === 0) {
                        return [2 /*return*/, retval];
                    }
                    BIG_MAX_BITS = BigInt(algorand_1.MAX_BITS);
                    BIG_EIGHT = BigInt(8);
                    start = (seq / BIG_MAX_BITS) * BIG_MAX_BITS;
                    beg = bigint_1.safeBigIntToNumber(seq - start);
                    s = Math.floor(beg / algorand_1.BITS_PER_KEY);
                    b = Math.floor((beg - s * algorand_1.BITS_PER_KEY) / 8);
                    key = Buffer.from(algosdk_1.bigIntToBytes(s, 1)).toString("base64");
                    appState.forEach(function (kv) {
                        if (kv["key"] === key) {
                            var v = Buffer.from(kv["value"]["bytes"], "base64");
                            var bt = 1 << bigint_1.safeBigIntToNumber(seq % BIG_EIGHT);
                            retval = (v[b] & bt) != 0;
                            return;
                        }
                    });
                    return [2 /*return*/, retval];
            }
        });
    });
}
/**
 * <p>Returns true if this transfer was completed on Algorand</p>
 * @param client AlgodV2 client
 * @param appId Most likely the Token bridge ID
 * @param signedVAA VAA to check
 * @param wallet The account paying the bill for this (it isn't free)
 * @returns true if VAA has been redeemed, false otherwise
 */
function getIsTransferCompletedAlgorand(client, appId, signedVAA) {
    return __awaiter(this, void 0, void 0, function () {
        var parsedVAA, seq, chainRaw, em, _a, doesExist, lsa, seqAddr, retVal;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    parsedVAA = algorand_1._parseVAAAlgorand(signedVAA);
                    seq = parsedVAA.get("sequence");
                    chainRaw = parsedVAA.get("chainRaw");
                    em = parsedVAA.get("emitter");
                    return [4 /*yield*/, algorand_1.calcLogicSigAccount(client, appId, seq / BigInt(algorand_1.MAX_BITS), chainRaw + em)];
                case 1:
                    _a = _b.sent(), doesExist = _a.doesExist, lsa = _a.lsa;
                    if (!doesExist) {
                        return [2 /*return*/, false];
                    }
                    seqAddr = lsa.address();
                    return [4 /*yield*/, checkBitsSet(client, appId, seqAddr, seq)];
                case 2:
                    retVal = _b.sent();
                    return [2 /*return*/, retVal];
            }
        });
    });
}
exports.getIsTransferCompletedAlgorand = getIsTransferCompletedAlgorand;
