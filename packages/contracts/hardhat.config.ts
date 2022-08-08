import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.7",
  networks: {
    hardhat: {
      forking: {
        url: "https://polygon-mumbai.g.alchemy.com/v2/vzOwiL7MTT2bjnZozNtemIWyq0zC6oYW",
      },
    },
  },
  mocha: {
    timeout: 100000,
  },
};

export default config;
