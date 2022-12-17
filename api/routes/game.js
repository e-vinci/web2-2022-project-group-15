const express = require('express');

const { creatPlayer, 
    setmoneyToLvlUp, 
    getmoneyToLvlUp, 
    getCoal, 
    getIron, 
    getSilver, 
    getGold, 
    setCoal, 
    setIron, 
    setSilver, 
    setGold, 
    upHisLvl, 
    getmoney } = require('../models/game');

const { getId } = require('../models/users');

const router = express.Router();

router.post('/getCoal',(req,res)=>{
    console.log("rout")
    const result = getCoal(getId());
    return res.json(result);
});

router.post('/getIron',(req,res)=>{
    const result = getIron(getId());
    return res.json(result);
});

router.post('/getSilver',(req,res)=>{
    const result = getSilver(getId());
    return res.json(result);
});

router.post('/getGolde',(req,res)=>{
    const result = getGold(getId());
    return res.json(result);
});
  

router.post('/setgame', (req) => {
    const money = req?.body?.money !== 0 ? req.body.money : undefined;
  
    if (money !==undefined){
         setmoneyToLvlUp(id, money);
    }
    
  });
  

module.exports=router;