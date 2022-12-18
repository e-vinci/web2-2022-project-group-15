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

    lvl: 20,

    coal: 200,
    iron: 100,
    silver: 50,
    gold: 25,

    money: 14250,
    moneyLvlUp: 66495,
  },
];

function creatPlayer(id){
  const list = parse(jsonDbPath, defaultPlayer);

  const player = {
    playerId: id,

    lvl: 1,

    coal: 0,
    iron: 0,
    silver: 0,
    gold: 0,

    money: 0,
    moneyLvlUp: 20,
  };
  
  list.push(player);
  serialize(jsonDbPath, list);
}

// COAL

function setCoal(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  if(playerFound === undefined){
    throw Error;
  }

  let resource = playerFound.coal;
  resource= add(resource,1);
  playerFound.coal = resource;

  serialize(jsonDbPath, list);
}

// IRON

function setIron(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  if(playerFound === undefined){
    throw Error;
  }

  let resource = playerFound.iron;
  resource = add(resource,1);
  playerFound.iron = resource;

  serialize(jsonDbPath, list);
}

// SILVER

function setSilver(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  if(playerFound === undefined){
    throw Error;
  }

  let resource = playerFound.silver;
  resource = add(resource,1);
  playerFound.silver = resource;

  serialize(jsonDbPath, list);
}

// GOLD

function setGold(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  if(playerFound === undefined){
    throw Error;
  }

  let resource = playerFound.gold;
  resource = add(resource,1);
  playerFound.gold = resource;

  serialize(jsonDbPath, list);
}

// MONEY

function sellResources(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  if(playerFound === undefined){
    throw Error;
  }

  let totalMoney = playerFound.money;

  totalMoney = add(totalMoney, playerFound.coal * priceCoal);
  totalMoney = add(totalMoney, playerFound.iron * priceIron);
  totalMoney = add(totalMoney, playerFound.silver * priceSilver);
  totalMoney = add(totalMoney, playerFound.gold * priceGold);

  playerFound.coal = 0;
  playerFound.iron = 0;
  playerFound.silver = 0;
  playerFound.gold = 0;

  playerFound.money = totalMoney;

  serialize(jsonDbPath, list);
}

// LVL

function lvlUp(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  if(playerFound === undefined){
    throw Error;
  }

  let newLvl = playerFound.lvl;

  const newMoney = playerFound.money;
  const cost = playerFound.moneyLvlUp;
  
  if(cost < newMoney){
    playerFound.money = newMoney-cost;

    newLvl = add(newLvl, 1);
    playerFound.lvl = newLvl;

    setPriceLvlUp(id);

    serialize(jsonDbPath, list);
  }
}

// PRICE LVL

function setPriceLvlUp(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  if(playerFound === undefined){
    throw Error;
  }

  const price = playerFound.moneyLvlUp;
  const newPrice = Math.round(add( 1.5 * price, 5));
  playerFound.moneyLvlUp = newPrice;

  serialize(jsonDbPath, list);
}

// PLAYER

function getPlayer(id){
  const list = parse(jsonDbPath, defaultPlayer);
  const playerFound = list.find((player) => player.playerId === id);

  if(playerFound === undefined){
    console.log("playerFound = undefined");
  }
    console.log("found player =", playerFound);
  return playerFound;
}
  
module.exports ={
  creatPlayer,

  getPlayer,

  setCoal,
  setIron,
  setSilver,
  setGold,

  sellResources,

  lvlUp,
}