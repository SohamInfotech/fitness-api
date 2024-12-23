const jwt = require('jsonwebtoken');
const model = require('../controllar/user')

exports.tokensecure = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) throw new Error("token is not found");
        const verifytoken = jwt.verify(token, 'surat')
        const userverify = await model.findOne(verifytoken.id)
        if (!userverify) throw new Error("user is not found");
        next();

    } catch (error) {
        res.status(401).json({
            status:"fail",
            message:error.message
        })

    }

}