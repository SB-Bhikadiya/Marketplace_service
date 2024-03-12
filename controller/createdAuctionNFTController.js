const { CreatedAuctionModel } = require("../model");

exports.getCreatedAuctionNFTs = async (req, res) => {
  try {
    if (req.query.nft != null && req.query.tokenId != null) {
      const createdAuctionNFTs = await CreatedAuctionModel.findOne({
        nft: { $regex: new RegExp("^" + req.body.nft + "$", "i") },
        tokenId: req.query.tokenId,
      });
      return res.send(createdAuctionNFTs);
    }
    const createdAuctionNFTs = await CreatedAuctionModel.find();
    return res.send(createdAuctionNFTs);
  } catch (error) {
    return res.send(error);
  }
};

exports.postCreatedAuctionNFTs = async (req, res) => {
  try {
    const createdAuctionNFTs = await CreatedAuctionModel.create(req.body);
    res.send(createdAuctionNFTs);
  } catch (error) {
    console.log(error);
  }
};
