const { TokenModel } = require("../model");

exports.getToken = async (req, res) => {
  try {
    if (req.query.nft != null && req.query.tokenId != null) {
      const toekn = await TokenModel.findOne({
        address: { $regex: new RegExp("^" + req.body.nft + "$", "i") },
        tokenId: req.query.tokenId,
      });
      return res.send(toekn);
    }
    const toekn = await TokenModel.find();
    return res.send(toekn);
  } catch (error) {
    return res.send(error);
  }
};

exports.postToken = async (req, res) => {
  try {
    const toekn = await TokenModel.create(req.body);
    res.send(toekn);
  } catch (error) {
    console.log(error);
  }
};
