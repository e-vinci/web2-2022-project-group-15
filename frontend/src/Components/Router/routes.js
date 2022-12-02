import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import RegisterPage from '../Pages/registerPage';
import LoginPage from '../Pages/loginPage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/register': RegisterPage,
  '/login': LoginPage
};

export default routes;
