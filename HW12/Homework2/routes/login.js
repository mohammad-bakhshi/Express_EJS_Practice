const express=require('express');

const router=express.Router();

const userData=require('../data/userData.json');

router.get('/',(req,res)=>{
    res.render('pages/login');
})


router.post('/send',(req,res)=>{
    let test=false;
    for (let index = 0; index < userData.length; index++) {
        if (userData[index].username===req.body.username&&userData[index].password===req.body.password) {
            test=true;
            break;
        }
    }
    if (test===true) {
        res.send('pass');
    }
    else{
        res.send('fail');
    }
});




module.exports =router;