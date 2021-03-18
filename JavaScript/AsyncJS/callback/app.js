const addUserButton = document.querySelector('#btnText').addEventListener('click', addUserButtonClicked);

const displayView = document.querySelector('#display');
const spinner = document.querySelector('#spinner');

let users = [
  {firstName: 'Michael', lastName: 'Gustavsson'},
  {firstName: 'Ove', lastName: 'Olsson'},
  {firstName: 'Karin', lastName: 'Nilsson'}
];

function addUser(user, callback) {
    setTimeout(() => {
      users.push(user);
      callback();
    }, 1000);
}

function getUsers() {
  setTimeout(() => {
    let output = '';
    users.forEach(user => {
      output += `<div>${user.firstName} ${user.lastName}</div>`;
    });

    spinner.classList.add('hidden');
    displayView.innerHTML = output;
  }, 1000);
}

function addUserButtonClicked() {
  spinner.classList.remove('hidden');
  addUser({firstName: 'Anna', lastName: 'Eriksson'}, getUsers);
}