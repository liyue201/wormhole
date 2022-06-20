/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function post_message_ix(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number): number;
export function post_vaa_ix(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function update_guardian_set_ix(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function set_fees_ix(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function transfer_fees_ix(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function upgrade_contract_ix(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function verify_signatures_ix(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number): number;
export function guardian_set_address(a: number, b: number, c: number, d: number): void;
export function parse_guardian_set(a: number, b: number): number;
export function state_address(a: number, b: number, c: number): void;
export function parse_state(a: number, b: number): number;
export function fee_collector_address(a: number, b: number, c: number): void;
export function claim_address(a: number, b: number, c: number, d: number, e: number): void;
export function parse_posted_message(a: number, b: number): number;
export function parse_vaa(a: number, b: number): number;
export function __wbg_message_free(a: number): void;
export function __wbg_get_message_recent_blockhash(a: number): number;
export function __wbg_set_message_recent_blockhash(a: number, b: number): void;
export function __wbg_instruction_free(a: number): void;
export function __wbg_pubkey_free(a: number): void;
export function systeminstruction_createAccount(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function systeminstruction_createAccountWithSeed(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number): number;
export function systeminstruction_assign(a: number, b: number): number;
export function systeminstruction_assignWithSeed(a: number, b: number, c: number, d: number, e: number): number;
export function systeminstruction_transfer(a: number, b: number, c: number, d: number): number;
export function systeminstruction_transferWithSeed(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function systeminstruction_allocate(a: number, b: number, c: number): number;
export function systeminstruction_allocateWithSeed(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function systeminstruction_createNonceAccount(a: number, b: number, c: number, d: number, e: number): number;
export function systeminstruction_advanceNonceAccount(a: number, b: number): number;
export function systeminstruction_withdrawNonceAccount(a: number, b: number, c: number, d: number, e: number): number;
export function systeminstruction_authorizeNonceAccount(a: number, b: number, c: number): number;
export function pubkey_constructor(a: number, b: number): void;
export function pubkey_toString(a: number, b: number): void;
export function pubkey_isOnCurve(a: number): number;
export function pubkey_equals(a: number, b: number): number;
export function pubkey_toBytes(a: number, b: number): void;
export function pubkey_createWithSeed(a: number, b: number, c: number, d: number, e: number): void;
export function pubkey_createProgramAddress(a: number, b: number, c: number, d: number): void;
export function pubkey_findProgramAddress(a: number, b: number, c: number, d: number): void;
export function init(): void;
export function __wbg_instructions_free(a: number): void;
export function instructions_constructor(): number;
export function instructions_push(a: number, b: number): void;
export function __wbg_hash_free(a: number): void;
export function hash_constructor(a: number, b: number): void;
export function hash_toString(a: number, b: number): void;
export function hash_equals(a: number, b: number): number;
export function hash_toBytes(a: number, b: number): void;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
