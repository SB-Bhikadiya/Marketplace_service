const { BoughtNFTModel } = require("../model")

exports.getBoughtNFTs = async(req,res) => {
    try {
        if (req.query.nft != null && req.query.tokenId != null) {
            const boughtNFTs = await BoughtNFTModel.findOne({nft:req.query.nft,tokenId:req.query.tokenId})
            return res.send(boughtNFTs)
        }
        const boughtNFTs = await BoughtNFTModel.find()
        return res.send(boughtNFTs)
    } catch (error) {
        return res.send(error);
    }
}

exports.postBoughtNFTs = async (req, res) => {
    try {
        const boughtNFTs = await BoughtNFTModel.create(req.body)
        res.send(boughtNFTs)
    } catch (error) {
        console.log(error);
    }
}