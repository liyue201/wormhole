export declare const CHAINS: {
    readonly unset: 0;
    readonly solana: 1;
    readonly ethereum: 2;
    readonly terra: 3;
    readonly bsc: 4;
    readonly polygon: 5;
    readonly avalanche: 6;
    readonly oasis: 7;
    readonly algorand: 8;
    readonly aurora: 9;
    readonly fantom: 10;
    readonly karura: 11;
    readonly acala: 12;
    readonly klaytn: 13;
    readonly celo: 14;
    readonly near: 15;
    readonly moonbeam: 16;
    readonly findora: 19;
    readonly bas: 20;
    readonly ropsten: 10001;
};
export declare type ChainName = keyof typeof CHAINS;
export declare type ChainId = typeof CHAINS[ChainName];
/**
 *
 * All the EVM-based chain names that Wormhole supports
 */
export declare type EVMChainName = "ethereum" | "bsc" | "polygon" | "avalanche" | "oasis" | "aurora" | "fantom" | "karura" | "acala" | "klaytn" | "celo" | "moonbeam" | "ropsten" | "bas" | "findora";
export declare type Contracts = {
    core: string | undefined;
    token_bridge: string | undefined;
    nft_bridge: string | undefined;
};
export declare type ChainContracts = {
    [chain in ChainName]: Contracts;
};
/**
 *
 * Contracts addresses on testnet and mainnet
 */
export declare const CONTRACTS: {
    MAINNET: {
        unset: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        solana: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        ethereum: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        terra: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        bsc: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        polygon: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        avalanche: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        oasis: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        algorand: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        aurora: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        fantom: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        karura: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        acala: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        klaytn: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        celo: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        near: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        moonbeam: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        ropsten: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        bas: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        findora: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
    };
    TESTNET: {
        unset: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        solana: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        terra: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        ethereum: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        bsc: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        polygon: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        avalanche: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        oasis: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        algorand: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        aurora: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        fantom: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        karura: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        acala: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        klaytn: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        celo: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        near: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        moonbeam: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        ropsten: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        bas: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        findora: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
    };
    DEVNET: {
        unset: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        solana: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        terra: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        ethereum: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        bsc: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        polygon: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        avalanche: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        oasis: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        algorand: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        aurora: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        fantom: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        karura: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        acala: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        klaytn: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        celo: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        near: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        moonbeam: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        ropsten: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        bas: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        findora: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
    };
};
export declare const CHAIN_ID_UNSET: 0;
export declare const CHAIN_ID_SOLANA: 1;
export declare const CHAIN_ID_ETH: 2;
export declare const CHAIN_ID_TERRA: 3;
export declare const CHAIN_ID_BSC: 4;
export declare const CHAIN_ID_POLYGON: 5;
export declare const CHAIN_ID_AVAX: 6;
export declare const CHAIN_ID_OASIS: 7;
export declare const CHAIN_ID_ALGORAND: 8;
export declare const CHAIN_ID_AURORA: 9;
export declare const CHAIN_ID_FANTOM: 10;
export declare const CHAIN_ID_KARURA: 11;
export declare const CHAIN_ID_ACALA: 12;
export declare const CHAIN_ID_KLAYTN: 13;
export declare const CHAIN_ID_CELO: 14;
export declare const CHAIN_ID_NEAR: 15;
export declare const CHAIN_ID_MOONBEAM: 16;
export declare const CHAIN_ID_ETHEREUM_ROPSTEN: 10001;
export declare const CHAIN_ID_BAS: 20;
export declare const CHAIN_ID_FINDORA: 19;
export declare type ChainIdToName = {
    -readonly [key in keyof typeof CHAINS as typeof CHAINS[key]]: key;
};
export declare const CHAIN_ID_TO_NAME: ChainIdToName;
/**
 *
 * All the EVM-based chain ids that Wormhole supports
 */
export declare type EVMChainId = typeof CHAINS[EVMChainName];
/**
 *
 * Returns true when called with a valid chain, and narrows the type in the
 * "true" branch to [[ChainId]] or [[ChainName]] thanks to the type predicate in
 * the return type.
 *
 * A typical use-case might look like
 * ```typescript
 * foo = isChain(c) ? doSomethingWithChainId(c) : handleInvalidCase()
 * ```
 */
export declare function isChain(chain: number | string): chain is ChainId | ChainName;
/**
 *
 * Asserts that the given number or string is a valid chain, and throws otherwise.
 * After calling this function, the type of chain will be narrowed to
 * [[ChainId]] or [[ChainName]] thanks to the type assertion in the return type.
 *
 * A typical use-case might look like
 * ```typescript
 * // c has type 'string'
 * assertChain(c)
 * // c now has type 'ChainName'
 * ```
 */
export declare function assertChain(chain: number | string): asserts chain is ChainId | ChainName;
export declare function toChainId(chainName: ChainName): ChainId;
export declare function toChainName(chainId: ChainId): ChainName;
export declare function coalesceChainId(chain: ChainId | ChainName): ChainId;
export declare function coalesceChainName(chain: ChainId | ChainName): ChainName;
/**
 *
 * Returns true when called with an [[EVMChainId]] or [[EVMChainName]], and false otherwise.
 * Importantly, after running this check, the chain's type will be narrowed to
 * either the EVM subset, or the non-EVM subset thanks to the type predicate in
 * the return type.
 */
export declare function isEVMChain(chain: ChainId | ChainName): chain is EVMChainId | EVMChainName;
/**
 *
 * Asserts that the given chain id or chain name is an EVM chain, and throws otherwise.
 * After calling this function, the type of chain will be narrowed to
 * [[EVMChainId]] or [[EVMChainName]] thanks to the type assertion in the return type.
 *
 */
export declare function assertEVMChain(chain: ChainId | ChainName): asserts chain is EVMChainId | EVMChainName;
export declare const WSOL_ADDRESS = "So11111111111111111111111111111111111111112";
export declare const WSOL_DECIMALS = 9;
export declare const MAX_VAA_DECIMALS = 8;
export declare const TERRA_REDEEMED_CHECK_WALLET_ADDRESS = "terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v";
