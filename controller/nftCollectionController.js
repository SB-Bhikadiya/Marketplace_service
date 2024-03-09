const { NFTCollectionModel } = require("../model")

exports.getNFTCollection = async (req, res) => {
    try {
        if (req.query.creator != null) {
            const NFTsCollation = await NFTCollectionModel.find({creator:req.query.creator})
            return res.send(NFTsCollation)
        }
        const NFTsCollation = await NFTCollectionModel.find()
        return res.send(NFTsCollation)
    } catch (error) {
        return res.send(error);
    }
}

exports.postNFTCollection = async (req, res) => {
    try {
        const NFTsCollation = await NFTCollectionModel.create(req.body)
        res.send(NFTsCollation)
    } catch (error) {
        console.log(error);
    }
}