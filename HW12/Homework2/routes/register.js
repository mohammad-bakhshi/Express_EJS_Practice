const express=require('express');

const router=express.Router();

const userData=require('../data/userData.json');

const fs=require('fs');

const path=require('path');

router.get('/',(req,res)=>{
    res.render('pages/register');
})

router.post('/info',(req,res)=>{
    let test=true;
    for (let index = 0; index < userData.length; index++) {
        if (userData[index].username===req.body.username) {
            test=false;
            break;
        }
    }
    if (test===true) {
        let data={
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            gender:"male",
            isLoggedIn:true
        }
        userData.push(data);
        fs.writeFileSync(path.join(__dirname,'../data/userData.json'),JSON.stringify(userData))
        res.send('pass');
    }
    else{
        res.send('fail');
    }
});


module.exports =router;