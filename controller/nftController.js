const { NftModel } = require("../model");

exports.getNFTs = async (req, res) => {
  try {

    if (req.query.owner != null) {
      const token = await NftModel.find({
        owner: { $regex: new RegExp("^" + req.query.owner + "$", "i") },
      }).populate({ path: "metadata" });
      return res.send(token);
    }

    const page = parseInt(req.query.page);
    const limit = 16;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    if (req.query.id != null) {
      const NFT = await NftModel.findOne({ id: req.query.id })
        .populate("bids")
        .populate("history")
        .populate("author")
        .populate("owner")
        .populate("hot_collections")
        .populate("metadata");
      return res.send(NFT);
    }

    const totalItems = await NftModel.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    const NFTs = await NftModel.find()
      .skip(startIndex)
      .limit(limit)
      .populate("bids")
      .populate("history")
      .populate("author")
      .populate("hot_collections")
      .populate("metadata");

    // Pagination result
    const pagination = {
      currentPage: page,
      totalPages: totalPages,
    };

    // If there's a next page
    if (endIndex < totalItems) {
      pagination.next = {
        page: page + 1,
        limit: limit,
      };
    }

    // If there's a previous page
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit: limit,
      };
    }

    res.send({ pagination, data: NFTs });
    // res.send(NFTs);
  } catch (error) {
    res.send({ error: error });
  }
};
