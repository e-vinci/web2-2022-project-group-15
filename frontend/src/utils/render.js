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
  const main = document.querySelector('main');
  const errorMessage = document.createElement('p');
  errorMessage.innerText = error
  main.appendChild(error);
}

export { clearPage, renderPageTitle, renderError };
