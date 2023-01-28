require("@nomicfoundation/hardhat-toolbox");
require('dotenv')

/** @type import('hardhat/config').HardhatUserConfig */
// const GORELI_RPC_URL = process.env.GORELI_RPC_URL
// const GORLIE_PRIVATE_KEY = process.env.GORLIE_PRIVATE_KEY
const GORELI_RPC_URL ="https://eth-goerli.g.alchemy.com/v2/MT1MaWzxSZITMm4SlMD-VgTLowkIfYAD"
const GORLIE_PRIVATE_KEY ="235ab9b34d5e96bbdf027e8c46b71fea75e6867ea56c398ec2a546dc35cd5463"
const ETHERSCAN_API_KEY ="J21NPT4PCB2GMM94UWEM61JP9MD5T6WV5D"
console.log(GORELI_RPC_URL)
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GORELI_RPC_URL,
      accounts: [GORLIE_PRIVATE_KEY],
      chainId:5
    }
  },
  etherscan:{
    apiKey:ETHERSCAN_API_KEY
  }
};
