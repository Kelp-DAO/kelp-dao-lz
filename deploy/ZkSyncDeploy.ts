import 'dotenv/config'
import assert from 'assert'

import { Deployer } from '@matterlabs/hardhat-zksync-deploy'
import * as ethers from 'ethers'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { Wallet, utils } from 'zksync-ethers'

export default async function (hre: HardhatRuntimeEnvironment) {
    console.log(`Running deploy script`)

    const chainId = await hre.getChainId()
    if (chainId !== '324') {
        console.error('This deployment script is only meant for ZkSync mainnet')
        return
    }

    // Initialize the wallet.
    const wallet = new Wallet(process.env.ACCOUNT_PRIVATE_KEY)
    console.log(`Wallet address: ${wallet.address}`)

    assert(wallet, 'Missing wallet')

    // Create deployer object and load the artifact of the contract we want to deploy.
    const deployer = new Deployer(hre, wallet)
    // Load contract
    const artifact = await deployer.loadArtifact('RSETH_OFT')

    const endpointV2Deployment = await hre.deployments.get('EndpointV2')

    console.log('CONTRACT_DEPLOYER_ADDRESS', utils.CONTRACT_DEPLOYER_ADDRESS)

    console.log('EndpointV2 address: ', endpointV2Deployment.address)

    ethers.logger.info('Deploying RSETH_OFT contract')

    throw new Error('Degug stop')

    const args = [
        'KelpDao Restaked ETH', // name
        'rsETH', // symbol
        endpointV2Deployment.address, // LayerZero's EndpointV2 address
        wallet.address, // owner
    ]

    const RSETH_OFTContract = await deployer.deploy(artifact, args)

    // Show the contract info.
    console.log(`${artifact.contractName} was deployed to ${await RSETH_OFTContract.getAddress()}`)
}
