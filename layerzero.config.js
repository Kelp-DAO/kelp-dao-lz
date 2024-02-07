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
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        gas: 200000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: arbitrumContract,
            to: optimismContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        gas: 200000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: ethereumContract,
            to: arbitrumContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        gas: 200000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: ethereumContract,
            to: optimismContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        gas: 200000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: optimismContract,
            to: ethereumContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        gas: 200000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: optimismContract,
            to: arbitrumContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        gas: 200000,
                        value: 0,
                    },
                ],
            },
        },
    ],
};
