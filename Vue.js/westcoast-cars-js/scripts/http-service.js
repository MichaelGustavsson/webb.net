async function loadVehicles() {
  const response = await fetch('http://localhost:3000/vehicles');
  const data = await response.json();
  console.log(data);
  return data;
}

async function getVehicle(id) {
  const response = await fetch(`http://localhost:3000/vehicles/${id}`);
  return await response.json();
}

async function saveVehicle(vehicle) {
  console.log(vehicle);
  const response = await fetch('http://localhost:3000/vehicles', {
    method: 'POST',
    body: JSON.stringify(vehicle),
  });

  console.log(response);
  return await response.json();
}
