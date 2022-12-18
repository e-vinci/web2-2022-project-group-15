import { setAuthenticatedUser } from '../../utils/auths';
import { clearPage, renderError } from '../../utils/render';
import Navigate from '../Router/Navigate';
import Navbar from '../Navbar/Navbar';

const RegisterPage = () => {
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
  const div9 = document.createElement('div');
  const div10 = document.createElement('div');
  const div11 = document.createElement('div');
  const div12 = document.createElement('div');
  const div13 = document.createElement('divError');
  const div14 = document.createElement('div');
  const div15 = document.createElement('div');
  const div16 = document.createElement('div');

  main.className = 'col-6 offset-3';
  form.className = 'container mt-5 border border-dark rounded';
  div1.className = 'd-flex justify-content-md-center mt-5';
  div2.className = 'row';
  div3.className = 'col-lg-6';
  div4.className = 'form';
  div5.className = 'form-group row ms-5 mt-3';
  div6.className = 'col-sm-10';
  div7.className = 'form-group row ms-5 mt-3 mb-3';
  div8.className = 'col-sm-10';
  div9.className = 'col';
  div10.className = 'form-group row ms-5 mt-3';
  div11.className = 'col-sm-10';
  div12.className = 'form-group row ms-5 mt-3 mb-3';
  div13.className = 'col-sm-10';
  div14.className = 'row';
  div15.className = 'col-3 offset-5 mt-5';
  div16.className = 'form-check';


  const username = document.createElement('input');
  username.type = 'text';
  username.id = 'username';
  username.placeholder = 'ex: abc'
  username.className = 'form-control form-control-sm';
  username.required = true;

  const loginMail = document.createElement('input');
  loginMail.type = 'text';
  loginMail.id = 'loginMail';
  loginMail.placeholder = 'ex: abc@abc.com';
  loginMail.className = 'form-control form-control-sm';
  loginMail.required = true;

  const password = document.createElement('input');
  password.type = 'password';
  password.id = 'password';
  password.placeholder = 'ex: 1234';
  password.className = 'form-control form-control-sm';
  password.required = true;

  const password2 = document.createElement('input');
  password2.type = 'password';
  password2.id = 'password2';
  password2.placeholder = 'same password';
  password2.className = 'form-control form-control-sm'; 
  password2.required = true;
  
  const submit = document.createElement('input');
  submit.value = 'Register';
  submit.type = 'submit';
  submit.className = 'btn btn-outline-primary borderbouton mb-4';

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.id = 'exampleCheck';
  check.className = 'form-check-input';
  check.required = true;
  
  const messageCheck = document.createElement('label');
  messageCheck.className = 'form-check-label';
  messageCheck.innerText = 'By submitting this form, I accept that this website uses my data within the strict framework of our services while respecting the ';
  
  const linkCheck = document.createElement('a');
  linkCheck.href = 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN'
  linkCheck.innerText = 'GDPR';

  const titlePage = document.createElement('h3');
  titlePage.innerText = 'Register';

  const usernameTitle = document.createElement('h5');
  usernameTitle.innerText = 'Username';

  const loginMailTitle = document.createElement('h5');
  loginMailTitle.innerText = 'Mail adress';

  const pass1 = document.createElement('h5');
  pass1.innerText = 'Password';

  const pass2 = document.createElement('h5');
  pass2.innerText = 'confirm password';

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
  div4.appendChild(div7);
  div7.appendChild(loginMailTitle);
  div7.appendChild(div8);
  div8.appendChild(loginMail);
  div2.appendChild(div9);
  div9.appendChild(div10);
  div10.appendChild(pass1);
  div10.appendChild(div11);
  div11.appendChild(password);
  div9.appendChild(div12);
  div12.appendChild(pass2);
  div12.appendChild(div13);
  div13.appendChild(password2);
  // div2.appendChild(div16);
  div3.appendChild(check);
  div2.appendChild(messageCheck);
  messageCheck.appendChild(linkCheck);
  div2.appendChild(div14);
  div14.appendChild(div15);
  div15.appendChild(submit);
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
