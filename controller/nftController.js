const { BidModel, UserModel, HotCollectionModel } = require("contracts/build/lib/models");
const { NftModel } = require("../model");

exports.getNFTs = async (req, res) => {
  try {
    if (req.query.collection != null) {
      const hot_collections =await HotCollectionModel.findOne({
        id: req.query.collection
      });
      const token = await NftModel.find({
        hot_collections: hot_collections,
      }).populate('hot_collections');
      return res.send(token);
    }

    if (req.query.owner != null) {
      const owner = await UserModel.findOne({
        wallet: { $regex: new RegExp("^" + req.query.owner + "$", "i") },
      })
      const tokens = await NftModel.find({
         owner,
      }).populate('hot_collections');
      return res.send(tokens);
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
      for (let index = 0; index < NFT.history.length; index++) {
        const activity = NFT.history[index];
        const author = await UserModel.findById(activity.author);
        activity.author = author;
      }

      for (let index = 0; index < NFT.bids.length; index++) {
        const bid = NFT.bids[index];
        const bidder = await UserModel.findById(bid.author);
        bid.author = bidder;
      }
      return res.send(NFT);
    }

    const totalItems = await NftModel.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    const NFTs = await NftModel.find()
      .sort({ created_at: -1 })
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
