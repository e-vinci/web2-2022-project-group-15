let lvl = 0;
const unlock2 = 5;
const unlock3 = 10;
const unlock4 = 15;
let money=0
let  resource=[0,0,0,0]
let moneyToLvlUp=0

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

function getlvl(){
    return lvl;
}

function getnbreressource1( number){
    if(resource <1 || resource>4){throw Error}else{return resource[number];}
}

function resource(number){
      resource[number] += 1;
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
  
  
