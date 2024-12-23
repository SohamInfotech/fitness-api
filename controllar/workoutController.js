const model1 = require('../model/workout')
exports.createdata1 = async (req, res) => {
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

exports.showdata1 = async (req, res) => {
    try {
        const show = await model1.find().populate('UserId')
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

exports.deletedata1 = async (req, res) => {
    const id=req.params.id;
    try {
        const show = await model1.findByIdAndDelete(id)
        res.status(200).json({
            status: 'Success',
            Message: 'Data delete success',
            Data: show
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            Message: error.message
        })
    }
}
