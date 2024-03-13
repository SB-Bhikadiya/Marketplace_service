const { MetadataModel, TokenModel } = require("../model");

exports.getTokenMetadata = async (req, res) => {
  try {
    if (req.query.tokenId != null) {
      const tokenMetadata = await MetadataModel.findOne({
        tokenId: req.query.tokenId,
      });
      return res.send(tokenMetadata);
    }
    const toekn = await MetadataModel.find();
    return res.send(toekn);
  } catch (error) {
    return res.send(error);
  }
};
