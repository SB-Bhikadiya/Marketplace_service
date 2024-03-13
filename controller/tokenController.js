const { TokenModel } = require("../model");

exports.getToken = async (req, res) => {
  try {
    if (req.query.owner != null) {
      const token = await TokenModel.find({
        owner: { $regex: new RegExp("^" + req.query.owner + "$", "i") },
      }).populate({ path: "metadata" });
      return res.send(token);
    }
    const toekn = await TokenModel.find();
    return res.send(toekn);
  } catch (error) {
    return res.send(error);
  }
};

exports.postToken = async (req, res) => {
  try {
    const token = await TokenModel.create(req.body);
    res.send(token);
  } catch (error) {
    console.log(error);
  }
};
