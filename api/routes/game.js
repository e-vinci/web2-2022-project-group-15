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
  

router.post('/setgame', (req, res) => {
    const money = req?.body?.money !== 0 ? req.body.money : undefined;
    const resources= req?.body?.resources !== 0 ? req.body.resources : undefined;
  
    if (money !=undefined){
        const setmoneyToLvlUp = gameCalcul.setmoneyToLvlUp(money);
        return res.json(setmoneyToLvlUp);}
    if(resources != undefined){
        const resources=gameCalcul.setresource(resources)
        return res.json(resources);
    }
    

  });
  

module.exports=router;