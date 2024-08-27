
const hre = require("hardhat");

async function main() {
 
  const Cc = await hre.ethers.getContractFactory("CyberCar");

  const Cyber = await Cc.deploy();

  await Cyber.deployed();

  console.log("Cyber Car Has Launched to Address: ", Cyber.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
