
export const CURRENCY_ATOMIC: Record<string, Currency> = {
    arweave: {
        ticker: "AR",
        atomic: 1e12,
    },
    ethereum: {
        ticker: "ETH",
        atomic: 1e18,
    },
    matic: {
        ticker: "MATIC",
        atomic: 1e18,
    },
    bnb: {
        ticker: "BNB",
        atomic: 1e18,
    },
    avalanche: {
        ticker: "AVAX",
        atomic: 1e18,
    },
    solana: {
        ticker: "SOL",
        atomic: 1e9,
    },
    arbitrum: {
        ticker: "ETH",
        atomic: 1e18,
    },
    "boba-eth": {
        ticker: "BOBA-ETH",
        atomic: 1e18,
    },
    boba: {
        ticker: "BOBA",
        atomic: 1e18,
    },
    chainlink: {
        ticker: "LINK",
        atomic: 1e18,
    },
    kyve: {
        ticker: "KYVE",
        atomic: 1e18,
    },
    fantom: {
        ticker: "FTM",
        atomic: 1e18,
    },
    near: {
        ticker: "NEAR",
        atomic: 1e25,
    },
    algorand: {
        ticker: "ALGO",
        atomic: 1e6,
    },
    aptos: {
        ticker: "APT",
        atomic: 1e8,
    },
} as const;

export type Currency = {
    ticker: string;
    atomic: number;
};