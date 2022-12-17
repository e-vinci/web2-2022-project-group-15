const path = require('node:path');
const add = require('lodash.add');

const jsonDbPath = path.join(__dirname, '/../data/players.json');
const { parse, serialize } = require('../utils/json');

const priceCoal = 5;
const priceIron = 20;
const priceSilver = 100;
const priceGold = 250;

// CONSTRUCTOR PLAYEUR

const defaultPlayer = [
  {
    playerId: 1,

    lvl: 0,

    coal: 0,
    iron: 0,
    silver: 0,
    gold: 0,

    money: 0,
    moneyLvlUp: 10,
  },
];

function creatPlayer(id){
  const list = parse(jsonDbPath, defaultPlayer);

  const player = {
    playerId: id,

    lvl: 0,

    coal: 0,
    iron: 0,
    silver: 0,
    gold: 0,

    money: 0,
    moneyLvlUp: 10,
  };
  
  list.push(player);
  serialize(jsonDbPath, list);
}

// COAL

function getCoal(id){
  const playerFound = getPlayer(id);
  return playerFound.coal;
}

function setCoal(id){
  const playerFound = getPlayer(id);

  console.log(playerFound.coal);

  let resource = playerFound.coal;
  resource= add(resource,1);
  playerFound.coal = resource;

  console.log(playerFound.coal);
}

// IRON

function getIron(id){
  const playerFound = getPlayer(id);
  return playerFound.iron;
}

function setIron(id){
  const playerFound = getPlayer(id);

  let resource = playerFound.iron;
  resource = add(resource,1);
  playerFound.iron = resource;
}

// SILVER

function getSilver(id){
  const playerFound = getPlayer(id);
  return playerFound.silver;
}

function setSilver(id){
  const playerFound = getPlayer(id);

  let resource = playerFound.silver;
  resource += 1;
  playerFound.silver = resource;
}

// GOLD

function getGold(id){
  const playerFound = getPlayer(id);
  return playerFound.gold;
}

function setGold(id){
  const playerFound = getPlayer(id);

  let resource = playerFound.gold;
  resource += 1;
  playerFound.gold = resource;
}

// MONEY

function getmoney(id){
  const playerFound = getPlayer(id);
  return playerFound.money;
}

function sellResources(id){
  const playerFound = getPlayer(id);

  let totalMoney = playerFound.money;

  totalMoney += playerFound.coal * priceCoal;
  totalMoney += playerFound.iron * priceIron;
  totalMoney += playerFound.silver * priceSilver;
  totalMoney += playerFound.gold * priceGold;

  playerFound.coal = 0;
  playerFound.iron = 0;
  playerFound.silver = 0;
  playerFound.gold = 0;

  playerFound.money = totalMoney;
}

// LVL

function getLvl(id){
  const playerFound = getPlayer(id);
  return playerFound.lvl;
}

function lvlUp(id){
  const playerFound = getPlayer(id);

  let newLvl = playerFound.lvl;

  const newMoney = playerFound.money;
  const cost = playerFound.moneyLvlUp;
  
  if(cost < newMoney){
    playerFound.money = newMoney-cost;

    newLvl +=1;
    playerFound.lvl = newLvl;

    setPriceLvlUp(id);
  }
}

// PRICE LVL

function setPriceLvlUp(id){
  const playerFound = getPlayer(id);

  const price = playerFound.moneyLvlUp;
  const newPrice = 1.5 * price + 5;
  playerFound.moneyLvlUp = newPrice;
}

function getPriceLvlUp(id){
  const playerFound = getPlayer(id);
  return playerFound.moneyLvlUp;
}

// PLAYER  

function getPlayer(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  if(playerFound === undefined){
    throw Error;
  }
  return playerFound;
}
  
module.exports ={
  creatPlayer,

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
}