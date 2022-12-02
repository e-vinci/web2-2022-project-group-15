import { clearPage, renderPageTitle } from '../../utils/render';

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
  username.placeholder = 'username';
  username.required = true;
  username.className = 'form-group row ms-5 mt-3 ';
  const loginMail = document.createElement('input');
  loginMail.type = 'text';
  loginMail.id = 'loginMail';
  loginMail.placeholder = 'loginMail';
  loginMail.required = true;
  loginMail.className = 'form-group row ms-5 mt-3 mb-3';
  const password = document.createElement('input');
  password.type = 'password';
  password.id = 'password';
  password.required = true;
  password.placeholder = 'password';
  password.className = 'form-group row ms-5 mt-3 ';
  const password2 = document.createElement('input');
  password2.type = 'password';
  password2.id = 'password';
  password2.required = true;
  password2.placeholder = 'password';
  password2.className = 'form-group row ms-5 mt-3 mb-3'; 
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
}

export default RegisterPage;