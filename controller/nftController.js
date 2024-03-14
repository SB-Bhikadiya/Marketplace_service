const { NftModel } = require("../model");

exports.getNFTs = async(req,res) => {
    try {
        const NFTs = await NftModel.find()
            .populate('bids')
            .populate('history')
            .populate('author');
        res.send(NFTs);
    } catch (error) {
        console.log(error);
    }
}