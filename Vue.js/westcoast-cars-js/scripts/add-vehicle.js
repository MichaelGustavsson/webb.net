const regNoField = document.querySelector('#regNoField');
const makeField = document.querySelector('#makeField');
const modelField = document.querySelector('#modelField');
const modelYearField = document.querySelector('#modelYearField');
const mileageField = document.querySelector('#mileageField');
const valueField = document.querySelector('#valueField');
const saveButton = document
  .querySelector('#save')
  .addEventListener('click', save);

async function save(e) {
  e.preventDefault();

  const vehicleList = await loadVehicles();
  let id = vehicleList.length + 1;

  let vehicle = {
    description: 'Missing description',
    id: id,
    imageUrl: '/assets/img/car1.jpg',
    make: makeField.value,
    mileage: mileageField.value,
    model: modelField.value,
    modelName: `${makeField.value} ${modelField.value}`,
    modelYear: modelYearField.value,
    name: `${makeField.value} ${modelField.value}`,
    registrationNumber: regNoField.value,
    value: valueField.value,
  };

  console.log(JSON.stringify(vehicle));
  //await saveVehicle(vehicle);
  // console.log(vehicle);
  const response = await fetch('http://localhost:3000/vehicles', {
    method: 'POST',
    body: JSON.stringify(vehicle),
  });

  console.log(response);
  // return await response.json();
}
