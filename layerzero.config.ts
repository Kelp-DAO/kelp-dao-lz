// eslint-disable-next-line @typescript-eslint/no-var-requires
import { EndpointId } from '@layerzerolabs/lz-definitions'

const ethereumContract = {
    eid: EndpointId.ETHEREUM_MAINNET,
    contractName: 'RSETH_OFTAdapter',
}

const arbitrumContract = {
    eid: EndpointId.ARBITRUM_MAINNET,
    contractName: 'RSETH_OFT',
}

const optimismContract = {
    eid: EndpointId.OPTIMISM_MAINNET,
    contractName: 'RSETH_OFT',
}

export default {
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
}
