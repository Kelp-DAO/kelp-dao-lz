require('dotenv').config()

import 'hardhat-deploy'
import 'hardhat-contract-sizer'
import '@nomiclabs/hardhat-ethers'
import '@layerzerolabs/toolbox-hardhat'
import { HardhatUserConfig } from 'hardhat/types'
import '@matterlabs/hardhat-zksync-deploy'
import '@matterlabs/hardhat-zksync-solc'

import { EndpointId } from '@layerzerolabs/lz-definitions'

const RPC_KEY = process.env.RPC_KEY
const ACCOUNT_PRIVATE_KEY: string = process.env.ACCOUNT_PRIVATE_KEY || '' //without 0x

const config: HardhatUserConfig = {
    zksolc: {
        version: 'latest',
        settings: {},
    },
    solidity: {
        compilers: [
            {
                version: '0.8.22',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        ethereum: {
            eid: EndpointId.ETHEREUM_V2_MAINNET,
            url: `https://eth-mainnet.nodereal.io/v1/${RPC_KEY}`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
            zksync: false,
        },
        arbitrum: {
            eid: EndpointId.ARBITRUM_V2_MAINNET,
            url: `https://arb1.arbitrum.io/rpc`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
            zksync: false,
        },
        optimism: {
            eid: EndpointId.OPTIMISM_V2_MAINNET,
            url: `https://mainnet.optimism.io`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
            zksync: false,
        },
        manta: {
            eid: EndpointId.MANTA_V2_MAINNET,
            url: `https://pacific-rpc.manta.network/http`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
            zksync: false,
        },
        mode: {
            eid: EndpointId.MODE_V2_MAINNET,
            url: `https://mainnet.mode.network/`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
            zksync: false,
        },
        blast: {
            eid: EndpointId.BLAST_V2_MAINNET,
            url: `https://rpc.blast.io`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
            zksync: false,
        },
        zksync: {
            eid: EndpointId.ZKSYNC_V2_MAINNET,
            url: `https://mainnet.era.zksync.io`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
            zksync: true,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0, // wallet address of index[0], of the mnemonic in .env
        },
    },
}

export default config
