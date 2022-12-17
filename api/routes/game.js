const express = require('express');

const {
    getCoal,
    getIron,
    getSilver,
    getGold,
    getmoney,
    getLvl,
    getPriceLvlUp,

    setCoal,
    setIron,
    setSilver,
    setGold,

    sellResources,

    lvlUp,
    } = require('../models/game');

const { getId } = require('../models/users');

const router = express.Router();

// COAL

router.post('/getCoal',(req,res)=>{
    console.log("route");
    const result = getCoal(getId());
    return res.json(result);
});

router.post('/setCoal', () =>{
    setCoal(getId());
});

// IRON

router.post('/getIron',(req,res)=>{
    const result = getIron(getId());
    return res.json(result);
});

router.post('/setIron', () =>{
    setIron(getId());
});

// SILVER

router.post('/getSilver',(req,res)=>{
    const result = getSilver(getId());
    return res.json(result);
});

router.post('/setSilver', ()=>{
    setSilver(getId());
});

// GOLD

router.post('/getGold',(req,res)=>{
    const result = getGold(getId());
    return res.json(result);
}); 

router.post('/setGold', ()=>{
    setGold(getId());
});

// MONEY

router.post('/getMoney',(req,res)=>{
    const result = getmoney(getId());
    return res.json(result);
}); 

router.post('/sellResources',()=>{
    sellResources(getId());
});

// PRICE

router.post('/getPriceLvlUp',(req,res)=>{
    const result = getPriceLvlUp(getId());
    return res.json(result);
});

// LVL

router.post('/getLvl',(req,res)=>{
    const result = getLvl(getId());
    return res.json(result);
});

router.post('/lvlUp',()=>{
    lvlUp(getId());
});

module.exports=router;