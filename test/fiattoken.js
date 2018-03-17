let FiatToken = artifacts.require('FiatToken');

contract('FiatToken', async (accounts) => {
    it("Can mint tokens from owner", async () => {
        let instance = await FiatToken.deployed();
        let prevBalance = parseInt(await instance.balanceOf(accounts[1]));
        assert(await instance.mint(accounts[1], 100));
        let currBalance = parseInt(await instance.balanceOf(accounts[1]));
        let rate = parseInt(await instance.tokensPerDollar.call())
        assert(currBalance - prevBalance === 100 * rate);
    })
    it("Cannot mint tokens from someone apart from owner", async () => {
        let instance = await FiatToken.deployed();
        let prevBalance = parseInt(await instance.balanceOf(accounts[1]))
        promiseToThrow(instance.mint(accounts[1], 100, {from: accounts[1]}))
        let currBalance = parseInt(await instance.balanceOf(accounts[1]))
        assert("Balance does not change", currBalance - prevBalance === 0)
    })
    it("Cannot buy more than token supply", async () => {
        let instance = await FiatToken.deployed();
        let prevBalance = parseInt(await instance.balanceOf(accounts[1]))
        promiseToThrow(instance.mint(accounts[1], 10000000000, {from: accounts[1]}))
        let currBalance = parseInt(await instance.balanceOf(accounts[1]))
        assert("Balance does not change", currBalance - prevBalance === 0)
    })
})

function promiseToThrow(p, msg) {
    return p.then(_ => false).catch(_ => true).then(res => assert(res, msg));
}
