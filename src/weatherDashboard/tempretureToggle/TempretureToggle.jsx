import React from 'react';

function TemperatureToggle({ unit, onToggle }) {
  return (
    <div className='d-flex justify-content-center mt-4'>
      <button style={{
          fontSize: '1rem',
          fontWeight: 'bold',
          backgroundColor: '#03A9F4',
          border: '4px solid #fff',
          color: '#fff'
        }} onClick={() => onToggle(unit === 'C' ? 'F' : 'C')}>
        Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
}

export default TemperatureToggle;
