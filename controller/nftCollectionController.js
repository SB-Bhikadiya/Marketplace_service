const { NFTCollectionModel } = require("../model");

exports.getNFTCollection = async (req, res) => {
  try {
    if (req.query.creator != null) {
      const nftsCollection = await NFTCollectionModel.find({
        creator: { $regex: new RegExp("^" + req.query.creator + "$", "i") },
      });
      return res.send(nftsCollection);
    }
    const nftsCollection = await NFTCollectionModel.find();
    return res.send(nftsCollection);
  } catch (error) {
    return res.send(error);
  }
};

exports.postNFTCollection = async (req, res) => {
  try {
    const NFTsCollation = await NFTCollectionModel.create(req.body);
    res.send(NFTsCollation);
  } catch (error) {
    console.log(error);
  }
};
