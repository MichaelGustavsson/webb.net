// 1. Importera React.
import React from 'react';

function demoFunc(make) {
  return `You got ${make}`;
}
// 2. Skapa komponenten.
const VehicleDetail = (props) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <img src={props.image} alt='bil 1' className='card-img-top' />
        <div className='card-body'>
          <h2 className='card-title'>{demoFunc(props.make)}</h2>
          <div className='card-body-content'>
            <div>
              <label>Model</label>
              <span>{props.model}</span>
            </div>
            <div>
              <label>Model Year</label>
              <span>{props.modelYear}</span>
            </div>
            <div>
              <label>Mileage</label>
              <span>{props.mileage}</span>
            </div>
            <div>
              <label>Value</label>
              <span>{props.value}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Exportera komponenten
export default VehicleDetail;
