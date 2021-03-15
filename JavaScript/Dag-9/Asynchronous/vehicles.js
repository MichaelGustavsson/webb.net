const btn = document.querySelector('#btn');

const getVehicles = function () {
  fetch('http://localhost:3000/vehicles')
    .then((response) => response.json())
    .then((data) => console.log(data));
};

btn.addEventListener('click', function () {
  getVehicles();
});
