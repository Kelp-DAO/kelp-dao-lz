// eslint-disable-next-line @typescript-eslint/no-var-requires
const { EndpointId } = require('@layerzerolabs/lz-definitions');
const { ExecutorOptionType } = require('@layerzerolabs/lz-v2-utilities');

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

const mantaContract = {
    eid: EndpointId.MANTA_V2_MAINNET,
    contractName: 'RSETH_OFT',
};

const modeContract = {
    eid: EndpointId.MODE_V2_MAINNET,
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
        {
            contract: mantaContract,
        },
        {
            contract: modeContract,
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
                        optionType: ExecutorOptionType.LZ_RECEIVE,
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
                        optionType: ExecutorOptionType.LZ_RECEIVE,
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
                        optionType: ExecutorOptionType.LZ_RECEIVE,
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
                        optionType: ExecutorOptionType.LZ_RECEIVE,
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
                        optionType: ExecutorOptionType.LZ_RECEIVE,
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
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: mantaContract,
            to: ethereumContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0xA09dB5142654e3eB5Cf547D66833FAe7097B21C3',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0xA09dB5142654e3eB5Cf547D66833FAe7097B21C3',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethereumContract,
            to: mantaContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbitrumContract,
            to: mantaContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: mantaContract,
            to: arbitrumContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0xA09dB5142654e3eB5Cf547D66833FAe7097B21C3',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0xA09dB5142654e3eB5Cf547D66833FAe7097B21C3',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: modeContract,
            to: ethereumContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethereumContract,
            to: modeContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbitrumContract,
            to: modeContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: modeContract,
            to: arbitrumContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
    ],
};
