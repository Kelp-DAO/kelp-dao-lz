require('dotenv').config()

import 'hardhat-deploy'
import 'hardhat-contract-sizer'
import '@nomiclabs/hardhat-ethers'
import '@layerzerolabs/toolbox-hardhat'
import { HardhatUserConfig } from 'hardhat/types'

import { EndpointId } from '@layerzerolabs/lz-definitions'

const RPC_KEY = process.env.RPC_KEY
const ACCOUNT_PRIVATE_KEY: string = process.env.ACCOUNT_PRIVATE_KEY || '' // without 0x

// evm version is paris

const config: HardhatUserConfig = {
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
        },
        arbitrum: {
            eid: EndpointId.ARBITRUM_V2_MAINNET,
            url: `https://arb1.arbitrum.io/rpc`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        optimism: {
            eid: EndpointId.OPTIMISM_V2_MAINNET,
            url: `https://mainnet.optimism.io`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        manta: {
            eid: EndpointId.MANTA_V2_MAINNET,
            url: `https://pacific-rpc.manta.network/http`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        mode: {
            eid: EndpointId.MODE_V2_MAINNET,
            url: `https://1rpc.io/mode`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        blast: {
            eid: EndpointId.BLAST_V2_MAINNET,
            url: `https://rpc.blast.io`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        scroll: {
            eid: EndpointId.SCROLL_V2_MAINNET,
            url: 'https://rpc.scroll.io/',
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        base: {
            eid: EndpointId.BASE_V2_MAINNET,
            url: `https://mainnet.base.org`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        linea: {
            eid: EndpointId.ZKCONSENSYS_V2_MAINNET,
            url: `https://rpc.linea.build`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        xlayer: {
            eid: EndpointId.XLAYER_V2_MAINNET,
            url: `https://rpc.xlayer.tech`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        zksync: {
            eid: EndpointId.ZKSYNC_V2_MAINNET,
            url: `https://mainnet.era.zksync.io`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        zircuit: {
            eid: EndpointId.ZIRCUIT_V2_MAINNET,
            url: `https://zircuit1-mainnet.p2pify.com`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        swell: {
            eid: EndpointId.SWELL_V2_MAINNET,
            url: `https://rpc.ankr.com/swell`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        hemi: {
            eid: EndpointId.HEMI_V2_MAINNET,
            url: `https://7e57304f.rpc.hemi.network/rpc`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        bera: {
            eid: EndpointId.BERA_V2_MAINNET,
            url: `https://rpc.berachain.com`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        sonic: {
            eid: EndpointId.SONIC_V2_MAINNET,
            url: `https://rpc.soniclabs.com`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        hyperEvm: {
            eid: EndpointId.HYPERLIQUID_V2_MAINNET,
            url: `https://rpc.hypurrscan.io`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        unichain: {
            eid: EndpointId.UNICHAIN_V2_MAINNET,
            url: `https://mainnet.unichain.org`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
    },
    namedAccounts: {
        deployer: {
            default: 0, // wallet address of index[0], of the mnemonic in .env
        },
    },
}

export default config
