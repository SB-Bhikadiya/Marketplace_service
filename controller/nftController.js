const { NftModel } = require("../model");

exports.getNFTs = async(req,res) => {
    try {
        if (req.param.id != null) {
            
        const NFT = await NftModel.findOne({id:req.param.id})
        .populate('bids')
        .populate('history')
        .populate('author');
        res.send(NFT);
        }
        const NFTs = await NftModel.find()
            .populate('bids')
            .populate('history')
            .populate('author');
        res.send(NFTs);
    } catch (error) {
        res.send({error: error});
    }
}