
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/CyberCar.sol/CyberCar.json");
require('dotenv').config()

const tokenAddress = "0x47B37d3111655324B6A1778313B5E8a52889E3A2"; //Paste erc721a Contract Address Here,
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x86cbF1529595d0315c6AF064304A9D7c1516bf43"; 
 // paste your public address for your wallet here

async function main() {

    const car = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    
    

    
      const depositNFT = await car.mint(5);
  
      // Wait for the deposit to be confirmed
      await depositNFT.wait();
    
  
    
    console.log( + await car.balanceOf(walletAddress) + " Cyber Car Launched To Your Wallet");
}
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
