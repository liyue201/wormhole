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
exports.getSignedVAAHash = void 0;
var wasm_1 = require("../solana/wasm");
var ethers_1 = require("ethers");
var __1 = require("..");
function getSignedVAAHash(signedVAA) {
    return __awaiter(this, void 0, void 0, function () {
        var parse_vaa, parsedVAA, body;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wasm_1.importCoreWasm()];
                case 1:
                    parse_vaa = (_a.sent()).parse_vaa;
                    parsedVAA = parse_vaa(signedVAA);
                    body = [
                        ethers_1.ethers.utils.defaultAbiCoder.encode(["uint32"], [parsedVAA.timestamp]).substring(2 + (64 - 8)),
                        ethers_1.ethers.utils.defaultAbiCoder.encode(["uint32"], [parsedVAA.nonce]).substring(2 + (64 - 8)),
                        ethers_1.ethers.utils.defaultAbiCoder.encode(["uint16"], [parsedVAA.emitter_chain]).substring(2 + (64 - 4)),
                        ethers_1.ethers.utils.defaultAbiCoder.encode(["bytes32"], [parsedVAA.emitter_address]).substring(2),
                        ethers_1.ethers.utils.defaultAbiCoder.encode(["uint64"], [parsedVAA.sequence]).substring(2 + (64 - 16)),
                        ethers_1.ethers.utils.defaultAbiCoder.encode(["uint8"], [parsedVAA.consistency_level]).substring(2 + (64 - 2)),
                        __1.uint8ArrayToHex(parsedVAA.payload),
                    ];
                    return [2 /*return*/, ethers_1.ethers.utils.solidityKeccak256(["bytes"], [ethers_1.ethers.utils.solidityKeccak256(["bytes"], ["0x" + body.join("")])])];
            }
        });
    });
}
exports.getSignedVAAHash = getSignedVAAHash;
