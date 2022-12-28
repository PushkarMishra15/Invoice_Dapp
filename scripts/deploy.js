const hre = require("hardhat");

async function main() {
  const lock = await hre.ethers.getContractFactory("invoice");
  const contract = await lock.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});