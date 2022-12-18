import { setAuthenticatedUser } from '../../utils/auths';
import { clearPage, renderError } from '../../utils/render';
import Navigate from '../Router/Navigate';
import Navbar from '../Navbar/Navbar';

const LoginPage = () => {
  clearPage();
  renderRegisterForm();
};

function renderRegisterForm() {
  const main = document.querySelector('main');
  const form = document.createElement('form');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const div4 = document.createElement('div');
  const div5 = document.createElement('div');
  const div6 = document.createElement('div');
  const div7 = document.createElement('div');
  const div8 = document.createElement('div');
  const div9 = document.createElement('divError');
  const div10 = document.createElement('div');
  const div11 = document.createElement('div');
  const div12 = document.createElement('div');
  const div13 = document.createElement('div');
  const div14 = document.createElement('div');

  main.className = 'col-4 offset-4'
  form.className = 'container mt-5 border border-dark rounded justify-content-center';
  div1.className = 'd-flex justify-content-md-center mt-5';
  div2.className = 'row justify-content-center';
  div3.className = 'col-lg-6';
  div4.className = 'form';
  div5.className = 'form-group row  mb-3';
  div6.className = 'col-12';
  div7.className = 'form';
  div8.className = 'form-group row  mb-4';
  div9.className = 'col-12';
  div10.className = 'row justify-content-center';
  div11.className = 'col-3';
  div12.className = 'd-flex justify-content-md-center mt-5';
  div13.className = 'row justify-content-center';
  div14.className = 'col-3';
  

  const username = document.createElement('input');
  username.type = 'text';
  username.id = 'username';
  username.placeholder = 'ex: jdr';
  username.required = true;
  username.className = 'form-control form-control-sm';

  const password = document.createElement('input');
  password.type = 'password';
  password.id = 'password';
  password.required = true;
  password.placeholder = 'ex: 1234';
  password.className = 'form-control form-control-sm';

  const submit = document.createElement('input');
  submit.value = 'Login';
  submit.type = 'submit';
  submit.className = 'btn btn-outline-primary borderbouton mb-3';

  const titlePage = document.createElement('h3');
  titlePage.innerText = 'Login';
  
  const usernameTitle = document.createElement('h5');
  usernameTitle.innerText = 'Username';

  const passwordTitle = document.createElement('h5');
  passwordTitle.innerText = 'Password';

  const registerPage = document.createElement('a');
  registerPage.href = '/register';
  registerPage.className = 'btn btn-outline-primary borderbouton';
  registerPage.innerText = 'Register';

  const noAccount = document.createElement('h5');
  noAccount.innerText = 'No Account ? Register you!'

  const space = document.createElement('hr');


  main.appendChild(form);
  form.appendChild(div1);
  div1.appendChild(titlePage);
  form.appendChild(space);
  form.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div5.appendChild(usernameTitle);
  div5.appendChild(div6);
  div6.appendChild(username);
  div3.appendChild(div7);
  div7.appendChild(div8);
  div8.appendChild(passwordTitle);
  div8.appendChild(div9);
  div9.appendChild(password);
  form.appendChild(div10);
  div10.appendChild(div11);
  div11.appendChild(submit);
  main.appendChild(div12);
  div12.appendChild(noAccount);
  main.appendChild(div13);
  div13.appendChild(div14);
  div14.appendChild(registerPage);
  
  form.addEventListener('submit', onLogin);
}

async function onLogin(e) {
  e.preventDefault();
  // ajouté
  
  // original
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

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

  const response = await fetch('/api/auths/login', options);

  if (!response.ok) {
    renderError('login or password incorrect')
    throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  }

  const authenticatedUser = await response.json();

  console.log('Authenticated user : ', authenticatedUser);

  setAuthenticatedUser(authenticatedUser);

  Navbar();

  Navigate('/');
}


export default LoginPage;