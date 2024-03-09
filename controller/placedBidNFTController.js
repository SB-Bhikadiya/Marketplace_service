const { PlacedBidModel } = require("../model")

exports.getPlacedBidNFTs = async (req, res) => {
    try {
        if (req.query.nft != null && req.query.tokenId != null) {
            const placedBidNFTs = await PlacedBidModel.find({nft:req.query.nft,tokenId:req.query.tokenId})
            return res.send(placedBidNFTs)
        }
        const placedBidNFTs = await PlacedBidModel.find()
        return res.send(placedBidNFTs)
    } catch (error) {
        return res.send(error);
    }
}

exports.postPlacedBidNFTs = async (req, res) => {
    try {
        const placedBidNFTs = await PlacedBidModel.create(req.body)
        res.send(placedBidNFTs)
    } catch (error) {
        console.log(error);
    }
}