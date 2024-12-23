const model1 = require('../model/nutrition')
exports.createdata2 = async (req, res) => {
    try {
        const create = await model1.create(req.body)
        res.status(200).json({
            status: 'Successful',
            Message: 'Data enter success',
            Data: create
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            Message: error.message
        })
    }
}

exports.showdata2 = async (req, res) => {
    try {
        const show = await model1.find().populate('UserId1')
        res.status(200).json({
            status: 'Successful',
            Message: 'Data show success',
            Data: show
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            Message: error.message
        })
    }
}

