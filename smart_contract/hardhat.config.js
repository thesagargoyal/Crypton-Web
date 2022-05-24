//https://eth-ropsten.alchemyapi.io/v2/axVIP-4s5GwjoKt9X4nPdii31BRAmNKp

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/axVIP-4s5GwjoKt9X4nPdii31BRAmNKp',
      accounts:[ 'c5a244acf637eb3a70539b42a7291ec1896535824de87e9f11f7ff33e624495b' ]
    }
  }
}