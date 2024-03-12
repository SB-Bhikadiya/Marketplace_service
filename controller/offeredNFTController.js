const { OfferedNFTModel } = require("../model");

exports.getOfferedNFTs = async (req, res) => {
  try {
    if (req.query.nft != null && req.query.tokenId != null) {
      const offeredNFTs = await OfferedNFTModel.findOne({
        nft: { $regex: new RegExp("^" + req.body.nft + "$", "i") },
        tokenId: req.query.tokenId,
      });
      return res.send(offeredNFTs);
    }
    const offeredNFTs = await OfferedNFTModel.find();
    return res.send(offeredNFTs);
  } catch (error) {
    return res.send(error);
  }
};

exports.postOfferedNFTs = async (req, res) => {
  try {
    const offeredNFTs = await OfferedNFTModel.create(req.body);
    res.send(offeredNFTs);
  } catch (error) {
    console.log(error);
  }
};
