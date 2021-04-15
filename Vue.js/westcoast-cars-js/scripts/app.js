const displayView = document.querySelector('#display');
const detailsView = document.querySelector('#details');

async function listVehicles() {
  let data = await loadVehicles();
  createDisplay(data);
  const buttonDetails = document.querySelectorAll('button');

  buttonDetails.forEach((btn) => {
    let id = btn.getAttribute('id');
    btn.addEventListener('click', function () {
      displayDetails(id);
    });
  });
}

function createDisplay(vehicles) {
  vehicles.forEach((v) => {
    displayView.insertAdjacentHTML(
      'beforeend',
      `<div>
          <p>${v.make} ${v.model}</p>
          <p>${v.modelName}</p>
          <button id="${v.id}" class="btn">Details</button>
        </div>
      `
    );
  });
}

const displayDetails = async function (id) {
  const vehicle = await getVehicle(id);
  createDetailsDisplay(vehicle);
};

function createDetailsDisplay(vehicle) {
  let html = '';

  html = `
    <div>
      <h2>${vehicle.name}</h2>
      <p>RegNo: <span>${vehicle.registrationNumber}</span></p>
      <p>Model year: <span>${vehicle.modelYear}</span></p>
      <p>Mileage: <span>${vehicle.mileage}</span></p>
      <p>Price: <span>${vehicle.value}</span></p>
      <p>Description: <span>${vehicle.description ?? ''}</span></p>
    </div>
    <img src="${vehicle.imageUrl}" alt="${vehicle.name}" class="image-small"/>
  `;

  detailsView.innerHTML = '';
  detailsView.innerHTML = html;
}

listVehicles();
