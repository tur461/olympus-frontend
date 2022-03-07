export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/n-antier/learning-first-subgarph";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;

export const TOKEN_DECIMALS = 9;

interface IPoolGraphURLS {
  [index: string]: string;
}

export const POOL_GRAPH_URLS: IPoolGraphURLS = {
  4: "https://api.thegraph.com/subgraphs/name/n-antier/learning-first-subgarph",
  1: "https://api.thegraph.com/subgraphs/name/n-antier/learning-first-subgarph",
};

export * from "./networkDetails";
export * from "./helpers/v2BondDetails";
