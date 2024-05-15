let totalNFTs = 0;
const nftCollection = [];

function mintNFT(name, age, height, weight) {
    const newNFT = {
        name: name,
        age: age,
        height: height,
        weight: weight,
    };
    nftCollection.push(newNFT);
    totalNFTs++;
}

function listNFTs() {
    console.log("Listing all NFTs:");
    nftCollection.forEach((nft, index) => {
        console.log("NFT " + (index + 1) + ":");
        console.log("Name: " + nft.name);
        console.log("Age: " + nft.age);
        console.log("Height: " + nft.height);
        console.log("Weight: " + nft.weight);
        console.log("-------------");
    });
}

function getTotalSupply() {
    console.log("Total number of NFTs: " + totalNFTs);
}

mintNFT("Randel Ortega", "25", "185cm", "55kg");
mintNFT("Kelly Wayji", "24", "165cm", "47kg");
mintNFT("Onit Young God", "23", "168cm", "68kg");
mintNFT("Santino YG", "22", "185cm", "60kg");
mintNFT("Lednar Agetro", "21", "182cm", "50kg");

listNFTs();
getTotalSupply();
