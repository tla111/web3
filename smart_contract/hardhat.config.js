require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/xy3SnTeTRq9BiOqN4Mk9XsjptYiKPwaE",
      accounts: ["310da03630434d41464ac1f44b182ea1b9a15b0b3ee6b4bac51e7d762f658144"],
    }
  }
}