const { ListedNFTModel } = require("../model")

exports.getListedNFTs = async(req,res) => {
    try {
        if (req.query.nft != null && req.query.tokenId != null) {
            const listedNFTs = await ListedNFTModel.findOne({nft:req.query.nft,tokenId:req.query.tokenId})
            return res.send(listedNFTs)
        }
        const listedNFTs = await ListedNFTModel.find()
        return res.send(listedNFTs)
    } catch (error) {
        return res.send(error);
    }
}

exports.postListedNFTs = async (req, res) => {
    try {
        const listedNFTs = await ListedNFTModel.create(req.body)
        res.send(listedNFTs)
    } catch (error) {
        console.log(error);
    }
}
