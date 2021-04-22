// 1. Importera react och react-dom
import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

function getDate() {
  return new Date().toLocaleDateString();
}

const getTime = () => {
  return new Date().toLocaleTimeString();
};

// 2. Skapa en komponent
const App = () => {
  return (
    <div>
      <div>Datum</div>
      <h4 className='date'>{getDate()}</h4>
      <div>Aktuell tid</div>
      <h4 className='time'>{getTime()}</h4>
    </div>
  );
};

// 3. Presentera komponenten i index.html filens element med id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));
