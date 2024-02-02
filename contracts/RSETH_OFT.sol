// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import {OFT} from "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFT.sol";

/// @dev contract used for Destination chains
contract RSETH_OFT is OFT {
    constructor(string memory _name, string memory _symbol, address _lzEndpoint, address _delegate)
        OFT(_name, _symbol, _lzEndpoint, _delegate)
    {}
}