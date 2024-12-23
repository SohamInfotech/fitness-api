var express = require('express');
var hc=require('../controllar/nutritionController')
const router = express.Router();


/* GET home page. */
router.post('/createdata2',hc.createdata2 );
router.get('/showdata2',hc.showdata2 );

module.exports = router;
