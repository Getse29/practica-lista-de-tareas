'use strict';
/* const btnDeleteTweet = document.getElementById('delete-tweet'); */
const divElement = document.querySelector('.new-tweet');
/* variables eventos */
const btnTask = document.getElementById('btn-task');
const deleteTweet = document.getElementById('trash');
/* variables elements HTML */
const alertElement = document.querySelector('.alert');
const elementHTMLEmpty = document.createElement('h2');

/* Loaded events */
addEventListener('DOMContentLoaded', () => {
  btnTask.addEventListener('click', addTweet);
  deleteTweet.addEventListener('click', trashTweet);
});

/* Create new element html p */
const createList = newElementHTML => {
  /* Create elements */
  const listHTML = document.createElement('p');
  const deleteHTML = document.createElement('i');
  const input = document.getElementById('form-task');
  /* Insert content tweet */
  listHTML.textContent = newElementHTML;
  /* Add style */
  listHTML.classList.add('new-tweet__text');
  listHTML.classList.add('delete-tweet');
  deleteHTML.classList.add('fas');
  deleteHTML.classList.add('fa-trash');
  deleteHTML.classList.add('delete-tweet');
  /* Add listHtml content */
  listHTML.appendChild(deleteHTML);
  resetForm(input);
  /* Return element */
  return divElement.appendChild(listHTML);
};

/* Add alert Element html empty */
const inputTextNull = () => {
  elementHTMLEmpty.textContent = 'Lista Vacia, ingrese un tweet';
  elementHTMLEmpty.classList.add('empty-html');
  return alertElement.appendChild(elementHTMLEmpty);
};

/* Remove alert element html empty */
const removeAlert = () => {
  return (alertElement.textContent = '');
};

/* reset form */
const resetForm = elementInput => {
  return elementInput.reset();
};

/* Event send tweet */
function addTweet(e) {
  const listInput = document.getElementById('send-list');
  /* Condition input */
  if (listInput.value === '') inputTextNull();
  else createList(listInput.value);
  /* Condicion alert Alert */
  if (listInput.value) removeAlert();
  e.preventDefault();
}

/* Delete Tweet */
function trashTweet(e) {
  if (e.target.classList[1]) e.target.remove();
}
