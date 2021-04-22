// 1. Importera react och react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// 2. Skapa en komponent
const App = () => {
  return <div>Det fungerar!</div>;
};

// 3. Presentera komponenten i index.html filens element med id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));
