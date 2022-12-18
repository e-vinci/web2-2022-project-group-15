import { clearPage, renderPageTitle } from '../../utils/render';

// backend variables

const unlockIron = 5;
const unlockSilver = 10;
const unlockGold = 15;

// frontend

const GamePage = async () => {

  clearPage();
  renderPageTitle('Game');

  allInfo();
};

function allInfo(){
  const main = document.querySelector('main');
  const grid = document.createElement('div');

  // PLAYER STATS
  const player = getThePlayer();

  const playerLvl = player.lvl;
  const playerCoal = player.coal;
  const playerIron = player.iron;
  const playerSilver = player.silver;
  const playerGold = player.gold;
  const playerMoney = player.money;

  // LVL
  const showLvl = document.createElement('div');

  showLvl.innerHTML = `Level ${playerLvl}`; 
  showLvl.id = 'showlvl'

  const lvlUpButton = document.createElement('button');
  lvlUpButton.innerText = 'Level Up';
  lvlUpButton.id = 'lvlUpButton'
  lvlUpButton.className = 'btn btn-outline-primary borderbouton mx-2';
  lvlUpButton.addEventListener("click", ()=>{upHisLvl()});

  const showMoney = document.createElement('div');
  showMoney.innerHTML = `You have ${playerMoney} $`; 
  showMoney.id = 'showMoney';

  const sellButton = document.createElement('button');
  sellButton.innerText = 'Sell all';
  sellButton.id = 'sellButton'
  sellButton.className = 'btn btn-outline-primary borderbouton mx-2';
  lvlUpButton.addEventListener("click", ()=>{sellAll()});

  const statsRow = document.createElement('div');
  statsRow.className = 'd-flex p-2';
  statsRow.appendChild(showLvl);
  statsRow.appendChild(lvlUpButton);
  statsRow.appendChild(showMoney);
  statsRow.appendChild(sellButton)

  grid.appendChild(statsRow);
  
  const genCoal = document.createElement('button');
  genCoal.innerText = 'Mine';
  genCoal.id = 'genCoal'
  genCoal.className = 'btn btn-outline-primary borderbouton';
  genCoal.addEventListener("click", ()=>{addCoal()});
  
  const showCoal = document.createElement('div');
  showCoal.innerHTML = `You have ${playerCoal} coal, it has a value of ${playerCoal*5} $`; 
  showCoal.id = 'showCoal'
  showCoal.className = 'p-2 bg-light border'
  
  const coalRow= document.createElement('div');
  coalRow.className = 'd-flex p-2';
  coalRow.appendChild(showCoal);
  coalRow.appendChild(genCoal);
  grid.appendChild(coalRow);

  if(unlockIron <= playerLvl){
    const genIron = document.createElement('button');
    genIron.innerText = 'Mine';
    genIron.id = 'genIron'
    genIron.className = 'btn btn-outline-primary borderbouton';
    genIron.addEventListener("click", ()=>{addIron()});
  
    const showIron = document.createElement('div');
    showIron.innerHTML = `You have ${playerIron} iron, it has a value of ${playerIron*20}$`; 
    showIron.id = 'showIron'
    showIron.className = 'p-2 bg-light border'

    const ironRow = document.createElement('div');
    ironRow.className = 'd-flex p-2';
    ironRow.appendChild(showIron);
    ironRow.appendChild(genIron);
    grid.appendChild(ironRow);
  }
  if(unlockSilver <= playerLvl){
    const genSilver = document.createElement('button');
    genSilver.innerText = 'Mine';
    genSilver.id = 'genSilver'
    genSilver.className = 'btn btn-outline-primary borderbouton';
    genSilver.addEventListener("click", ()=>{addSilver()});
  
    const showSilver = document.createElement('div');
    showSilver.innerHTML = `You have ${playerSilver} silver, it has a value of ${playerSilver*100}$`; 
    showSilver.id = 'showSilver'
    showSilver.className = 'p-2 bg-light border'

    const silverRow= document.createElement('div');
    silverRow.className = 'd-flex p-2';
    silverRow.appendChild(showSilver);
    silverRow.appendChild(genSilver);
    grid.appendChild(silverRow);
  }
  if(unlockGold <= playerLvl){
    const genGold = document.createElement('button');
    genGold.innerText = 'Mine';
    genGold.id = 'genGold'
    genGold.className = 'btn btn-outline-primary borderbouton';
    genGold.addEventListener("click", ()=>{addGold()});
    
    const showGold = document.createElement('div');
    showGold.innerHTML = `You have ${playerGold} gold, it has a value of ${playerGold*250}$`;
    showGold.id = 'showGold' 
    showGold.className = 'p-2 bg-light border'

    const goldRow= document.createElement('div');
    goldRow.className = 'd-inline-flex p-2';
    goldRow.appendChild(showGold);
    goldRow.appendChild(genGold);
    grid.appendChild(goldRow);
  }
  
  main.appendChild(grid);
}

async function getThePlayer(){

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const jsonRespons = await fetch('/api/game/getPlayer', options);
  const response = await jsonRespons.json();

  return response;
};

// LVL UP
async function upHisLvl(){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await fetch('/api/game/lvlUp', options);
  GamePage();
}

// SELL
async function sellAll(){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await fetch('/api/game/sellResources', options);
  GamePage();
}

// ADD 1 COAL
async function addCoal(){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await fetch('/api/game/setCoal', options);
  GamePage();
}

// ADD 1 IRON
async function addIron(){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await fetch('/api/game/setIron', options);
  GamePage();
}

// ADD 1 SILVER
async function addSilver(){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await fetch('/api/game/setSilver', options);
  GamePage();
}

// ADD 1 GOLD
async function addGold(){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await fetch('/api/game/setGold', options);
  GamePage();
}

export default GamePage;
