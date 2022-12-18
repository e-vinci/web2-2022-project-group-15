// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import { getAuthenticatedUser, isAuthenticated } from '../../utils/auths';
import logo from '../../img/logo.png';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  renderNavbar();
};

function renderNavbar() {
  const authenticatedUser = getAuthenticatedUser();
  const logoPicture = new Image();
  logoPicture.src = logo;
  
  const anonymousUserNavbar = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
        <div class="container-fluid">
          <a class="navbar-brand" href="#">DataMiner</a>
          <img src="${logoPicture.src}">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" data-uri="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/login" id="linkGame">Game</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/login">Login page</a>
              </li>  
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/register">Register page</a>
              </li>                           
            </ul>
          </div>
        </div>
      </nav>
  `;

  const authenticatedUserNavbar = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">DataMiner</a>
        <img src="${logoPicture.src}">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" data-uri="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-uri="/game">Game</a>
            </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/logout">Logout</a>
              </li>    
              <li class="nav-item">
                <a class="nav-link disabled" href="#">${authenticatedUser?.username}</a>
            </li>           
          </ul>
        </div>
      </div>
    </nav>
  `;


  const navbarWrapper = document.querySelector('#navbarWrapper');
  navbarWrapper.innerHTML = isAuthenticated() ? authenticatedUserNavbar : anonymousUserNavbar;
}


export default Navbar;
