const { UserModel } = require("../model")

exports.getUser = async(req,res) => {
    try {
        const user = await UserModel.findOne({wallet:req.query.wallet})
        res.send(user)
    } catch (error) {
        res.send(error)
    }
}

exports.postUser = async(req,res) => {
    try {
        const user = await UserModel.create(req.body)
        res.send(user)
    } catch (error) {
        res.send(error)
    }
}

exports.login = async(req,res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})
        if(user) {
            if(user.password === req.body.password) {
                res.send(user)
            } else {
                res.status(401).send({message: "Invalid password"})
            }
        } else {
            res.status(401).send({message: "Invalid email"})
        }
    } catch (error) {
        res.send(error);
    }
}