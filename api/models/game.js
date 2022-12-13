const unlocks = [5,10,15];

let  resources=[0,0,0,0];

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

function getlvl(){
    return lvl;
}

function getnbreressource1( number){
    if(number <1 || number>4){throw Error}else{return resources[number];}
}

function resource(number){
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
  
  
