const clearPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
};

const renderPageTitle = (title) => {
  if (!title) return;
  const main = document.querySelector('main');
  const pageTitle = document.createElement('h4');
  pageTitle.innerText = title;
  main.appendChild(pageTitle);
};

const renderError = (error) => {
  const div = document.querySelector('divError');
  const errorMessage = document.createElement('p');
  errorMessage.style = 'color: red';
  errorMessage.innerText = error
  div.appendChild(errorMessage);
}

export { clearPage, renderPageTitle, renderError };
