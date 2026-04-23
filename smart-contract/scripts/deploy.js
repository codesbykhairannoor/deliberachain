const hre = require("hardhat");

async function main() {
  console.log("Deploying ChainVault...");

  const ChainVault = await hre.ethers.getContractFactory("ChainVault");
  const contract = await ChainVault.deploy();

  await contract.waitForDeployment();

  console.log("ChainVault deployed to:", await contract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
