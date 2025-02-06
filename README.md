<img align="right" width="150" height="150" top="100" src="https://raw.githubusercontent.com/olehmisar/hardhat-noir/main/assets/banner.jpg" >

# Hardhat Noir Starter

This project demonstrates Noir integration with Hardhat using [Hardhat Noir](https://github.com/olehmisar/hardhat-noir) plugin.

## Getting started

Clone this repository and run `npm install`:

```sh
npx degit olehmisar/hardhat-noir-starter my-first-noir-project
cd my-first-noir-project
npm install
```

Then, run `npm run test` to run the tests.

## Development

1. Write circuits in `noir` folder.
2. `npx hardhat noir-new <circuit_name>` to create a new Noir circuit.
3. `npm run compile` to compile Noir and Solidity.
4. Integrate with [Solidity verifiers](https://noir-lang.org/docs/how_to/how-to-solidity-verifier) auto-generated by Noir.

## Testing

1. Write tests in `test` folder.
2. `npm run test` to run the tests.

## Deployment

Noir integrates with Solidity, so you can deploy your Solidity contracts like in any other Solidity project using the official [Hardhat Ignition](https://hardhat.org/ignition/docs/getting-started) or community maintained [Hardhat Deploy](https://github.com/wighawag/hardhat-deploy).
