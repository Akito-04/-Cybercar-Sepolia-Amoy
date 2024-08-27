# -Cybercar-Sepolia-Amoy
This project involves transferring NFTs (ERC-721/ERC-721A) from the Sepolia network to the Amoy Polygon network using the FxPortal bridge with the mintBatch function.
## Discription

This project provides a comprehensive guide on:

1. Creating NFT images with Modjournig and deploying them on the Sepolia network.
2. Writing a fully functional ERC-721A contract and importing NFTs into it.
3. Deploying the contract on the Sepolia network.
4. Batch minting NFTs (ERC-721A) to your wallet.
5. Approving the contract for FxBridge and connecting to the Amoy network using Fx contracts.
6. Depositing NFTs to the Amoy network and waiting 20-30 minutes for them to appear.
7. Checking your wallet balance on the Amoy network using Polyscan contract address.

## Getting started

To get started, you'll need a Solidity development environment, which you can set up using an offline IDE like VSCode. Once your IDE is ready, create your NFT images using online AI image generators like Midjourney. After generating the images, upload them to IPFS using a free provider like Pinata. Organize your images into a folder and upload the folder to Pinata to get your IPFS URL for the ERC-721A contract. Next, create your ERC-721A contract using the provided template. Finally, you'll need a wallet with test Sepolia ETH. If you don't have any, you can mine Sepolia ETH for free on SepoliaPoW, mine for a few minutes, and withdraw it to your wallet.

## Installing 

To successfully bridge your NFTs, you'll need the following basic packages:

1. Node.js.
2. HardHat (you can get started with HardHat [here](https://hardhat.org/hardhat-runner/docs/getting-started).

After installing these dependencies, paste your private key into the .env.example file by setting PRIVATE_KEY='Your Key Here'.


## Executing program

Here’s a step-by-step guide for bridging your NFTs:

1. Set Up Your Environment:
   - After pasting your private key into the .env.example file (`PRIVATE_KEY='Your Key Here'`), insert your wallet address into the mint.js and approveDeposit.js files.

2. Install Dependencies:
   - Run the following command to install all necessary dependencies:
    ````
         npm i
    ````
     
   - Install OpenZeppelin Contracts:
        ````
         npm install @openzeppelin/contracts
        ````
     
3. Deploy the ERC-721A Contract:
   - Deploy your contract to the Sepolia network:
        ```
         npx hardhat run scripts/deploy.js --network sepolia
        ```
     
4. Update Scripts with Contract Address:
   - Paste the newly deployed contract address into the tokenAddress variable in the mint.js and approveDeposit.js files.

5. Mint NFTs:
   - Mint NFTs to your wallet:
        ```
         npx hardhat run scripts/mint.js --network sepolia
        ```
     
6. Approve and Deposit NFTs:
   - Approve and deposit your NFTs to the Polygon network:

     ```
     npx hardhat run scripts/approveDeposit.js --network sepolia
     
     ```
     
7. Wait for Confirmation:
   - Allow 20-30 minutes for the tokens to appear on the Polygon network.

8. Check Your Tokens:
   - Use Polyscan.com to check your account for the tokens. Once they appear, click on the transaction to obtain the contract address for Polygon.

9. Check Balance on Polygon:
   - Update the tokenAddress in your getBalance script with the Polygon contract address.
   - Run the following command to check your new Polygon balance:
        ```
         npx hardhat run scripts/getBalance.js --network amoy
        ```
## Help
Main issues That Tend To Encounter:
* Having No SepoliaETH:(
 sol:)Go To [SepoliaPoW](https://sepolia-faucet.pk910.de/) ,Still Cant Get Contact Me

* If You Have To Phase Any Sort Of Dificulties Or Errors Feel Free To Approach Me I Will Be More Happy To Help You
```
amarnath759498@gmail.com
```

## Authors

Contributors names and contact info

Shadow Known As amar
ex. [@Amar](amarnath759498@gmail.com)


## License

This project is licensed under the [AMAR] License - see the LICENSE.md file for details
