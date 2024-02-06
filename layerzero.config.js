// eslint-disable-next-line @typescript-eslint/no-var-requires
const { EndpointId } = require('@layerzerolabs/lz-definitions');

const ethereumContract = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'RSETH_OFTAdapter',
};

const arbitrumContract = {
    eid: EndpointId.ARBITRUM_V2_MAINNET,
    contractName: 'RSETH_OFT',
};

const optimismContract = {
    eid: EndpointId.OPTIMISM_V2_MAINNET,
    contractName: 'RSETH_OFT',
};

module.exports = {
    contracts: [
        {
            contract: arbitrumContract,
        },
        {
            contract: ethereumContract,
        },
        {
            contract: optimismContract,
        },
    ],
    connections: [
        {
            from: arbitrumContract,
            to: ethereumContract,
            config: {},
        },
        {
            from: arbitrumContract,
            to: optimismContract,
        },
        {
            from: ethereumContract,
            to: arbitrumContract,
        },
        {
            from: ethereumContract,
            to: optimismContract,
        },
        {
            from: optimismContract,
            to: ethereumContract,
        },
        {
            from: optimismContract,
            to: arbitrumContract,
        },
    ],
};
