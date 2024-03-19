<p align="center">
  <a href="https://layerzero.network">
    <img alt="LayerZero" style="max-width: 500px" src="https://d3a2dpnnrypp5h.cloudfront.net/bridge-app/lz.png"/>
  </a>
</p>

<p align="center">
  <a href="https://layerzero.network" style="color: #a77dff">Homepage</a> | <a href="https://docs.layerzero.network/" style="color: #a77dff">Docs</a> | <a href="https://layerzero.network/developers" style="color: #a77dff">Developers</a>
</p>

<h1 align="center">OFT Example</h1>

<p align="center">
  <a href="https://docs.layerzero.network/contracts/oft" style="color: #a77dff">Quickstart</a> | <a href="https://docs.layerzero.network/contracts/oapp-configuration" style="color: #a77dff">Configuration</a> | <a href="https://docs.layerzero.network/contracts/options" style="color: #a77dff">Message Execution Options</a> | <a href="https://docs.layerzero.network/contracts/endpoint-addresses" style="color: #a77dff">Endpoint Addresses</a>
</p>

<p align="center">Template project for getting started with LayerZero's <code>OFT</code> contract development.</p>

### Getting Started

#### Installing dependencies

We recommend using `pnpm` as a package manager (but you can of course use a package manager of your choice):

```bash
pnpm install
```

#### Compiling your contracts

This project supports both `hardhat` and `forge` compilation. By default, the `compile` command will execute both:

```bash
pnpm compile
```

If you prefer one over the other, you can use the tooling-specific commands:

```bash
pnpm compile:forge
pnpm compile:hardhat
```

Or adjust the `package.json` to for example remove `forge` build:

```diff
- "compile": "$npm_execpath run compile:forge && $npm_execpath run compile:hardhat",
- "compile:forge": "forge build",
- "compile:hardhat": "hardhat compile",
+ "compile": "hardhat compile"
```

#### Running tests

Similarly to the contract compilation, we support both `hardhat` and `forge` tests. By default, the `test` command will execute both:

```bash
pnpm test
```

If you prefer one over the other, you can use the tooling-specific commands:

```bash
pnpm test:forge
pnpm test:hardhat
```

Or adjust the `package.json` to for example remove `hardhat` tests:

```diff
- "test": "$npm_execpath test:forge && $npm_execpath test:hardhat",
- "test:forge": "forge test",
- "test:hardhat": "$npm_execpath hardhat test"
+ "test": "forge test"
```

### Deploying your contracts

Using hardhat. Just add the network you want to deploy to.

The `--tag` flag is for the contract name.

```bash
npx hardhat deploy --tags RSETH_OFT --network <addNetworkHere>
```

## LZ lib commands

Wire up the contracts on `layerzero.config.js` with the default configs

```bash
npx hardhat lz:oapp:wire
```

Check the contracts are wired up correctly

```bash
npx hardhat lz:oapp:config:check
```

Human readable config table

```bash
npx hardhat lz:oapp:config:get --oapp-config layerzero.config.js
```

Setting LZ Configs

