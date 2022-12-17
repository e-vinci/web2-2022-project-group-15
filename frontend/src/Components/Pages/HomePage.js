import { clearPage, renderPageTitle } from '../../utils/render';

const HomePage = () => {
  clearPage();
  renderPageTitle('Home');

  const main = document.querySelector('main');
  
  const intro = document.createElement('div');
  const list = document.createElement('div');
  const game = document.createElement('div');

  intro.innerHTML = stringIntro();
  intro.className = "m-3";
  list.innerHTML = stringList();
  list.className = "m-3";
  game.innerHTML = stringGame();
  game.className = "m-3";

  main.appendChild(intro);
  main.appendChild(list);
  main.appendChild(game);
};

function stringIntro(){
  let string = "Welcome to our brand new game : DataMiner !!!";
  string += " It's a small project we did in a few weeks for our JavaScript class.<br/>";
  string += "We are 4 developpers :";

  return string;
}

function stringList(){
  let string =  "-Gauthier Collard <br/>";
  string +=     "-Nicolas Heymans <br/>";
  string +=     "-Julien de Jacquier de Rosée <br/>";
  string +=     "-Lotfi Mouayna <br/>";

  return string;
}

function stringGame(){
  let string = "In our game you play a guy who wants to be rich, "
  string += "but he has nothing else than an old pickaxe. "
  string += "So he starts digging a hole in his garden in hope of finding something valuable ..."

  return string;
}

export default HomePage;
