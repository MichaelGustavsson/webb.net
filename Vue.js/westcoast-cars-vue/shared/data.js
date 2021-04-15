import * as axios from 'axios';

const loadVehicles = async function() {
  try {
    const response = await axios.get(
      'https://westcoast-cars-api.azurewebsites.net/api/vehicle/list'
    );

    let data = parseData(response);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const parseData = (response) => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const data = { loadVehicles };
