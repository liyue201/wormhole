// run this script with truffle exec

const jsonfile = require("jsonfile");
const TokenBridge = artifacts.require("TokenBridge");
const NFTBridge = artifacts.require("NFTBridgeEntrypoint");
const TokenImplementation = artifacts.require("TokenImplementation");
const BridgeImplementationFullABI = jsonfile.readFileSync("../build/contracts/BridgeImplementation.json").abi
const bscTokenBridgeVAA = process.env.REGISTER_BSC_TOKEN_BRIDGE_VAA
const bscNTFBridgeVAA = process.env.REGISTER_BSC_NFT_BRIDGE_VAA

module.exports = async function (callback) {
    try {
        const accounts = await web3.eth.getAccounts();
        const initialized = new web3.eth.Contract(BridgeImplementationFullABI, TokenBridge.address);
        const nftBridge = new web3.eth.Contract(BridgeImplementationFullABI, NFTBridge.address);

        // Register the BSC endpoint
        await initialized.methods.registerChain("0x" + bscTokenBridgeVAA).send({
            value: 0,
            from: accounts[0],
            gasLimit: 2000000
        });

        // Register the BSC NFT bridge endpoint
        await nftBridge.methods.registerChain("0x" + bscNTFBridgeVAA).send({
            value: 0,
            from: accounts[0],
            gasLimit: 2000000
        });

        callback();
    }
    catch (e) {
        callback(e);
    }
}

