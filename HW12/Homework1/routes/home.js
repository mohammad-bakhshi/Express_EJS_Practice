const express = require("express");
const router = express.Router();
const products=require('../data/products.json');



router.get('/', function(req, res){
    res.render('./pages/home',products[0]);
});

router.get('/product:id', function(req, res){
    res.send('product '+req.params.id);
})



module.exports =router;
