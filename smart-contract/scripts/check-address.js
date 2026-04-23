const { ethers } = require("ethers");
const privateKey = "aa64c5b3a8b70afa903cbb855615459465f6b9151c01be35d0c435af0021c77e";
const wallet = new ethers.Wallet(privateKey);
console.log("Address:", wallet.address);