Make sure you set the DVN and the OAPP address in the `layerzero.config.js` file. The LZ bridge requires it. You may find the default DVN addresses here: [https://docs.layerzero.network/contracts/dvn-addresses](https://docs.layerzero.network/contracts/dvn-addresses)

There are examples in `layerzero.config.js` to guide you.

Verify contracts on Blockscout

1. Flatten contract and copy to clipboard

```bash
    forge flatten contracts/LRTConfig.sol:LRTConfig | pbcopy
```

2. Go to Blockscout and click on the contract address
3. Click on the `Contract` tab
4. Click on `Verify and Publish` button
5. Paste the flattened contract in the `Contract Code` field
6. Click on `Verify and Publish` button

Note: you may need to find the exact EVM compiler for the contract, e.g. Paris, Shaghai, etc

## Contracts Deployed

### ETH Mainnet

RSETH_OFTAdapter: 0x85d456B2DfF1fd8245387C0BfB64Dfb700e98Ef3

### Arbitrum

RSETH_OFT: 0x4186BFC76E2E237523CBC30FD220FE055156b41F

### Optimism

RSETH_OFT: 0x4186BFC76E2E237523CBC30FD220FE055156b41F

### Manta

RSETH_OFT: 0x4186BFC76E2E237523CBC30FD220FE055156b41F

### Mode

RSETH_OFT: 0x4186BFC76E2E237523CBC30FD220FE055156b41F







┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ error        Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (reason="execution reverted",                    │
│              method="estimateGas", transaction={"from":"0x1f7A03b70C5448DFd0a2C5a7865169253c2C769b","to":"0x4186BFC76E2E237523CBC30FD220FE055156b41F","data":"0x3400288b000000000000000000000000000000000000000000 │
│              00000000000000000076340000000000000000000000004186bfc76e2e237523cbc30fd220fe055156b41f","accessList":null}, error={"name":"ProviderError","_stack":"ProviderError: execution reverted\n    at         │
│              HttpProvider.request (/Users/gustavoguimaraes/Projects/Development/DAPPS/stader-labs/experiments-stader/kelp-dao-lz/node_modules/hardhat/src/internal/core/providers/http.ts:88:21)\n    at           │
│              processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async EthersProviderWrapper.send                                                                                           │
│              (/Users/gustavoguimaraes/Projects/Development/DAPPS/stader-labs/experiments-stader/kelp-dao-lz/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)","code":3,"_isPr │
│              oviderError":true,"data":"0x118cdaa70000000000000000000000001f7a03b70c5448dfd0a2c5a7865169253c2c769b"}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)                                        │
│ Network      arbitrum                                                                                                                                                                                              │
│ Endpoint     ARBITRUM_V2_MAINNET                                                                                                                                                                                   │
│ OmniAddress  0x4186BFC76E2E237523CBC30FD220FE055156b41F                                                                                                                                                            │
│ Description  Setting peer for eid 30260 (MODE_V2_MAINNET) to address 0x0000000000000000000000004186BFC76E2E237523CBC30FD220FE055156b41F                                                                            │
│ Data         0x3400288b00000000000000000000000000000000000000000000000000000000000076340000000000000000000000004186bfc76e2e237523cbc30fd220fe055156b41f                                                            │
│ Value        -                                                                                                                                                                                                     │
│ Gas Limit    -                                                                                                                                                                                                     │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ error        Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (reason="execution reverted",                    │
│              method="estimateGas", transaction={"from":"0x1f7A03b70C5448DFd0a2C5a7865169253c2C769b","to":"0x85d456B2DfF1fd8245387C0BfB64Dfb700e98Ef3","data":"0x3400288b000000000000000000000000000000000000000000 │
│              00000000000000000076340000000000000000000000004186bfc76e2e237523cbc30fd220fe055156b41f","accessList":null}, error={"name":"ProviderError","_stack":"ProviderError: execution reverted\n    at         │
│              HttpProvider.request (/Users/gustavoguimaraes/Projects/Development/DAPPS/stader-labs/experiments-stader/kelp-dao-lz/node_modules/hardhat/src/internal/core/providers/http.ts:88:21)\n    at           │
│              processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async EthersProviderWrapper.send                                                                                           │
│              (/Users/gustavoguimaraes/Projects/Development/DAPPS/stader-labs/experiments-stader/kelp-dao-lz/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)","code":3,"_isPr │
│              oviderError":true,"data":"0x118cdaa70000000000000000000000001f7a03b70c5448dfd0a2c5a7865169253c2c769b"}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)                                        │
│ Network      ethereum                                                                                                                                                                                              │
│ Endpoint     ETHEREUM_V2_MAINNET                                                                                                                                                                                   │
│ OmniAddress  0x85d456B2DfF1fd8245387C0BfB64Dfb700e98Ef3                                                                                                                                                            │
│ Description  Setting peer for eid 30260 (MODE_V2_MAINNET) to address 0x0000000000000000000000004186BFC76E2E237523CBC30FD220FE055156b41F                                                                            │
│ Data         0x3400288b00000000000000000000000000000000000000000000000000000000000076340000000000000000000000004186bfc76e2e237523cbc30fd220fe055156b41f                                                            │
│ Value        -                                                                                                                                                                                                     │
│ Gas Limit    -                                                                                                                                                                                                     │
└─────────────────────────────────────────────────────────────────────────
