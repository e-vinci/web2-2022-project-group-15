const path = require('node:path');

const jsonDbPath = path.join(__dirname, '/../data/players.json');
const { parse, serialize } = require('../utils/json');

let coal;
let iron;
let silver;
let gold;

let lvl;
let money;
let moneyToLvlUp;

const defaultPlayer = [
  {
    playerId: 1,

    coal: 0,
    iron: 0,
    silver: 0,
    gold: 0,

    lvl: 0,
    money: 0,
    moneyToLvlUp: 0,
  },
];

function creatResources(id){

  const list = parse(jsonDbPath, defaultPlayer);

  const player = {
    playerId: id,

    coal: 0,
    iron: 0,
    silver: 0,
    gold: 0,

    lvl: 0,
    money: 0,
    moneyToLvlUp: 0,
  }
  
  list.push(player);
  serialize(jsonDbPath, list);
}

// let money = rc1*5 + rc2*20 + rc3*100 + rc4*250;

function setmoneyToLvlUp(id, number){


    moneyToLvlUp=number
}

function getmoneyToLvlUp(id){
    return moneyToLvlUp;
}

function getmoney(id){
    return money
}

 
/*
function getnbreressource(id, number){
  console.log("i'm in");
  const list = parse(jsonDbPath, defaultPlayer);
  
  const playerFound = list.find((player) => player.id === id);

  if(number === "1"){
    console.log("coal");
    return playerFound.coal
  }

  if(number === 2){
    return playerFound.iron
  }

  if(number === 3){
    return playerFound.silver
  }

  if(number === 4){
    return playerFound.Gold
  }
  throw Error;
}
*/

function getCoal(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.id === id);

  return playerFound.coal
}

function getIron(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.id === id);

  return playerFound.iron
}

function getSilver(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.id === id);

  return playerFound.silver
}

function getGold(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.id === id);

  return playerFound.gold
}


function setCoal(id){
  
}

function setIron(id){
  
}

function setSilver(id){
  
}

function setGolde(id){
  
}
  
  
function upHisLvl(id){
  if(money >= moneyToLvlUp){
    money -= moneyToLvlUp;
    lvl += 1;
    increase();  
  }
}
  
function increase(id){
  moneyToLvlUp = lvl*150.5;
  moneyToLvlUp=Math.round(moneyToLvlUp);
}
  
  
module.exports ={
  creatResources,
  setmoneyToLvlUp,
  getmoneyToLvlUp,
  getCoal,
  getIron,
  getSilver,
  getGold,
  setCoal,
  setIron,
  setSilver,
  setGolde,
  upHisLvl,
  getmoney
}