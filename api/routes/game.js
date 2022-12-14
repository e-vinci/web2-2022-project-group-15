const express = require('express');
const gameCalcul=require('../models/game');

const router = express.Router();

router.get('/getnbreressource',(req,res)=>{
    const resource=req.query.resources;
    const result=gameCalcul.getnbreressource(resource);
    return res.json(result);

});
router.get('/getnbreressource',(req,res)=>{
   
    const result=gameCalcul.getmoney();
    return res.json(result);

});
  

router.post('/setgame', (req) => {
    const money = req?.body?.money !== 0 ? req.body.money : undefined;
    const resources= req?.body?.resources !== 0 ? req.body.resources : undefined;
  
    if (money !==undefined){
         gameCalcul.setmoneyToLvlUp(money);
    }
    if(resources !== undefined){
        gameCalcul.setresource(resources)
        
    }
    

  });
  

module.exports=router;