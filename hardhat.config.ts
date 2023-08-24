import { HardhatUserConfig } from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox";
import "hardhat-abi-exporter";
import "hardhat-openzeppelin-defender";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC_URL || "",
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY !== undefined
          ? [process.env.DEPLOYER_PRIVATE_KEY]
          : [],
    },
    goerli: {
      url: process.env.GOERLI_TESTNET_RPC_URL || "",
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY !== undefined
          ? [process.env.DEPLOYER_PRIVATE_KEY]
          : [],
    },
    ropsten: {
      url: process.env.ROPSTEN_RPC_URL || "",
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY !== undefined
          ? [process.env.DEPLOYER_PRIVATE_KEY]
          : [],
    },
    bsc: {
      url: process.env.BSC_RPC_URL || "",
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY !== undefined
          ? [process.env.DEPLOYER_PRIVATE_KEY]
          : [],
    },
    bscTestnet: {
      url: process.env.BSC_TESTNET_RPC_URL || "",
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY_TESTNET !== undefined
          ? [process.env.DEPLOYER_PRIVATE_KEY_TESTNET]
          : [],
    },
    polygon: {
      url: process.env.POLYGON_RPC_URL || "",
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY !== undefined
          ? [process.env.DEPLOYER_PRIVATE_KEY]
          : [],
    },
    polygonMumbai: {
      url: process.env.MUMBAI_RPC_URL || "",
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY_TESTNET !== undefined
          ? [process.env.DEPLOYER_PRIVATE_KEY_TESTNET]
          : [],
    },
    avalanche: {
      url: process.env.AVALANCHE_RPC_URL || "",
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY !== undefined
          ? [process.env.DEPLOYER_PRIVATE_KEY]
          : [],
    },
    avalancheTestnet: {
      url: process.env.AVALANCHE_TESTNET_RPC_URL || "",
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY_TESTNET !== undefined
          ? [process.env.DEPLOYER_PRIVATE_KEY_TESTNET]
          : [],
    },
    local: {
      url: process.env.TESTNET_RPC_URL || "",
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY_TESTNET !== undefined
          ? [process.env.DEPLOYER_PRIVATE_KEY_TESTNET]
          : [],
    },
    hardhat: {
      chainId: 43113, //blockchain_1:80001,blockchain_2:43113,blockchain_3:97,blockchain_4:5,blockchain_5:420,
      mining: {
        auto: true,
        interval: 3000,
      },
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      //goerli: process.env.ETHERSCAN_API_KEY || "",
      bsc: "XPWC1NGB3UAWGCMVRMU1RW9U46YMZPEH5F",
      bscTestnet: "XPWC1NGB3UAWGCMVRMU1RW9U46YMZPEH5F",
      //avalanche: process.env.AVALANCHE_API_KEY || "" ,
      //avalancheTestnet: process.env.AVALANCHE_API_KEY || "" ,
      polygon: process.env.POLYGONSCAN_API_KEY || "",
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
    },
  },
  abiExporter: {
    path: "./abis",
    runOnCompile: true,
    clear: true,
    flat: true,
    only: [],
    spacing: 2,
    //pretty: true,
    format: "json",
  },
  OpenzeppelinDefenderCredential: {
    apiKey: process.env.API_KEY || "",
    apiSecret: process.env.API_SECRET || "",
  },
  gasReporter: {
    enabled: true,
    gasPriceApi: "https://api.bscscan.com/api?module=proxy&action=eth_gasPrice",
  },
};

export default config;