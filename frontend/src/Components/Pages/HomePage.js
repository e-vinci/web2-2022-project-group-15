import { clearPage, renderPageTitle } from '../../utils/render';

const HomePage = () => {
  clearPage();
  renderPageTitle('Home');

  const main = document.querySelector('main');
  
  const intro = document.createElement('div');
  const list = document.createElement('ul');
  const game = document.createElement('div');

  intro.innerHTML = stringIntro();
  list.innerHTML = stringList();
  game.innerHTML = stringGame();

  main.appendChild(intro);
  main.appendChild(list);
  main.appendChild(game);
};

function stringIntro(){
  let string = "welcome to our brand new game \"[insert name]\",";
  string += "it's a small project we have donne in a feuw weeks for classe.<br/>";
  string += "we are 4 devoppeurs :";

  return string;
}

function stringList(){
  let string = "-Gauthier Collard <br/>";
  string += "-Lotfi Mouayna <br/>";
  string += "-Nicolas Heymans <br/>";
  string += "-Julien \"[insert name]\"";

  return string;
}

function stringGame(){
  let string = "In or game you play as a guy who want to have a lot of money, "
  string += "but he has nothing else then a old pickax. "
  string += "so he goes with it in his garden and min in hoppe of finding somme use full ore ..."

  return string;
}

export default HomePage;
