import "@nomicfoundation/hardhat-toolbox";
import "hardhat-plugin-noir";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100000000,
      },
    },
  },
  noir: {
    version: "0.35.0",
  },
};

export default config;
