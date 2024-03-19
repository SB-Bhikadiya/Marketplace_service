const { ListedNFTModel, TokenModel } = require("../model");

exports.getListedNFTs = async (req, res) => {
  try {
    if (req.query.owner != null) {
      const listedNFTs = await TokenModel.find({
        owner: { $regex: new RegExp("^" + req.query.owner + "$", "i") },
      }).populate({ path: "metadata" });
      return res.send(listedNFTs);
    }
    const listedNFTs = await ListedNFTModel.find();
    return res.send(listedNFTs);
  } catch (error) {
    return res.send(error);
  }
};

exports.postListedNFTs = async (req, res) => {
  try {
    const listedNFTs = await ListedNFTModel.create(req.body);
    res.send(listedNFTs);
  } catch (error) {
    console.log(error);
  }
};
