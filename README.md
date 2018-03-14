# FiatTokenSale

This is a smart contract to facilitate token sales enabled by fiat. The model assumes the honesty of the founding team. To buy tokens, one signs a LEGAL contract with the founding team specifying the number of tokens to be given for the fiat investment. The founding team then submits a transaction on the Ethereum root chain to send the correct amount of tokens to the investor's Ethereum address. These tokens will be ERC-20 tokens, so one must use a wallet that supports ERC-20 token standard.

Implementation:

The founding team owns an address that is solely capable of minting and sending tokens to other addresses.