var jwt = require('jsonwebtoken');

exports.authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(token);

        //verify token
        if(!token) {
            return res.status(401).send({ error: 'No token provided' })
        }
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                res.send(err)
            } else {
                next();
            }
        });
    } catch (error) {
        res.send({ error: error })
    }
}