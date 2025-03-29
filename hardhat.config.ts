import "@nomicfoundation/hardhat-toolbox";
import "hardhat-plugin-noir";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.29",
    settings: { optimizer: { enabled: true, runs: 100000000 } },
  },
  noir: {
    version: "1.0.0-beta.3",
  },
};

export default config;
