const resources=[0,0,0,0];

let lvl = 0;
let money = 0;
let moneyToLvlUp = 0;

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
    if(number <1 || number>4){throw Error}else{return resources[number];}
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
  setmoneyToLvlUp,
  getmoneyToLvlUp,
  getnbreressource,
  setresource,
  upHisLvl,
  getmoney
}