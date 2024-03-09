const { CanceledOfferedNFTModel } = require("../model")

exports.getCanceledOfferedNFTs = async(req,res) => {
    try {
        if (req.query.nft != null && req.query.tokenId != null) {
            const canceledOfferedNFTs = await CanceledOfferedNFTModel.findOne({nft:req.query.nft,tokenId:req.query.tokenId})
            return res.send(canceledOfferedNFTs)
        }
        const canceledOfferedNFTs = await CanceledOfferedNFTModel.find()
        return res.send(canceledOfferedNFTs)
    } catch (error) {
        return res.send(error);
    }
}

exports.postCanceledOfferedNFTs = async (req, res) => {
    try {
        const canceledOfferedNFTs = await CanceledOfferedNFTModel.create(req.body)
        res.send(canceledOfferedNFTs)
    } catch (error) {
        console.log(error);
    }
}