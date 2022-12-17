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

function creatPlayer(id){

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

function getmoneyToLvlUp(){
    return moneyToLvlUp;
}

function getmoney(){
    return money
}

function getCoal(id){
  console.log("i'm in");

  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  if(playerFound === undefined){
    throw Error;
  }

  return playerFound.coal
}

function getIron(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  return playerFound.iron
}

function getSilver(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  return playerFound.silver
}

function getGold(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  return playerFound.gold
}


function setCoal(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  coal = playerFound.coal;
  coal += 1;
  playerFound.coal = coal;
}

function setIron(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  iron = playerFound.iron;
  iron += 1;
  playerFound.iron = iron;
}

function setSilver(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  silver = playerFound.silver;
  silver += 1;
  playerFound.silver = silver;
}

function setGold(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  gold = playerFound.gold;
  gold += 1;
  playerFound.gold = gold;
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
  creatPlayer,
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
  getmoney
}