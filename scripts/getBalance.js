
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/CyberCar.sol/CyberCar.json");

const tokenAddress = "0x3071C99cC9BD64438f75846eCd615a2Af0780D7D"; // paste your erc271a contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x86cbF1529595d0315c6AF064304A9D7c1516bf43"; // paste your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " Cyber Cars NFT'S ");
    console.log("Thank you For Watching")
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
