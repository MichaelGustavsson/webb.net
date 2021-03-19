'use strict';

const baseUrl = 'https://westcoast-cars-api.azurewebsites.net/api/vehicle/';

//elements.
const getDataButton = document.querySelector('#getData').addEventListener('click', getDataClicked);
const displayView = document.querySelector('#display');
const spinner = document.querySelector('.spinner');

const pageSizeInput = document.querySelector('#pageSize');
const pageInput = document.querySelector('#page');

function getDataClicked(){
  spinner.classList.remove('hidden');
  fetchData()
  .then(response => {
    generateHtml(response);
    spinner.classList.add('hidden')
  })
  .catch(err => {
    console.log(err);
    spinner.classList.add('hidden');
  });
}

function generateHtml(data){
  let html = '';

  data.forEach(function (vehicle) {
    html += `<div>${vehicle.registrationNumber} <span>${vehicle.make} ${vehicle.model}</span></div>`;
  });
  displayView.innerHTML = html;
}

async function fetchData(){  
  const pageSize = pageSizeInput.value === '' ? 10 : pageSizeInput.value;
  const page = pageInput.value === '' ? 1 : pageInput.value;
  const url = `${baseUrl}list?page=${page}&pagesize=${pageSize}`

  const response = await fetch(url);

  if(!response.ok) throw new Error(response.statusText);

  return response.json();
}