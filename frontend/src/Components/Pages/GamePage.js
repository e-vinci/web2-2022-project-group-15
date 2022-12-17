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
  
  const main = document.querySelector('main');
  const genCoal = document.createElement('button');

  genCoal.innerText = 'coal';
  genCoal.id = 'genCoal'
  genCoal.className = 'btn btn-outline-primary borderbouton';
  // generateur1.addEventListener("click", ()=>{resource(1)});
  
  main.appendChild(genCoal);

  if(unlockIron <= lvl){
    const genIron = document.createElement('button');

    genIron.innerText = 'iron';
    genIron.id = 'genIron'
    genIron.className = 'btn btn-outline-primary borderbouton';
    // generateur2.addEventListener("click", ()=>{resource(2)});
  
    main.appendChild(genIron);
  }

  if(unlockSilver <= lvl){
    const genSilver = document.createElement('button');

    genSilver.innerText = 'silver';
    genSilver.id = 'genSilver'
    genSilver.className = 'btn btn-outline-primary borderbouton';
    // generateur3.addEventListener("click", ()=>{resource(3)});
  
    main.appendChild(genSilver);
  }

  if(unlockGold <= lvl){
    const genGold = document.createElement('button');

    genGold.innerText = 'gold';
    genGold.id = 'genGold'
    genGold.className = 'btn btn-outline-primary borderbouton';
    // generateur4.addEventListener("click", ()=>{resource(4)});
  
    main.appendChild(genGold);
  }

  const lvlUpButton = document.createElement('button');

  lvlUpButton.innerText = 'lvl up';
  lvlUpButton.id = 'lvlUpButton'
  lvlUpButton.className = 'btn btn-outline-primary borderbouton';
  // lvlUpButton.addEventListener("click", gameCalcul.upHisLvl());
  
  main.appendChild(lvlUpButton);
};

function allInfo(){
  const main = document.querySelector('main');

  const showLvl = document.createElement('div');

  // there is a mistake 
  // showLvl.innerHTML = `you are curently level ${lvl}`; 
  showLvl.id = 'showlvl'

  main.appendChild(showLvl);

  coal = getValueOfCoal();
  
  const showCoal = document.createElement('div');
  showCoal.innerHTML = `You have ${coal} coal, it has a value of ${coal*5} $`; 
  showCoal.id = 'showCoal'
  showCoal.className = 'p-2 bg-light border'

  main.appendChild(showCoal);

  if(unlockIron <= lvl){
    const showIron = document.createElement('div');
    showIron.innerHTML = `You have ${iron} iron, it has a value of ${iron*20}$`; 
    showIron.id = 'showIron'
    showIron.className = 'p-2 bg-light border'

    main.appendChild(showIron);
  }
  if(unlockSilver <= lvl){
    const showSilver = document.createElement('div');
    showSilver.innerHTML = `You have ${silver} silver, it has a value of ${silver*100}$`; 
    showSilver.id = 'showSilver'
    showSilver.className = 'p-2 bg-light border'

    main.appendChild(showSilver);
  }
  if(unlockGold <= lvl){
    const showGold = document.createElement('div');
    showGold.innerHTML = `You have ${gold} gold, it has a value of ${gold*250}$`;
    showGold.id = 'showGold' 
    showGold.className = 'p-2 bg-light border'

    main.appendChild(showGold);
  }

  const showMoney = document.createElement('div');
  // showMoney.innerHTML = `you have in total ${money}$`; 
  showMoney.id = 'showMoney'

  main.appendChild(showMoney);
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
