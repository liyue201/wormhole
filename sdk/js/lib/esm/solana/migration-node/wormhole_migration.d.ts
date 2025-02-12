export function add_liquidity(program_id: string, from_mint: string, to_mint: string, liquidity_token_account: string, lp_share_token_account: string, amount: BigInt): any;
export function remove_liquidity(program_id: string, from_mint: string, to_mint: string, liquidity_token_account: string, lp_share_token_account: string, amount: BigInt): any;
export function claim_shares(program_id: string, from_mint: string, to_mint: string, output_token_account: string, lp_share_token_account: string, amount: BigInt): any;
export function create_pool(program_id: string, payer: string, from_mint: string, to_mint: string): any;
export function migrate_tokens(program_id: string, from_mint: string, to_mint: string, input_token_account: string, output_token_account: string, amount: BigInt): any;
export function pool_address(program_id: string, from_mint: string, to_mint: string): Uint8Array;
export function authority_address(program_id: string): Uint8Array;
export function share_mint_address(program_id: string, pool: string): Uint8Array;
export function from_custody_address(program_id: string, pool: string): Uint8Array;
export function to_custody_address(program_id: string, pool: string): Uint8Array;
export function parse_pool(data: Uint8Array): any;
export function init(): void;
export function __wbindgen_json_parse(arg0: any, arg1: any): number;
export function __wbg_instruction_new(arg0: any): number;
export function __wbindgen_object_drop_ref(arg0: any): void;
export function __wbindgen_string_new(arg0: any, arg1: any): number;
export function __wbg_pubkey_new(arg0: any): number;
export function __wbindgen_string_get(arg0: any, arg1: any): void;
export function __wbindgen_is_undefined(arg0: any): boolean;
export function __wbindgen_number_get(arg0: any, arg1: any): void;
export function __wbindgen_number_new(arg0: any): number;
export function __wbg_debug_fda1f49ea6af7a1d(arg0: any): void;
export function __wbg_error_8ff19d586a987aef(arg0: any): void;
export function __wbg_info_c8f1b00be4ef10bc(arg0: any): void;
export function __wbg_log_e8ba7b992c7ad0eb(arg0: any): void;
export function __wbg_warn_0227db1aa6989248(arg0: any): void;
export function __wbg_new_693216e109162396(): number;
export function __wbg_stack_0ddaca5d1abfb52f(arg0: any, arg1: any): void;
export function __wbg_error_09919627ac0992f5(arg0: any, arg1: any): void;
export function __wbg_new_94fb1279cf6afea5(): number;
export function __wbindgen_is_function(arg0: any): boolean;
export function __wbindgen_is_object(arg0: any): boolean;
export function __wbg_next_cabb70b365520721(arg0: any): number;
export function __wbg_next_bf3d83fc18df496e(...args: any[]): any;
export function __wbg_done_040f966faa9a72b3(arg0: any): any;
export function __wbg_value_419afbd9b9574c4c(arg0: any): number;
export function __wbg_iterator_4832ef1f15b0382b(): number;
export function __wbg_get_a9cab131e3152c49(...args: any[]): any;
export function __wbg_call_ae78342adc33730a(...args: any[]): any;
export function __wbg_newwithlength_e80fb11cf19c1628(arg0: any): number;
export function __wbg_set_561aac756158708c(arg0: any, arg1: any, arg2: any): void;
export function __wbg_isArray_6721f2e508996340(arg0: any): boolean;
export function __wbg_push_40c6a90f1805aa90(arg0: any, arg1: any): any;
export function __wbg_values_b1b9e8c63dbe01c2(arg0: any): number;
export function __wbg_buffer_7af23f65f6c64548(arg0: any): number;
export function __wbg_new_cc9018bd6f283b6f(arg0: any): number;
export function __wbg_set_f25e869e4565d2a2(arg0: any, arg1: any, arg2: any): void;
export function __wbg_length_0acb1cf9bbaf8519(arg0: any): any;
export function __wbg_instanceof_Uint8Array_edb92795fc0c63b4(arg0: any): boolean;
export function __wbindgen_debug_string(arg0: any, arg1: any): void;
export function __wbindgen_throw(arg0: any, arg1: any): never;
export function __wbindgen_memory(): number;
/**
*/
export class Hash {
    static __wrap(ptr: any): any;
    /**
    * Create a new Hash object
    *
    * * `value` - optional hash as a base58 encoded string, `Uint8Array`, `[number]`
    * @param {any} value
    */
    constructor(value: any);
    __destroy_into_raw(): number | undefined;
    ptr: number | undefined;
    free(): void;
    /**
    * Return the base58 string representation of the hash
    * @returns {string}
    */
    toString(): string;
    /**
    * Checks if two `Hash`s are equal
    * @param {Hash} other
    * @returns {boolean}
    */
    equals(other: Hash): boolean;
    /**
    * Return the `Uint8Array` representation of the hash
    * @returns {Uint8Array}
    */
    toBytes(): Uint8Array;
}
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
export class Instruction {
    static __wrap(ptr: any): any;
    __destroy_into_raw(): number | undefined;
    ptr: number | undefined;
    free(): void;
}
/**
*/
export class Instructions {
    static __wrap(ptr: any): any;
    __destroy_into_raw(): number | undefined;
    ptr: number | undefined;
    free(): void;
    /**
    * @param {Instruction} instruction
    */
    push(instruction: Instruction): void;
}
/**
*/
export class Message {
    __destroy_into_raw(): number | undefined;
    ptr: number | undefined;
    free(): void;
    /**
    * The id of a recent ledger entry.
    * @param {Hash} arg0
    */
    set recent_blockhash(arg: Hash);
    /**
    * The id of a recent ledger entry.
    */
    get recent_blockhash(): Hash;
}
/**
*/
export class Pubkey {
    static __wrap(ptr: any): any;
    /**
    * Derive a Pubkey from another Pubkey, string seed, and a program id
    * @param {Pubkey} base
    * @param {string} seed
    * @param {Pubkey} owner
    * @returns {Pubkey}
    */
    static createWithSeed(base: Pubkey, seed: string, owner: Pubkey): Pubkey;
    /**
    * Derive a program address from seeds and a program id
    * @param {any[]} seeds
    * @param {Pubkey} program_id
    * @returns {Pubkey}
    */
    static createProgramAddress(seeds: any[], program_id: Pubkey): Pubkey;
    /**
    * Find a valid program address
    *
    * Returns:
    * * `[PubKey, number]` - the program address and bump seed
    * @param {any[]} seeds
    * @param {Pubkey} program_id
    * @returns {any}
    */
    static findProgramAddress(seeds: any[], program_id: Pubkey): any;
    /**
    * Create a new Pubkey object
    *
    * * `value` - optional public key as a base58 encoded string, `Uint8Array`, `[number]`
    * @param {any} value
    */
    constructor(value: any);
    __destroy_into_raw(): number | undefined;
    ptr: number | undefined;
    free(): void;
    /**
    * Return the base58 string representation of the public key
    * @returns {string}
    */
    toString(): string;
    /**
    * Check if a `Pubkey` is on the ed25519 curve.
    * @returns {boolean}
    */
    isOnCurve(): boolean;
    /**
    * Checks if two `Pubkey`s are equal
    * @param {Pubkey} other
    * @returns {boolean}
    */
    equals(other: Pubkey): boolean;
    /**
    * Return the `Uint8Array` representation of the public key
    * @returns {Uint8Array}
    */
    toBytes(): Uint8Array;
}
export class SystemInstruction {
    /**
    * @param {Pubkey} from_pubkey
    * @param {Pubkey} to_pubkey
    * @param {BigInt} lamports
    * @param {BigInt} space
    * @param {Pubkey} owner
    * @returns {Instruction}
    */
    static createAccount(from_pubkey: Pubkey, to_pubkey: Pubkey, lamports: BigInt, space: BigInt, owner: Pubkey): Instruction;
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
    static createAccountWithSeed(from_pubkey: Pubkey, to_pubkey: Pubkey, base: Pubkey, seed: string, lamports: BigInt, space: BigInt, owner: Pubkey): Instruction;
    /**
    * @param {Pubkey} pubkey
    * @param {Pubkey} owner
    * @returns {Instruction}
    */
    static assign(pubkey: Pubkey, owner: Pubkey): Instruction;
    /**
    * @param {Pubkey} pubkey
    * @param {Pubkey} base
    * @param {string} seed
    * @param {Pubkey} owner
    * @returns {Instruction}
    */
    static assignWithSeed(pubkey: Pubkey, base: Pubkey, seed: string, owner: Pubkey): Instruction;
    /**
    * @param {Pubkey} from_pubkey
    * @param {Pubkey} to_pubkey
    * @param {BigInt} lamports
    * @returns {Instruction}
    */
    static transfer(from_pubkey: Pubkey, to_pubkey: Pubkey, lamports: BigInt): Instruction;
    /**
    * @param {Pubkey} from_pubkey
    * @param {Pubkey} from_base
    * @param {string} from_seed
    * @param {Pubkey} from_owner
    * @param {Pubkey} to_pubkey
    * @param {BigInt} lamports
    * @returns {Instruction}
    */
    static transferWithSeed(from_pubkey: Pubkey, from_base: Pubkey, from_seed: string, from_owner: Pubkey, to_pubkey: Pubkey, lamports: BigInt): Instruction;
    /**
    * @param {Pubkey} pubkey
    * @param {BigInt} space
    * @returns {Instruction}
    */
    static allocate(pubkey: Pubkey, space: BigInt): Instruction;
    /**
    * @param {Pubkey} address
    * @param {Pubkey} base
    * @param {string} seed
    * @param {BigInt} space
    * @param {Pubkey} owner
    * @returns {Instruction}
    */
    static allocateWithSeed(address: Pubkey, base: Pubkey, seed: string, space: BigInt, owner: Pubkey): Instruction;
    /**
    * @param {Pubkey} from_pubkey
    * @param {Pubkey} nonce_pubkey
    * @param {Pubkey} authority
    * @param {BigInt} lamports
    * @returns {Array<any>}
    */
    static createNonceAccount(from_pubkey: Pubkey, nonce_pubkey: Pubkey, authority: Pubkey, lamports: BigInt): Array<any>;
    /**
    * @param {Pubkey} nonce_pubkey
    * @param {Pubkey} authorized_pubkey
    * @returns {Instruction}
    */
    static advanceNonceAccount(nonce_pubkey: Pubkey, authorized_pubkey: Pubkey): Instruction;
    /**
    * @param {Pubkey} nonce_pubkey
    * @param {Pubkey} authorized_pubkey
    * @param {Pubkey} to_pubkey
    * @param {BigInt} lamports
    * @returns {Instruction}
    */
    static withdrawNonceAccount(nonce_pubkey: Pubkey, authorized_pubkey: Pubkey, to_pubkey: Pubkey, lamports: BigInt): Instruction;
    /**
    * @param {Pubkey} nonce_pubkey
    * @param {Pubkey} authorized_pubkey
    * @param {Pubkey} new_authority
    * @returns {Instruction}
    */
    static authorizeNonceAccount(nonce_pubkey: Pubkey, authorized_pubkey: Pubkey, new_authority: Pubkey): Instruction;
    __destroy_into_raw(): number | undefined;
    ptr: number | undefined;
    free(): void;
}
declare let wasm: any;
export { wasm as __wasm };
