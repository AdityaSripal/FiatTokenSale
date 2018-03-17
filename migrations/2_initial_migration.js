var FiatToken = artifacts.require("FiatToken");

module.exports = function(deployer) {
    deployer.deploy(FiatToken);
  };