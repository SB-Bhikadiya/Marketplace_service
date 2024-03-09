const { AcceptedNFTModel } = require("../model")

exports.getAcceptedNFTs = async (req, res) => {
    try {
        if (req.query.nft != null && req.query.tokenId != null) {
            const acceptedNFTs = await AcceptedNFTModel.find({nft:req.query.nft,tokenId:req.query.tokenId})
            return res.send(acceptedNFTs)
        }
        const acceptedNFTs = await AcceptedNFTModel.find()
        return res.send(acceptedNFTs)
    } catch (error) {
        return res.send(error);
    }
}

exports.postAcceptedNFTs = async (req, res) => {
    try {
        const acceptedNFTs = await AcceptedNFTModel.create(req.body)
        res.send(acceptedNFTs)
    } catch (error) {
        console.log(error);
    }
}