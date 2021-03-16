const addUserButton = document.querySelector('#btnText').addEventListener('click', addUserButtonClicked);

const displayView = document.querySelector('#display');
const spinner = document.querySelector('#spinner');

let users = [
  {firstName: 'Michael', lastName: 'Gustavsson'},
  {firstName: 'Ove', lastName: 'Olsson'},
  {firstName: 'Karin', lastName: 'Nilsson'}
];

function addUser(user) {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      users.push(user);

      //Fejka ett fel. Ändra error till true
      const error = false;
      if(error){
        reject('Det gick lite fel här!');
        spinner.classList.add('hidden');
      }
      resolve();
    }, 1000);
  });
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
  addUser({firstName: 'Anna', lastName: 'Eriksson'})
    .then(getUsers)
    .catch(err => alert(err));
}