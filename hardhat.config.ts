require('dotenv').config()

import 'hardhat-deploy'
import 'hardhat-contract-sizer'
import '@nomiclabs/hardhat-ethers'
import '@layerzerolabs/toolbox-hardhat'
import { HardhatUserConfig } from 'hardhat/types'

import { EndpointId } from '@layerzerolabs/lz-definitions'

const RPC_KEY = process.env.RPC_KEY
const ACCOUNT_PRIVATE_KEY: string = process.env.ACCOUNT_PRIVATE_KEY || '' //without 0x

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
            eid: EndpointId.ETHEREUM_MAINNET,
            url: `https://eth-mainnet.nodereal.io/v1/${RPC_KEY}`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        arbitrum: {
            eid: EndpointId.ARBITRUM_MAINNET,
            url: `https://arbitrum-mainnet.nodereal.io/v1/${RPC_KEY}`,
            accounts: [`${ACCOUNT_PRIVATE_KEY}`],
        },
        optimism: {
            eid: EndpointId.OPTIMISM_MAINNET,
            url: `https://optimism-mainnet.nodereal.io/v1/${RPC_KEY}`,
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
