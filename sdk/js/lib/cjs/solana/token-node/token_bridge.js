"use strict";
var imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
var wasm;
var _a = require("util"), TextDecoder = _a.TextDecoder, TextEncoder = _a.TextEncoder;
var cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
var heap = new Array(32).fill(undefined);
heap.push(undefined, null, true, false);
var heap_next = heap.length;
function addHeapObject(obj) {
    if (heap_next === heap.length)
        heap.push(heap.length + 1);
    var idx = heap_next;
    heap_next = heap[idx];
    heap[idx] = obj;
    return idx;
}
function getObject(idx) { return heap[idx]; }
function dropObject(idx) {
    if (idx < 36)
        return;
    heap[idx] = heap_next;
    heap_next = idx;
}
function takeObject(idx) {
    var ret = getObject(idx);
    dropObject(idx);
    return ret;
}
var WASM_VECTOR_LEN = 0;
var cachedTextEncoder = new TextEncoder('utf-8');
var encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
    }
    : function (arg, view) {
        var buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    });
function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        var buf = cachedTextEncoder.encode(arg);
        var ptr_1 = malloc(buf.length);
        getUint8Memory0().subarray(ptr_1, ptr_1 + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr_1;
    }
    var len = arg.length;
    var ptr = malloc(len);
    var mem = getUint8Memory0();
    var offset = 0;
    for (; offset < len; offset++) {
        var code = arg.charCodeAt(offset);
        if (code > 0x7F)
            break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        var view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        var ret = encodeString(arg, view);
        offset += ret.written;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
}
function isLikeNone(x) {
    return x === undefined || x === null;
}
var cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}
var cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
    if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== wasm.memory.buffer) {
        cachegetFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachegetFloat64Memory0;
}
function debugString(val) {
    // primitive types
    var type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return "" + val;
    }
    if (type == 'string') {
        return "\"" + val + "\"";
    }
    if (type == 'symbol') {
        var description = val.description;
        if (description == null) {
            return 'Symbol';
        }
        else {
            return "Symbol(" + description + ")";
        }
    }
    if (type == 'function') {
        var name_1 = val.name;
        if (typeof name_1 == 'string' && name_1.length > 0) {
            return "Function(" + name_1 + ")";
        }
        else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        var length_1 = val.length;
        var debug = '[';
        if (length_1 > 0) {
            debug += debugString(val[0]);
        }
        for (var i = 1; i < length_1; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    var builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    var className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    }
    else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        }
        catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return val.name + ": " + val.message + "\n" + val.stack;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} message
* @param {string} mint
* @param {number} nonce
* @returns {any}
*/
module.exports.attest_ix = function (program_id, bridge_id, payer, message, mint, nonce) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ret = wasm.attest_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, nonce);
    return takeObject(ret);
};
var u32CvtShim = new Uint32Array(2);
var uint64CvtShim = new BigUint64Array(u32CvtShim.buffer);
function passArray8ToWasm0(arg, malloc) {
    var ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} message
