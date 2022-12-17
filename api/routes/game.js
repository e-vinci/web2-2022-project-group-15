const express = require('express');
const gameCalcul = require('../models/game');
const { getId } = require('../models/users')

const router = express.Router();

router.post('/getCoal',(req,res)=>{
    const result = gameCalcul.getCoal(getId());
    return res.json(result);
});

router.post('/getIron',(req,res)=>{
    const result = gameCalcul.getIron(getId());
    return res.json(result);
});

router.post('/getSilver',(req,res)=>{
    const result = gameCalcul.getSilver(getId());
    return res.json(result);
});

router.post('/getGolde',(req,res)=>{
    const result = gameCalcul.getGolde(getId());
    return res.json(result);
});
  

router.post('/setgame', (req) => {
    const money = req?.body?.money !== 0 ? req.body.money : undefined;
    const resources= req?.body?.resources !== 0 ? req.body.resources : undefined;

    const id = getId();
  
    if (money !==undefined){
         gameCalcul.setmoneyToLvlUp(id, money);
    }
    if(resources !== undefined){
        gameCalcul.setresource(id, resources)
        
    }
    

  });
  

module.exports=router;