import { clearPage, renderPageTitle } from '../../utils/render';

const LoginPage = () => {
  clearPage();
  renderPageTitle('Login');
  renderRegisterForm();
};

function renderRegisterForm() {
  const main = document.querySelector('main');
  const form = document.createElement('form');
  form.className = 'col-4 offset-4 ';
  const username = document.createElement('input');
  username.type = 'text';
  username.id = 'username';
  username.placeholder = 'username';
  username.required = true;
  username.className = 'form-group row  mb-3 ';
  const password = document.createElement('input');
  password.type = 'password';
  password.id = 'password';
  password.required = true;
  password.placeholder = 'password';
  password.className = 'form-group row  mb-4 ';
  const submit = document.createElement('input');
  submit.value = 'Login';
  submit.type = 'submit';
  submit.className = 'btn btn-outline-primary borderbouton';
  form.appendChild(username);
  form.appendChild(password);
  form.appendChild(submit);
  main.appendChild(form);
}

export default LoginPage;