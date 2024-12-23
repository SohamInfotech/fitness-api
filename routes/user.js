var express = require('express');
var hc=require('../controllar/user')
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


/* GET home page. */
router.post('/Signup',upload.single('profileImage'),hc.Signup );
router.post('/Login',hc.Login );
router.delete('/deletedata/:id',hc.deletedata );

module.exports = router;
