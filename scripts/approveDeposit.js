
const hre = require("hardhat");

const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/CyberCar.sol/CyberCar.json");

const tokenAddress = "0x47B37d3111655324B6A1778313B5E8a52889E3A2"; // place your erc271a contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC271ARootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0x86cbF1529595d0315c6AF064304A9D7c1516bf43"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC271ARootAddress);
    
    const approveTx = await tokenContract.setApprovalForAll(fxERC271ARootAddress,true);
    await approveTx.wait();

    console.log('Approval confirmed');
for( i=0;i<5;i++){

    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();
}

    console.log("Your Cyber Car NFT's Has Been Transfered To Amoy NetWork");
    
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
