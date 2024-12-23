const model = require('../model/user')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')

exports.Signup = async (req, res) => {
    const Data= req.body;
    try {
        
        Data.password = await bcrypt.hash (req.body.password,10)
        const create = await model.create(Data)
        Data.profileImage = req.file.filename;
        res.status(200).json({
            status: 'Success',
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

// exports.Signup = async (req, res) => {
//     const Data = req.body;

//     try {
//         Data.password = await bcrypt.hash(req.body.password, 10);
//         Data.profileImage = req.file.filename;
//         const create = await model.create(Data);

//         res.status(200).json({
//             status: 'Success',
//             Message: 'Data entry successful',
//             Data: create
//         });
//     } catch (error) {
//         res.status(404).json({
//             status: 'Fail',
//             Message: error.message
//         });
//     }
// };

exports.Login = async (req, res) => {
    try {
        const logindata = await model.findOne({ email: req.body.email });
        if (!logindata) throw new Error("Email not found");
        const checkpassword = await bcrypt.compare(req.body.password, logindata.password);
        if (!checkpassword) throw new Error("Invalid password");
        const token = jwt.sign({ id: logindata._id }, 'surat', { expiresIn: '1h' });
        res.status(200).json({
            status: 'Success',
            Message: 'Login successful',
            Data: logindata,
            token
        });
    } catch (error) {
        res.status(401).json({
            status: 'Fail',
            Message: error.message
        });
    }
}
exports.deletedata = async (req, res) => {
    const id=req.params.id;
    try {
        const show = await model.findByIdAndDelete(id)
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
