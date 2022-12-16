const { json } = require('express');
const path = require('node:path');

const jsonDbPath = path.join(__dirname, '/../data/players.json');
const { parse, serialize } = require('../utils/json');

let resources;
let lvl;
let money;
let moneyToLvlUp;

const defaultPlayer = [
  {
    playerId: 1,

    resources: [0, 0, 0, 0,],
    lvl: 0,
    money: 0,
    moneyToLvlUp: 0,
  },
];

function creatResources(id){

  const list = parse(jsonDbPath, defaultPlayer);

  const player = {
    playerId: id,

    resources: [0, 0, 0, 0,],
    lvl: 0,
    money: 0,
    moneyToLvlUp: 0,
  }
  
  list.push(player);
  serialize(jsonDbPath, list);
}

// let money = rc1*5 + rc2*20 + rc3*100 + rc4*250;

function setmoneyToLvlUp(number){
    moneyToLvlUp=number
}

function getmoneyToLvlUp(){
    return moneyToLvlUp;
}

function getmoney(){
    return money
}

 

function getnbreressource( number){
    if(number <1 || number>4){
      throw Error
    }
    else{
      return resources[number];
    }
}

function setresource(number){
  resources[number] += 1;
}
  
  
function upHisLvl(){
  if(money >= moneyToLvlUp){
    money -= moneyToLvlUp;
    lvl += 1;
    increase();  
  }
}
  
function increase(){
  moneyToLvlUp = lvl*150.5;
  moneyToLvlUp=Math.round(moneyToLvlUp);
}
  
  
module.exports ={
  creatResources,
  setmoneyToLvlUp,
  getmoneyToLvlUp,
  getnbreressource,
  setresource,
  upHisLvl,
  getmoney
}