import { clearPage, renderPageTitle } from '../../utils/render';



// backend variables

const unlock2 = 5;
const unlock3 = 10;
const unlock4 = 15;

const lvl = 0;

let rc1 = 0;
let rc2 = 0;
let rc3 = 0;
let rc4 = 0;





// frontend

const GamePage = async () => {

  clearPage();
  renderPageTitle('Game');

  allInfo();
  const gameCalcul=await fetch('/api/models/game')
  let result=gameCalcul. getnbreressource( 1);
  const main = document.querySelector('main');
  const generateur1 = document.createElement('button');

  generateur1.innerText = 'rc1';
  generateur1.className = 'btn btn-outline-primary borderbouton';
  generateur1.addEventListener("click", ()=>{resource(1)});
  
  main.appendChild(generateur1);

  if(unlock2 <= lvl){
    const generateur2 = document.createElement('button');

    generateur2.innerText = 'rc2';
    generateur2.className = 'btn btn-outline-primary borderbouton';
    generateur2.addEventListener("click", ()=>{resource(2)});
  
    main.appendChild(generateur2);
  }

  if(unlock3 <= lvl){
    const generateur3 = document.createElement('button');

    generateur3.innerText = 'rc3';
    generateur3.className = 'btn btn-outline-primary borderbouton';
    generateur3.addEventListener("click", ()=>{resource(3)});
  
    main.appendChild(generateur3);
  }

  if(unlock4 <= lvl){
    const generateur4 = document.createElement('button');

    generateur4.innerText = 'rc4';
    generateur4.className = 'btn btn-outline-primary borderbouton';
    generateur4.addEventListener("click", ()=>{resource(4)});
  
    main.appendChild(generateur4);
  }

  const lvlUpButton = document.createElement('button');

  lvlUpButton.innerText = 'lvl up';
  lvlUpButton.className = 'btn btn-outline-primary borderbouton';
   lvlUpButton.addEventListener("click", gameCalcul.upHisLvl());
  
  main.appendChild(lvlUpButton);
};

function allInfo(){
  const main = document.querySelector('main');

  const showLvl = document.createElement('div');

  // there is a mistake 
  // showLvl.innerHTML = `you are curently level ${lvl}`; 

  main.appendChild(showLvl);

  const showRc1 = document.createElement('div');
  showRc1.innerHTML = `you have ${rc1} bananas, it has de value of ${rc1*result}$`; 

  main.appendChild(showRc1);

  if(unlock2 <= lvl){
    const showRc2 = document.createElement('div');
    showRc2.innerHTML = `you have ${rc2} apples, it has de value of ${rc2*20}$`; 

    main.appendChild(showRc2);
  }
  if(unlock3 <= lvl){
    const showRc3 = document.createElement('div');
    showRc3.innerHTML = `you have ${rc3} pineapple, it has de value of ${rc3*100}$`; 

    main.appendChild(showRc3);
  }
  if(unlock4 <= lvl){
    const showRc4 = document.createElement('div');
    showRc4.innerHTML = `you have ${rc4} kiwis, it has de value of ${rc4*250}$`; 

    main.appendChild(showRc4);
  }

  const showMoney = document.createElement('div');
  // showMoney.innerHTML = `you have in total ${money}$`; 

  main.appendChild(showMoney);
}

// backend fuctions

function resource(number){
  if(number === 1){
    rc1 += 1;
  }
  if(number === 2){
    rc2 += 1;
  }
  if(number === 3){
    rc3 += 1;
  }
  if(number === 4){
    rc4 += 1;
  }

  GamePage();
}

/*
function upHisLvl(){
  
  if(money >= 100){
    money -= 100;
    
    lvl += 1
    
  }

   GamePage();
}
*/

export default GamePage;
