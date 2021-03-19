'use strict';

const baseUrl = 'https://westcoast-cars-api.azurewebsites.net/api/vehicle/';

//elements.
const getDataButton = document.querySelector('#getData').addEventListener('click', getDataClicked);
const displayView = document.querySelector('#display');

function getDataClicked(){
  fetchData().then(response => generateHtml(response))
    .catch(err => console.log(err));
}

function generateHtml(data){
  let html = '';

  data.forEach(function (vehicle) {
    html += `<div>${vehicle.registrationNumber} <span>${vehicle.make} ${vehicle.model}</span></div>`;
  });
  displayView.innerHTML = html;
}

async function fetchData(){
  const url = `${baseUrl}list`

  const response = await fetch(url);

  if(!response.ok) throw new Error(response.statusText);

  return response.json();
}