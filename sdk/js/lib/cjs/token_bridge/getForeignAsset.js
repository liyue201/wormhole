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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getForeignAssetAlgorand = exports.getForeignAssetSolana = exports.getForeignAssetTerra = exports.getForeignAssetEth = void 0;
var web3_js_1 = require("@solana/web3.js");
var js_base64_1 = require("js-base64");
var algorand_1 = require("../algorand");
var ethers_contracts_1 = require("../ethers-contracts");
var wasm_1 = require("../solana/wasm");
var utils_1 = require("../utils");
/**
 * Returns a foreign asset address on Ethereum for a provided native chain and asset address, AddressZero if it does not exist
 * @param tokenBridgeAddress
 * @param provider
 * @param originChain
 * @param originAsset zero pad to 32 bytes
 * @returns
 */
function getForeignAssetEth(tokenBridgeAddress, provider, originChain, originAsset) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenBridge, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tokenBridge = ethers_contracts_1.Bridge__factory.connect(tokenBridgeAddress, provider);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, tokenBridge.wrappedAsset(utils_1.coalesceChainId(originChain), originAsset)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getForeignAssetEth = getForeignAssetEth;
function getForeignAssetTerra(tokenBridgeAddress, client, originChain, originAsset) {
    return __awaiter(this, void 0, void 0, function () {
        var result, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.wasm.contractQuery(tokenBridgeAddress, {
                            wrapped_registry: {
                                chain: utils_1.coalesceChainId(originChain),
                                address: js_base64_1.fromUint8Array(originAsset),
                            },
                        })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.address];
                case 2:
                    e_2 = _a.sent();
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getForeignAssetTerra = getForeignAssetTerra;
/**
 * Returns a foreign asset address on Solana for a provided native chain and asset address
 * @param connection
 * @param tokenBridgeAddress
 * @param originChain
 * @param originAsset zero pad to 32 bytes
 * @returns
 */
function getForeignAssetSolana(connection, tokenBridgeAddress, originChain, originAsset) {
    return __awaiter(this, void 0, void 0, function () {
        var wrapped_address, wrappedAddress, wrappedAddressPK, wrappedAssetAccountInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wasm_1.importTokenWasm()];
                case 1:
                    wrapped_address = (_a.sent()).wrapped_address;
                    wrappedAddress = wrapped_address(tokenBridgeAddress, originAsset, utils_1.coalesceChainId(originChain));
                    wrappedAddressPK = new web3_js_1.PublicKey(wrappedAddress);
                    return [4 /*yield*/, connection.getAccountInfo(wrappedAddressPK)];
                case 2:
                    wrappedAssetAccountInfo = _a.sent();
                    return [2 /*return*/, wrappedAssetAccountInfo ? wrappedAddressPK.toString() : null];
            }
        });
    });
}
exports.getForeignAssetSolana = getForeignAssetSolana;
function getForeignAssetAlgorand(client, tokenBridgeId, chain, contract) {
    return __awaiter(this, void 0, void 0, function () {
        var chainId, _a, lsa, doesExist, asset, tmp;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    chainId = utils_1.coalesceChainId(chain);
                    if (!(chainId === utils_1.CHAIN_ID_ALGORAND)) return [3 /*break*/, 1];
                    return [2 /*return*/, algorand_1.hexToNativeAssetBigIntAlgorand(contract)];
                case 1: return [4 /*yield*/, algorand_1.calcLogicSigAccount(client, tokenBridgeId, BigInt(chainId), contract)];
                case 2:
                    _a = _b.sent(), lsa = _a.lsa, doesExist = _a.doesExist;
                    if (!doesExist) {
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, algorand_1.decodeLocalState(client, tokenBridgeId, lsa.address())];
                case 3:
                    asset = _b.sent();
                    if (asset.length > 8) {
                        tmp = Buffer.from(asset.slice(0, 8));
                        return [2 /*return*/, tmp.readBigUInt64BE(0)];
                    }
                    else
                        return [2 /*return*/, null];
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getForeignAssetAlgorand = getForeignAssetAlgorand;
