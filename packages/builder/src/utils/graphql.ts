/**
 * Chain Id to network id
 */
export enum ChainId {
  MAINNET_CHAIN_ID = 1,
  GOERLI_CHAIN_ID = 5,
  OPTIMISM_MAINNET_CHAIN_ID = 10,
  FANTOM_MAINNET_CHAIN_ID = 250,
  FANTOM_TESTNET_CHAIN_ID = 0xfa2,
}

/**
 * Fetch subgraph uri for a given chain id
 *
 * @param chainId
 * @returns GraphEndpoint
 */
const getGraphQLEndpoint = (chainId: number): string | undefined => {
  switch (chainId) {
    case ChainId.MAINNET_CHAIN_ID:
      // eslint-disable-next-line max-len
      return process.env.REACT_APP_SUBGRAPH_URL_MAINNET;
    case ChainId.GOERLI_CHAIN_ID:
      return process.env.REACT_APP_SUBGRAPH_URL_GOERLI;
    case ChainId.OPTIMISM_MAINNET_CHAIN_ID:
      return process.env.REACT_APP_SUBGRAPH_URL_OPTIMISM_MAINNET;
    case ChainId.FANTOM_MAINNET_CHAIN_ID:
      return process.env.REACT_APP_SUBGRAPH_URL_FANTOM_MAINNET;
    case ChainId.FANTOM_TESTNET_CHAIN_ID:
      return process.env.REACT_APP_SUBGRAPH_URL_FANTOM_TESTNET;
    default:
      throw new Error(
        `Chain id (${chainId}) is invalid or subgraph is not deployed on requested chain`
      );
  }
};

export const graphqlFetch = async (
  query: string,
  chainId: number,
  variables: object = {}
) => {
  const endpoint = getGraphQLEndpoint(chainId);
  if (endpoint) {
    return fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    });
  }

  throw new Error(`Subgraph endpoint for chain id ${chainId} not defined.`);
};
