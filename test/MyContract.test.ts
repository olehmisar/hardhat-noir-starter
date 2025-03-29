import { expect } from "chai";
import hre, { ethers } from "hardhat";

it("proves and verifies on-chain", async () => {
  // Deploy a verifier contract
  const contractFactory = await ethers.getContractFactory("MyContract");
  const contract = await contractFactory.deploy();
  await contract.waitForDeployment();

  // Generate a proof
  const { noir, backend } = await hre.noir.getCircuit("my_noir");
  const input = { x: 1, y: 2 };
  const { witness } = await noir.execute(input);
  const { proof, publicInputs } = await backend.generateProof(witness, {
    keccak: true,
  });
  // it matches because we marked y as `pub` in `main.nr`
  expect(BigInt(publicInputs[0])).to.eq(BigInt(input.y));

  // Verify the proof on-chain
  const result = await contract.verify(proof, input.y);
  expect(result).to.eq(true);

  // You can also verify in JavaScript.
  const resultJs = await backend.verifyProof(
    {
      proof,
      publicInputs: [String(input.y)],
    },
    { keccak: true },
  );
  expect(resultJs).to.eq(true);
});
