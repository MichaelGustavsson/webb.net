// 1. Importera react och react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// Importera våra css filer.
import './App.css';

// 2. Skapa en komponent
// Skapar en funktion baserad komponent
const App = () => {
  return (
    <div className='container'>
      <div className='card-container'>
        <div className='card'>
          <img src='./img/car1.jpg' alt='bil 1' className='card-img-top' />
          <div className='card-body'>
            <h2 className='card-title'>Volvo</h2>
            <div className='card-body-content'>
              <div>
                <label>Model</label>
                <span>V90</span>
              </div>
              <div>
                <label>Model Year</label>
                <span>2017</span>
              </div>
              <div>
                <label>Mileage</label>
                <span>25000</span>
              </div>
              <div>
                <label>Value</label>
                <span>235000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Presentera komponenten i webbläsaren
// Första argumentet är komponentens namn som ett element.
// Andra argumentet är placering i index.html sidan.
ReactDOM.render(<App />, document.querySelector('#app'));
