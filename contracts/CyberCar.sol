// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";


contract CyberCar is ERC721A{

    address public owner;

    // Maximum minting Quantity
    uint256 public maxQuantity = 5;

    // Cybercar NFT Url
    string baseUrl = "https://rose-academic-galliform-365.mypinata.cloud/ipfs/QmeY9hbuQ2uHiBqLfXMwrJ4rwPaffwUxf6LcMsJxyhh6D3/?pinataGatewayToken=BUvHdzqTAXLLKcHp2oqNjAYDR-lP70mMmWTleG7g7YAbQiipyxtjnf9WjMkT0afP";

    // URL for the prompt description
    string public prompt =
        "An futuristic cyber car with violet neon lines glowing all over in an futuristic background";

    constructor() ERC721A("CyberCar", "Cc") {
        owner = msg.sender;
    }

    //  only Owner Called
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call");
        _;
    }

    // Function to mint CyberCar NFT
    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= maxQuantity ,"You can not mint more than 5");
        _mint(msg.sender, quantity);
    }
    

    // Url of NFT
    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    // Promt For Generating NFT in Adobe FireFly
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
