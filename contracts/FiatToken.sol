pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC20/CappedToken.sol';

contract FiatToken is CappedToken(10000000000) {
    uint256 public tokensPerDollar;

    function FiatToken() {
        tokensPerDollar = 100;
    }

    function mint(address _to, uint256 _fiatAmount) returns (bool) {
        return super.mint(_to, _fiatAmount * tokensPerDollar);
    }
}