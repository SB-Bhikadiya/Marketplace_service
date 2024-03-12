const { ResultedAuctionModel } = require("../model");

exports.getResultedAuctionNFTs = async (req, res) => {
  try {
    if (req.query.nft != null && req.query.tokenId != null) {
      const resultedAuctionNFTs = await ResultedAuctionModel.find({
        nft: { $regex: new RegExp("^" + req.body.nft + "$", "i") },
        tokenId: req.query.tokenId,
      });
      return res.send(resultedAuctionNFTs);
    }
    const resultedAuctionNFTs = await ResultedAuctionModel.find();
    return res.send(resultedAuctionNFTs);
  } catch (error) {
    return res.send(error);
  }
};

exports.postResultedAuctionNFTs = async (req, res) => {
  try {
    const resultedAuctionNFTs = await ResultedAuctionModel.create(req.body);
    res.send(resultedAuctionNFTs);
  } catch (error) {
    console.log(error);
  }
};
