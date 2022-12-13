import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import RegisterPage from '../Pages/registerPage';
import LoginPage from '../Pages/loginPage';
import Logout from '../logout/logout';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/register': RegisterPage,
  '/login': LoginPage,
  '/logout': Logout

};

export default routes;
