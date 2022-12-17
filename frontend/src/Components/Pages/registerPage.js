import { setAuthenticatedUser } from '../../utils/auths';
import { clearPage, renderError, renderPageTitle } from '../../utils/render';
import Navigate from '../Router/Navigate';
import Navbar from '../Navbar/Navbar';

const RegisterPage = () => {
  clearPage();
  renderPageTitle('Register');
  renderRegisterForm();
};

function renderRegisterForm() {
  const main = document.querySelector('main');
  const form = document.createElement('form');

  form.className = 'col-6 offset-3 ';

  const username = document.createElement('input');

  username.type = 'text';
  username.id = 'username';
  username.placeholder = 'username'
  username.className = 'form-group row ms-5 mt-3 ';
  
  username.required = true;

  const loginMail = document.createElement('input');

  loginMail.type = 'text';
  loginMail.id = 'loginMail';
  loginMail.placeholder = 'loginMail';
  loginMail.className = 'form-group row ms-5 mt-3 mb-3';

  loginMail.required = true;

  const password = document.createElement('input');

  password.type = 'password';
  password.id = 'password';
  password.placeholder = 'password';
  password.className = 'form-group row ms-5 mt-3 ';

  password.required = true;

  const password2 = document.createElement('input');

  password2.type = 'password';
  password2.id = 'password2';
  password2.placeholder = 'password2';
  password2.className = 'form-group row ms-5 mt-3 mb-3'; 

  password2.required = true;
  
  const submit = document.createElement('input');

  submit.value = 'Register';
  submit.type = 'submit';
  submit.className = 'btn btn-outline-primary borderbouton';

  form.appendChild(username);
  form.appendChild(loginMail);
  form.appendChild(password);
  form.appendChild(password2);
  form.appendChild(submit);

  main.appendChild(form);
  
  form.addEventListener('submit', onRegister);
}

async function onRegister(e) {
  e.preventDefault();
  // ajouté
  // const loginMail = document.querySelector('#loginMail').value;
  const password2 = document.querySelector('#password2').value;
  // original
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  // méthode pour conparer 2 mots de passes
  if (password !== password2) {
    renderError('Passwords do not match');
    return ;
  };

  const options = {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('/api/auths/register', options);

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const authenticatedUser = await response.json();

  console.log('Newly registered & authenticated user : ', authenticatedUser);

  setAuthenticatedUser(authenticatedUser);

  Navbar();

  Navigate('/');
}

export default RegisterPage;