* @param {string} from
* @param {string} mint
* @param {number} nonce
* @param {BigInt} amount
* @param {BigInt} fee
* @param {Uint8Array} target_address
* @param {number} target_chain
* @returns {any}
*/
module.exports.transfer_native_ix = function (program_id, bridge_id, payer, message, from, mint, nonce, amount, fee, target_address, target_chain) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(from, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ptr5 = passStringToWasm0(mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len5 = WASM_VECTOR_LEN;
    uint64CvtShim[0] = amount;
    var low6 = u32CvtShim[0];
    var high6 = u32CvtShim[1];
    uint64CvtShim[0] = fee;
    var low7 = u32CvtShim[0];
    var high7 = u32CvtShim[1];
    var ptr8 = passArray8ToWasm0(target_address, wasm.__wbindgen_malloc);
    var len8 = WASM_VECTOR_LEN;
    var ret = wasm.transfer_native_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5, nonce, low6, high6, low7, high7, ptr8, len8, target_chain);
    return takeObject(ret);
};
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} message
* @param {string} from
* @param {string} mint
* @param {number} nonce
* @param {BigInt} amount
* @param {BigInt} fee
* @param {Uint8Array} target_address
* @param {number} target_chain
* @param {Uint8Array} payload
* @returns {any}
*/
module.exports.transfer_native_with_payload_ix = function (program_id, bridge_id, payer, message, from, mint, nonce, amount, fee, target_address, target_chain, payload) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(from, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ptr5 = passStringToWasm0(mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len5 = WASM_VECTOR_LEN;
    uint64CvtShim[0] = amount;
    var low6 = u32CvtShim[0];
    var high6 = u32CvtShim[1];
    uint64CvtShim[0] = fee;
    var low7 = u32CvtShim[0];
    var high7 = u32CvtShim[1];
    var ptr8 = passArray8ToWasm0(target_address, wasm.__wbindgen_malloc);
    var len8 = WASM_VECTOR_LEN;
    var ptr9 = passArray8ToWasm0(payload, wasm.__wbindgen_malloc);
    var len9 = WASM_VECTOR_LEN;
    var ret = wasm.transfer_native_with_payload_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5, nonce, low6, high6, low7, high7, ptr8, len8, target_chain, ptr9, len9);
    return takeObject(ret);
};
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} message
* @param {string} from
* @param {string} from_owner
* @param {number} token_chain
* @param {Uint8Array} token_address
* @param {number} nonce
* @param {BigInt} amount
* @param {BigInt} fee
* @param {Uint8Array} target_address
* @param {number} target_chain
* @returns {any}
*/
module.exports.transfer_wrapped_ix = function (program_id, bridge_id, payer, message, from, from_owner, token_chain, token_address, nonce, amount, fee, target_address, target_chain) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(from, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ptr5 = passStringToWasm0(from_owner, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len5 = WASM_VECTOR_LEN;
    var ptr6 = passArray8ToWasm0(token_address, wasm.__wbindgen_malloc);
    var len6 = WASM_VECTOR_LEN;
    uint64CvtShim[0] = amount;
    var low7 = u32CvtShim[0];
    var high7 = u32CvtShim[1];
    uint64CvtShim[0] = fee;
    var low8 = u32CvtShim[0];
    var high8 = u32CvtShim[1];
    var ptr9 = passArray8ToWasm0(target_address, wasm.__wbindgen_malloc);
    var len9 = WASM_VECTOR_LEN;
    var ret = wasm.transfer_wrapped_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5, token_chain, ptr6, len6, nonce, low7, high7, low8, high8, ptr9, len9, target_chain);
    return takeObject(ret);
};
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} message
* @param {string} from
* @param {string} from_owner
* @param {number} token_chain
* @param {Uint8Array} token_address
* @param {number} nonce
* @param {BigInt} amount
* @param {BigInt} fee
* @param {Uint8Array} target_address
* @param {number} target_chain
* @param {Uint8Array} payload
* @returns {any}
*/
module.exports.transfer_wrapped_with_payload_ix = function (program_id, bridge_id, payer, message, from, from_owner, token_chain, token_address, nonce, amount, fee, target_address, target_chain, payload) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(from, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ptr5 = passStringToWasm0(from_owner, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len5 = WASM_VECTOR_LEN;
    var ptr6 = passArray8ToWasm0(token_address, wasm.__wbindgen_malloc);
    var len6 = WASM_VECTOR_LEN;
    uint64CvtShim[0] = amount;
    var low7 = u32CvtShim[0];
    var high7 = u32CvtShim[1];
    uint64CvtShim[0] = fee;
    var low8 = u32CvtShim[0];
    var high8 = u32CvtShim[1];
    var ptr9 = passArray8ToWasm0(target_address, wasm.__wbindgen_malloc);
    var len9 = WASM_VECTOR_LEN;
    var ptr10 = passArray8ToWasm0(payload, wasm.__wbindgen_malloc);
    var len10 = WASM_VECTOR_LEN;
    var ret = wasm.transfer_wrapped_with_payload_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5, token_chain, ptr6, len6, nonce, low7, high7, low8, high8, ptr9, len9, target_chain, ptr10, len10);
    return takeObject(ret);
};
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {Uint8Array} vaa
* @param {string | undefined} fee_recipient
* @returns {any}
*/
module.exports.complete_transfer_native_ix = function (program_id, bridge_id, payer, vaa, fee_recipient) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = isLikeNone(fee_recipient) ? 0 : passStringToWasm0(fee_recipient, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ret = wasm.complete_transfer_native_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4);
    return takeObject(ret);
};
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {Uint8Array} vaa
* @param {string | undefined} fee_recipient
* @returns {any}
*/
module.exports.complete_transfer_wrapped_ix = function (program_id, bridge_id, payer, vaa, fee_recipient) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = isLikeNone(fee_recipient) ? 0 : passStringToWasm0(fee_recipient, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ret = wasm.complete_transfer_wrapped_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4);
    return takeObject(ret);
};
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {Uint8Array} vaa
* @returns {any}
*/
module.exports.create_wrapped_ix = function (program_id, bridge_id, payer, vaa) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ret = wasm.create_wrapped_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return takeObject(ret);
};
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} spill
* @param {Uint8Array} vaa
* @returns {any}
*/
module.exports.upgrade_contract_ix = function (program_id, bridge_id, payer, spill, vaa) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(spill, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len4 = WASM_VECTOR_LEN;
    var ret = wasm.upgrade_contract_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4);
    return takeObject(ret);
};
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {Uint8Array} vaa
* @returns {any}
*/
module.exports.register_chain_ix = function (program_id, bridge_id, payer, vaa) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ret = wasm.register_chain_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return takeObject(ret);
};
function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @param {string} program_id
* @returns {Uint8Array}
*/
module.exports.emitter_address = function (program_id) {
    try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.emitter_address(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    }
    finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
};
/**
* @param {string} program_id
* @returns {Uint8Array}
*/
module.exports.custody_signer = function (program_id) {
    try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.custody_signer(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    }
    finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
};
/**
* @param {string} program_id
* @returns {Uint8Array}
*/
module.exports.approval_authority_address = function (program_id) {
    try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.approval_authority_address(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    }
    finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
};
/**
* @param {string} program_id
* @param {Uint8Array} token_address
* @param {number} token_chain
* @returns {Uint8Array}
*/
module.exports.wrapped_address = function (program_id, token_address, token_chain) {
    try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(token_address, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.wrapped_address(retptr, ptr0, len0, ptr1, len1, token_chain);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    }
    finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
};
/**
* @param {string} program_id
* @param {Uint8Array} mint_address
* @returns {Uint8Array}
*/
module.exports.wrapped_meta_address = function (program_id, mint_address) {
    try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(mint_address, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.wrapped_meta_address(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    }
    finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
};
/**
* @param {Uint8Array} data
* @returns {any}
*/
module.exports.parse_wrapped_meta = function (data) {
    var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.parse_wrapped_meta(ptr0, len0);
    return takeObject(ret);
};
/**
* @param {Uint8Array} data
* @returns {any}
*/
module.exports.parse_endpoint_registration = function (data) {
    var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.parse_endpoint_registration(ptr0, len0);
    return takeObject(ret);
};
function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error("expected instance of " + klass.name);
    }
    return instance.ptr;
}
var cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory0;
}
function passArrayJsValueToWasm0(array, malloc) {
    var ptr = malloc(array.length * 4);
    var mem = getUint32Memory0();
    for (var i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}
/**
* Initialize Javascript logging and panic handler
*/
module.exports.init = function () {
    wasm.init();
};
function handleError(f, args) {
    try {
        return f.apply(this, args);
    }
    catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
/**
*/
var Hash = /** @class */ (function () {
    /**
    * Create a new Hash object
    *
    * * `value` - optional hash as a base58 encoded string, `Uint8Array`, `[number]`
    * @param {any} value
    */
    function Hash(value) {
        try {
            var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.hash_constructor(retptr, addHeapObject(value));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Hash.__wrap(r0);
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    Hash.__wrap = function (ptr) {
        var obj = Object.create(Hash.prototype);
        obj.ptr = ptr;
        return obj;
    };
    Hash.prototype.__destroy_into_raw = function () {
        var ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    };
    Hash.prototype.free = function () {
        var ptr = this.__destroy_into_raw();
        wasm.__wbg_hash_free(ptr);
    };
    /**
    * Return the base58 string representation of the hash
    * @returns {string}
    */
    Hash.prototype.toString = function () {
        try {
            var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.hash_toString(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    };
    /**
    * Checks if two `Hash`s are equal
    * @param {Hash} other
    * @returns {boolean}
    */
    Hash.prototype.equals = function (other) {
        _assertClass(other, Hash);
        var ret = wasm.hash_equals(this.ptr, other.ptr);
        return ret !== 0;
    };
    /**
    * Return the `Uint8Array` representation of the hash
    * @returns {Uint8Array}
    */
    Hash.prototype.toBytes = function () {
        try {
            var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.hash_toBytes(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    };
    return Hash;
}());
module.exports.Hash = Hash;
/**
* A directive for a single invocation of a Solana program.
*
* An instruction specifies which program it is calling, which accounts it may
* read or modify, and additional data that serves as input to the program. One
* or more instructions are included in transactions submitted by Solana
* clients. Instructions are also used to describe [cross-program
* invocations][cpi].
*
* [cpi]: https://docs.solana.com/developing/programming-model/calling-between-programs
*
* During execution, a program will receive a list of account data as one of
* its arguments, in the same order as specified during `Instruction`
* construction.
*
* While Solana is agnostic to the format of the instruction data, it has
* built-in support for serialization via [`borsh`] and [`bincode`].
*
* [`borsh`]: https://docs.rs/borsh/latest/borsh/
* [`bincode`]: https://docs.rs/bincode/latest/bincode/
*
* # Specifying account metadata
*
* When constructing an [`Instruction`], a list of all accounts that may be
* read or written during the execution of that instruction must be supplied as
* [`AccountMeta`] values.
*
* Any account whose data may be mutated by the program during execution must
* be specified as writable. During execution, writing to an account that was
* not specified as writable will cause the transaction to fail. Writing to an
* account that is not owned by the program will cause the transaction to fail.
*
* Any account whose lamport balance may be mutated by the program during
* execution must be specified as writable. During execution, mutating the
* lamports of an account that was not specified as writable will cause the
* transaction to fail. While _subtracting_ lamports from an account not owned
* by the program will cause the transaction to fail, _adding_ lamports to any
* account is allowed, as long is it is mutable.
*
* Accounts that are not read or written by the program may still be specified
* in an `Instruction`'s account list. These will affect scheduling of program
* execution by the runtime, but will otherwise be ignored.
*
* When building a transaction, the Solana runtime coalesces all accounts used
* by all instructions in that transaction, along with accounts and permissions
* required by the runtime, into a single account list. Some accounts and
* account permissions required by the runtime to process a transaction are
* _not_ required to be included in an `Instruction`s account list. These
* include:
*
* - The program ID &mdash; it is a separate field of `Instruction`
* - The transaction's fee-paying account &mdash; it is added during [`Message`]
*   construction. A program may still require the fee payer as part of the
*   account list if it directly references it.
*
* [`Message`]: crate::message::Message
*
* Programs may require signatures from some accounts, in which case they
* should be specified as signers during `Instruction` construction. The
* program must still validate during execution that the account is a signer.
*/
var Instruction = /** @class */ (function () {
    function Instruction() {
    }
    Instruction.__wrap = function (ptr) {
        var obj = Object.create(Instruction.prototype);
        obj.ptr = ptr;
        return obj;
    };
    Instruction.prototype.__destroy_into_raw = function () {
        var ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    };
    Instruction.prototype.free = function () {
        var ptr = this.__destroy_into_raw();
        wasm.__wbg_instruction_free(ptr);
    };
    return Instruction;
}());
module.exports.Instruction = Instruction;
/**
*/
var Instructions = /** @class */ (function () {
    /**
    */
    function Instructions() {
        var ret = wasm.instructions_constructor();
        return Instructions.__wrap(ret);
    }
    Instructions.__wrap = function (ptr) {
        var obj = Object.create(Instructions.prototype);
        obj.ptr = ptr;
        return obj;
    };
    Instructions.prototype.__destroy_into_raw = function () {
        var ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    };
    Instructions.prototype.free = function () {
        var ptr = this.__destroy_into_raw();
        wasm.__wbg_instructions_free(ptr);
    };
    /**
    * @param {Instruction} instruction
    */
    Instructions.prototype.push = function (instruction) {
        _assertClass(instruction, Instruction);
        var ptr0 = instruction.ptr;
        instruction.ptr = 0;
        wasm.instructions_push(this.ptr, ptr0);
    };
    return Instructions;
}());
module.exports.Instructions = Instructions;
/**
*/
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.__destroy_into_raw = function () {
        var ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    };
    Message.prototype.free = function () {
        var ptr = this.__destroy_into_raw();
        wasm.__wbg_message_free(ptr);
    };
    Object.defineProperty(Message.prototype, "recent_blockhash", {
        /**
        * The id of a recent ledger entry.
        */
        get: function () {
            var ret = wasm.__wbg_get_message_recent_blockhash(this.ptr);
            return Hash.__wrap(ret);
        },
        /**
        * The id of a recent ledger entry.
        * @param {Hash} arg0
        */
        set: function (arg0) {
            _assertClass(arg0, Hash);
            var ptr0 = arg0.ptr;
            arg0.ptr = 0;
            wasm.__wbg_set_message_recent_blockhash(this.ptr, ptr0);
        },
        enumerable: false,
        configurable: true
    });
    return Message;
}());
module.exports.Message = Message;
/**
*/
var Pubkey = /** @class */ (function () {
    /**
    * Create a new Pubkey object
    *
    * * `value` - optional public key as a base58 encoded string, `Uint8Array`, `[number]`
    * @param {any} value
    */
    function Pubkey(value) {
        try {
            var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.pubkey_constructor(retptr, addHeapObject(value));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Pubkey.__wrap(r0);
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    Pubkey.__wrap = function (ptr) {
        var obj = Object.create(Pubkey.prototype);
        obj.ptr = ptr;
        return obj;
    };
    Pubkey.prototype.__destroy_into_raw = function () {
        var ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    };
    Pubkey.prototype.free = function () {
        var ptr = this.__destroy_into_raw();
        wasm.__wbg_pubkey_free(ptr);
    };
    /**
    * Return the base58 string representation of the public key
    * @returns {string}
    */
    Pubkey.prototype.toString = function () {
        try {
            var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.pubkey_toString(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    };
    /**
    * Check if a `Pubkey` is on the ed25519 curve.
    * @returns {boolean}
    */
    Pubkey.prototype.isOnCurve = function () {
        var ret = wasm.pubkey_isOnCurve(this.ptr);
        return ret !== 0;
    };
    /**
    * Checks if two `Pubkey`s are equal
    * @param {Pubkey} other
    * @returns {boolean}
    */
    Pubkey.prototype.equals = function (other) {
        _assertClass(other, Pubkey);
        var ret = wasm.pubkey_equals(this.ptr, other.ptr);
        return ret !== 0;
    };
    /**
    * Return the `Uint8Array` representation of the public key
    * @returns {Uint8Array}
    */
    Pubkey.prototype.toBytes = function () {
        try {
            var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.pubkey_toBytes(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    };
    /**
    * Derive a Pubkey from another Pubkey, string seed, and a program id
    * @param {Pubkey} base
    * @param {string} seed
    * @param {Pubkey} owner
    * @returns {Pubkey}
    */
    Pubkey.createWithSeed = function (base, seed, owner) {
        try {
            var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(base, Pubkey);
            var ptr0 = passStringToWasm0(seed, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            _assertClass(owner, Pubkey);
            wasm.pubkey_createWithSeed(retptr, base.ptr, ptr0, len0, owner.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Pubkey.__wrap(r0);
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    };
    /**
    * Derive a program address from seeds and a program id
    * @param {any[]} seeds
    * @param {Pubkey} program_id
    * @returns {Pubkey}
    */
    Pubkey.createProgramAddress = function (seeds, program_id) {
        try {
            var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            var ptr0 = passArrayJsValueToWasm0(seeds, wasm.__wbindgen_malloc);
            var len0 = WASM_VECTOR_LEN;
            _assertClass(program_id, Pubkey);
            wasm.pubkey_createProgramAddress(retptr, ptr0, len0, program_id.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Pubkey.__wrap(r0);
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    };
    /**
    * Find a valid program address
    *
    * Returns:
    * * `[PubKey, number]` - the program address and bump seed
    * @param {any[]} seeds
    * @param {Pubkey} program_id
    * @returns {any}
    */
    Pubkey.findProgramAddress = function (seeds, program_id) {
        try {
            var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            var ptr0 = passArrayJsValueToWasm0(seeds, wasm.__wbindgen_malloc);
            var len0 = WASM_VECTOR_LEN;
            _assertClass(program_id, Pubkey);
            wasm.pubkey_findProgramAddress(retptr, ptr0, len0, program_id.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    };
    return Pubkey;
}());
module.exports.Pubkey = Pubkey;
var SystemInstruction = /** @class */ (function () {
    function SystemInstruction() {
    }
    SystemInstruction.prototype.__destroy_into_raw = function () {
        var ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    };
    SystemInstruction.prototype.free = function () {
        var ptr = this.__destroy_into_raw();
        wasm.__wbg_systeminstruction_free(ptr);
    };
    /**
    * @param {Pubkey} from_pubkey
    * @param {Pubkey} to_pubkey
    * @param {BigInt} lamports
    * @param {BigInt} space
    * @param {Pubkey} owner
    * @returns {Instruction}
    */
    SystemInstruction.createAccount = function (from_pubkey, to_pubkey, lamports, space, owner) {
        _assertClass(from_pubkey, Pubkey);
        _assertClass(to_pubkey, Pubkey);
        uint64CvtShim[0] = lamports;
        var low0 = u32CvtShim[0];
        var high0 = u32CvtShim[1];
        uint64CvtShim[0] = space;
        var low1 = u32CvtShim[0];
        var high1 = u32CvtShim[1];
        _assertClass(owner, Pubkey);
        var ret = wasm.systeminstruction_createAccount(from_pubkey.ptr, to_pubkey.ptr, low0, high0, low1, high1, owner.ptr);
        return Instruction.__wrap(ret);
    };
    /**
    * @param {Pubkey} from_pubkey
    * @param {Pubkey} to_pubkey
    * @param {Pubkey} base
    * @param {string} seed
    * @param {BigInt} lamports
    * @param {BigInt} space
    * @param {Pubkey} owner
    * @returns {Instruction}
    */
    SystemInstruction.createAccountWithSeed = function (from_pubkey, to_pubkey, base, seed, lamports, space, owner) {
        _assertClass(from_pubkey, Pubkey);
        _assertClass(to_pubkey, Pubkey);
        _assertClass(base, Pubkey);
        var ptr0 = passStringToWasm0(seed, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        uint64CvtShim[0] = lamports;
        var low1 = u32CvtShim[0];
        var high1 = u32CvtShim[1];
        uint64CvtShim[0] = space;
        var low2 = u32CvtShim[0];
        var high2 = u32CvtShim[1];
        _assertClass(owner, Pubkey);
        var ret = wasm.systeminstruction_createAccountWithSeed(from_pubkey.ptr, to_pubkey.ptr, base.ptr, ptr0, len0, low1, high1, low2, high2, owner.ptr);
        return Instruction.__wrap(ret);
    };
    /**
    * @param {Pubkey} pubkey
    * @param {Pubkey} owner
    * @returns {Instruction}
    */
    SystemInstruction.assign = function (pubkey, owner) {
        _assertClass(pubkey, Pubkey);
        _assertClass(owner, Pubkey);
        var ret = wasm.systeminstruction_assign(pubkey.ptr, owner.ptr);
        return Instruction.__wrap(ret);
    };
    /**
    * @param {Pubkey} pubkey
    * @param {Pubkey} base
    * @param {string} seed
    * @param {Pubkey} owner
    * @returns {Instruction}
    */
    SystemInstruction.assignWithSeed = function (pubkey, base, seed, owner) {
        _assertClass(pubkey, Pubkey);
        _assertClass(base, Pubkey);
        var ptr0 = passStringToWasm0(seed, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(owner, Pubkey);
        var ret = wasm.systeminstruction_assignWithSeed(pubkey.ptr, base.ptr, ptr0, len0, owner.ptr);
        return Instruction.__wrap(ret);
    };
    /**
    * @param {Pubkey} from_pubkey
    * @param {Pubkey} to_pubkey
    * @param {BigInt} lamports
    * @returns {Instruction}
    */
    SystemInstruction.transfer = function (from_pubkey, to_pubkey, lamports) {
        _assertClass(from_pubkey, Pubkey);
        _assertClass(to_pubkey, Pubkey);
        uint64CvtShim[0] = lamports;
        var low0 = u32CvtShim[0];
        var high0 = u32CvtShim[1];
        var ret = wasm.systeminstruction_transfer(from_pubkey.ptr, to_pubkey.ptr, low0, high0);
        return Instruction.__wrap(ret);
    };
    /**
    * @param {Pubkey} from_pubkey
    * @param {Pubkey} from_base
    * @param {string} from_seed
    * @param {Pubkey} from_owner
    * @param {Pubkey} to_pubkey
    * @param {BigInt} lamports
    * @returns {Instruction}
    */
    SystemInstruction.transferWithSeed = function (from_pubkey, from_base, from_seed, from_owner, to_pubkey, lamports) {
        _assertClass(from_pubkey, Pubkey);
        _assertClass(from_base, Pubkey);
        var ptr0 = passStringToWasm0(from_seed, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(from_owner, Pubkey);
        _assertClass(to_pubkey, Pubkey);
        uint64CvtShim[0] = lamports;
        var low1 = u32CvtShim[0];
        var high1 = u32CvtShim[1];
        var ret = wasm.systeminstruction_transferWithSeed(from_pubkey.ptr, from_base.ptr, ptr0, len0, from_owner.ptr, to_pubkey.ptr, low1, high1);
        return Instruction.__wrap(ret);
    };
    /**
    * @param {Pubkey} pubkey
    * @param {BigInt} space
    * @returns {Instruction}
    */
    SystemInstruction.allocate = function (pubkey, space) {
        _assertClass(pubkey, Pubkey);
        uint64CvtShim[0] = space;
        var low0 = u32CvtShim[0];
        var high0 = u32CvtShim[1];
        var ret = wasm.systeminstruction_allocate(pubkey.ptr, low0, high0);
        return Instruction.__wrap(ret);
    };
    /**
    * @param {Pubkey} address
    * @param {Pubkey} base
    * @param {string} seed
    * @param {BigInt} space
    * @param {Pubkey} owner
    * @returns {Instruction}
    */
    SystemInstruction.allocateWithSeed = function (address, base, seed, space, owner) {
        _assertClass(address, Pubkey);
        _assertClass(base, Pubkey);
        var ptr0 = passStringToWasm0(seed, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        uint64CvtShim[0] = space;
        var low1 = u32CvtShim[0];
        var high1 = u32CvtShim[1];
        _assertClass(owner, Pubkey);
        var ret = wasm.systeminstruction_allocateWithSeed(address.ptr, base.ptr, ptr0, len0, low1, high1, owner.ptr);
        return Instruction.__wrap(ret);
    };
    /**
    * @param {Pubkey} from_pubkey
    * @param {Pubkey} nonce_pubkey
    * @param {Pubkey} authority
    * @param {BigInt} lamports
    * @returns {Array<any>}
    */
    SystemInstruction.createNonceAccount = function (from_pubkey, nonce_pubkey, authority, lamports) {
        _assertClass(from_pubkey, Pubkey);
        _assertClass(nonce_pubkey, Pubkey);
        _assertClass(authority, Pubkey);
        uint64CvtShim[0] = lamports;
        var low0 = u32CvtShim[0];
        var high0 = u32CvtShim[1];
        var ret = wasm.systeminstruction_createNonceAccount(from_pubkey.ptr, nonce_pubkey.ptr, authority.ptr, low0, high0);
        return takeObject(ret);
    };
    /**
    * @param {Pubkey} nonce_pubkey
    * @param {Pubkey} authorized_pubkey
    * @returns {Instruction}
    */
    SystemInstruction.advanceNonceAccount = function (nonce_pubkey, authorized_pubkey) {
        _assertClass(nonce_pubkey, Pubkey);
        _assertClass(authorized_pubkey, Pubkey);
        var ret = wasm.systeminstruction_advanceNonceAccount(nonce_pubkey.ptr, authorized_pubkey.ptr);
        return Instruction.__wrap(ret);
    };
    /**
    * @param {Pubkey} nonce_pubkey
    * @param {Pubkey} authorized_pubkey
    * @param {Pubkey} to_pubkey
    * @param {BigInt} lamports
    * @returns {Instruction}
    */
    SystemInstruction.withdrawNonceAccount = function (nonce_pubkey, authorized_pubkey, to_pubkey, lamports) {
        _assertClass(nonce_pubkey, Pubkey);
        _assertClass(authorized_pubkey, Pubkey);
        _assertClass(to_pubkey, Pubkey);
        uint64CvtShim[0] = lamports;
        var low0 = u32CvtShim[0];
        var high0 = u32CvtShim[1];
        var ret = wasm.systeminstruction_withdrawNonceAccount(nonce_pubkey.ptr, authorized_pubkey.ptr, to_pubkey.ptr, low0, high0);
        return Instruction.__wrap(ret);
    };
    /**
    * @param {Pubkey} nonce_pubkey
    * @param {Pubkey} authorized_pubkey
    * @param {Pubkey} new_authority
    * @returns {Instruction}
    */
    SystemInstruction.authorizeNonceAccount = function (nonce_pubkey, authorized_pubkey, new_authority) {
        _assertClass(nonce_pubkey, Pubkey);
        _assertClass(authorized_pubkey, Pubkey);
        _assertClass(new_authority, Pubkey);
        var ret = wasm.systeminstruction_authorizeNonceAccount(nonce_pubkey.ptr, authorized_pubkey.ptr, new_authority.ptr);
        return Instruction.__wrap(ret);
    };
    return SystemInstruction;
}());
module.exports.SystemInstruction = SystemInstruction;
module.exports.__wbindgen_json_parse = function (arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};
module.exports.__wbg_instruction_new = function (arg0) {
    var ret = Instruction.__wrap(arg0);
    return addHeapObject(ret);
};
module.exports.__wbindgen_object_drop_ref = function (arg0) {
    takeObject(arg0);
};
module.exports.__wbg_pubkey_new = function (arg0) {
    var ret = Pubkey.__wrap(arg0);
    return addHeapObject(ret);
};
module.exports.__wbindgen_string_get = function (arg0, arg1) {
    var obj = getObject(arg1);
    var ret = typeof (obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};
module.exports.__wbindgen_is_undefined = function (arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};
module.exports.__wbindgen_string_new = function (arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};
module.exports.__wbindgen_number_get = function (arg0, arg1) {
    var obj = getObject(arg1);
    var ret = typeof (obj) === 'number' ? obj : undefined;
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};
module.exports.__wbindgen_number_new = function (arg0) {
    var ret = arg0;
    return addHeapObject(ret);
};
module.exports.__wbg_debug_fda1f49ea6af7a1d = function (arg0) {
    console.debug(getObject(arg0));
};
module.exports.__wbg_error_8ff19d586a987aef = function (arg0) {
    console.error(getObject(arg0));
};
module.exports.__wbg_info_c8f1b00be4ef10bc = function (arg0) {
    console.info(getObject(arg0));
};
module.exports.__wbg_log_e8ba7b992c7ad0eb = function (arg0) {
    console.log(getObject(arg0));
};
module.exports.__wbg_warn_0227db1aa6989248 = function (arg0) {
    console.warn(getObject(arg0));
};
module.exports.__wbg_new_693216e109162396 = function () {
    var ret = new Error();
    return addHeapObject(ret);
};
module.exports.__wbg_stack_0ddaca5d1abfb52f = function (arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};
module.exports.__wbg_error_09919627ac0992f5 = function (arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    }
    finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
};
module.exports.__wbg_new_94fb1279cf6afea5 = function () {
    var ret = new Array();
    return addHeapObject(ret);
};
module.exports.__wbindgen_is_function = function (arg0) {
    var ret = typeof (getObject(arg0)) === 'function';
    return ret;
};
module.exports.__wbindgen_is_object = function (arg0) {
    var val = getObject(arg0);
    var ret = typeof (val) === 'object' && val !== null;
    return ret;
};
module.exports.__wbg_next_cabb70b365520721 = function (arg0) {
    var ret = getObject(arg0).next;
    return addHeapObject(ret);
};
module.exports.__wbg_next_bf3d83fc18df496e = function () {
    return handleError(function (arg0) {
        var ret = getObject(arg0).next();
        return addHeapObject(ret);
    }, arguments);
};
module.exports.__wbg_done_040f966faa9a72b3 = function (arg0) {
    var ret = getObject(arg0).done;
    return ret;
};
module.exports.__wbg_value_419afbd9b9574c4c = function (arg0) {
    var ret = getObject(arg0).value;
    return addHeapObject(ret);
};
module.exports.__wbg_iterator_4832ef1f15b0382b = function () {
    var ret = Symbol.iterator;
    return addHeapObject(ret);
};
module.exports.__wbg_get_a9cab131e3152c49 = function () {
    return handleError(function (arg0, arg1) {
        var ret = Reflect.get(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    }, arguments);
};
module.exports.__wbg_call_ae78342adc33730a = function () {
    return handleError(function (arg0, arg1) {
        var ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments);
};
module.exports.__wbg_newwithlength_e80fb11cf19c1628 = function (arg0) {
    var ret = new Array(arg0 >>> 0);
    return addHeapObject(ret);
};
module.exports.__wbg_set_561aac756158708c = function (arg0, arg1, arg2) {
    getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
};
module.exports.__wbg_isArray_6721f2e508996340 = function (arg0) {
    var ret = Array.isArray(getObject(arg0));
    return ret;
};
module.exports.__wbg_push_40c6a90f1805aa90 = function (arg0, arg1) {
    var ret = getObject(arg0).push(getObject(arg1));
    return ret;
};
module.exports.__wbg_values_b1b9e8c63dbe01c2 = function (arg0) {
    var ret = getObject(arg0).values();
    return addHeapObject(ret);
};
module.exports.__wbg_buffer_7af23f65f6c64548 = function (arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};
module.exports.__wbg_new_cc9018bd6f283b6f = function (arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};
module.exports.__wbg_set_f25e869e4565d2a2 = function (arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};
module.exports.__wbg_length_0acb1cf9bbaf8519 = function (arg0) {
    var ret = getObject(arg0).length;
    return ret;
};
module.exports.__wbg_instanceof_Uint8Array_edb92795fc0c63b4 = function (arg0) {
    var ret = getObject(arg0) instanceof Uint8Array;
    return ret;
};
module.exports.__wbindgen_debug_string = function (arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};
module.exports.__wbindgen_throw = function (arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};
module.exports.__wbindgen_memory = function () {
    var ret = wasm.memory;
    return addHeapObject(ret);
};
var path = require('path').join(__dirname, 'token_bridge_bg.wasm');
var bytes = require('fs').readFileSync(path);
var wasmModule = new WebAssembly.Module(bytes);
var wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;
