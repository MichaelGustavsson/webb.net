// 1. Importera react och react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// Importera externa komponenter
import VehicleDetail from './VehicleDetail';

// Importera våra css filer.
import './App.css';

// 2. Skapa en komponent
// Skapar en funktion baserad komponent
const App = () => {
  return (
    <div className='container'>
      <VehicleDetail
        make='Fiat'
        model='500'
        modelYear='2019'
        mileage='25000'
        value='135000'
        image='./img/car1.jpg'
      />
      <VehicleDetail
        make='Kia'
        model='Ceed'
        modelYear='2017'
        mileage='35000'
        value='145000'
        image='./img/car4.jpg'
      />
      <VehicleDetail
        make='Volvo'
        model='XC60'
        modelYear='2019'
        mileage='85000'
        value='245000'
        image='./img/car11.jpg'
      />
    </div>
  );
};

// 3. Presentera komponenten i webbläsaren
// Första argumentet är komponentens namn som ett element.
// Andra argumentet är placering i index.html sidan.
ReactDOM.render(<App />, document.querySelector('#app'));
