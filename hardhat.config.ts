import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/vrcOlLGJbCrICwHZUJViWQZUAbWx0Mxc",
        blockNumber: 15890000,
      },
      accounts: {
        mnemonic: "deliver outdoor lawsuit jealous neck humble average bundle antenna among answer access",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    }
  }
};

export default config;
