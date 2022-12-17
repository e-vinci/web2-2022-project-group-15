import { clearPage, renderPageTitle } from '../../utils/render';

let coal;
let iron;
let silver;
let gold;

// backend variables

const unlockIron = 5;
const unlockSilver = 10;
const unlockGold = 15;

const lvl = 16;

// frontend

const GamePage = async () => {

  clearPage();
  renderPageTitle('Game');

  allInfo();

};

function allInfo(){
  const main = document.querySelector('main');
  const grid = document.createElement('div');

  const showLvl = document.createElement('div');

  // showLvl.innerHTML = `Level ${lvl}`; 
  showLvl.id = 'showlvl'

  const lvlUpButton = document.createElement('button');
  lvlUpButton.innerText = 'Level Up';
  lvlUpButton.id = 'lvlUpButton'
  lvlUpButton.className = 'btn btn-outline-primary borderbouton';
  // lvlUpButton.addEventListener("click", gameCalcul.upHisLvl());

  const showMoney = document.createElement('div');
  // showMoney.innerHTML = `you have in total ${money}$`; 
  showMoney.id = 'showMoney';

  const statsRow = document.createElement('div');
  statsRow.className = 'd-flex p-2';
  statsRow.appendChild(showLvl);
  statsRow.appendChild(lvlUpButton);
  statsRow.appendChild(showMoney);

  grid.appendChild(statsRow);

  coal = getValueOfCoal();
  
  const genCoal = document.createElement('button');
  genCoal.innerText = 'Mine';
  genCoal.id = 'genCoal'
  genCoal.className = 'btn btn-outline-primary borderbouton';
  // generateur1.addEventListener("click", ()=>{resource(1)});
  
  const showCoal = document.createElement('div');
  showCoal.innerHTML = `You have ${coal} coal, it has a value of ${coal*5} $`; 
  showCoal.id = 'showCoal'
  showCoal.className = 'p-2 bg-light border'
  
  const coalRow= document.createElement('div');
  coalRow.className = 'd-flex p-2';
  coalRow.appendChild(showCoal);
  coalRow.appendChild(genCoal);
  grid.appendChild(coalRow);

  if(unlockIron <= lvl){
    const genIron = document.createElement('button');
    genIron.innerText = 'Mine';
    genIron.id = 'genIron'
    genIron.className = 'btn btn-outline-primary borderbouton';
    // generateur2.addEventListener("click", ()=>{resource(2)});
  
    const showIron = document.createElement('div');
    showIron.innerHTML = `You have ${iron} iron, it has a value of ${iron*20}$`; 
    showIron.id = 'showIron'
    showIron.className = 'p-2 bg-light border'

    const ironRow = document.createElement('div');
    ironRow.className = 'd-flex p-2';
    ironRow.appendChild(showIron);
    ironRow.appendChild(genIron);
    grid.appendChild(ironRow);
  }
  if(unlockSilver <= lvl){
    const genSilver = document.createElement('button');
    genSilver.innerText = 'Mine';
    genSilver.id = 'genSilver'
    genSilver.className = 'btn btn-outline-primary borderbouton';
    // generateur3.addEventListener("click", ()=>{resource(3)});
  
    const showSilver = document.createElement('div');
    showSilver.innerHTML = `You have ${silver} silver, it has a value of ${silver*100}$`; 
    showSilver.id = 'showSilver'
    showSilver.className = 'p-2 bg-light border'

    const silverRow= document.createElement('div');
    silverRow.className = 'd-flex p-2';
    silverRow.appendChild(showSilver);
    silverRow.appendChild(genSilver);
    grid.appendChild(silverRow);
  }
  if(unlockGold <= lvl){
    const genGold = document.createElement('button');
    genGold.innerText = 'Mine';
    genGold.id = 'genGold'
    genGold.className = 'btn btn-outline-primary borderbouton';
    // generateur4.addEventListener("click", ()=>{resource(4)});
    
    const showGold = document.createElement('div');
    showGold.innerHTML = `You have ${gold} gold, it has a value of ${gold*250}$`;
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

async function getValueOfCoal(){

  const options = {
    method: 'POST',
    body: JSON.stringify({
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  coal = await fetch('/api/routes/game/getCoal', options);
  console.log(coal);
  return coal;
};
  
  // iron = await fetch('/api/routes/game/getIron', options);
 
  // silver = await fetch('/api/routes/game/getSilver', options);
  
  // gold = await fetch('/api/routes/game/getGold', options);

export default GamePage;
