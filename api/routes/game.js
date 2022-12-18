const express = require('express');

const {
    getPlayer,

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

router.post('/setCoal', () =>{
    setCoal(getId());
});

// IRON

router.post('/setIron', () =>{
    setIron(getId());
});

// SILVER

router.post('/setSilver', ()=>{
    setSilver(getId());
});

// GOLD 

router.post('/setGold', ()=>{
    setGold(getId());
});

// MONEY

router.post('/sellResources',()=>{
    sellResources(getId());
});

// LVL

router.post('/lvlUp',()=>{
    lvlUp(getId());
});

// PLAYER

router.post('/getPlayer', (req, res) => {
    const player = getPlayer(getId());
    return res.json(player);
})

module.exports = router;