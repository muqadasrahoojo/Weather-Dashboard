import React from 'react';

function WeatherForecast({ forecast, unit }) {
  const convertTemp = (temp) => (unit === 'C' ? temp : (temp * 1.8 + 32).toFixed(2));

  return (
    <div className='text-center'>
    <div>
    <h2 style={{color: ''}}>5-Day Forecast</h2>
    </div>
    <ul className='p-4 mx-5 fw-bold' style={{ listStyleType: 'none', padding: 0, backgroundColor: 'rgba(53, 186, 235, 1.0 )' }}>
      {forecast.map((temp, index) => (
        <li key={index} style={{ textDecoration: 'none' }}>
          Day {index + 1}: {convertTemp(temp)}°{unit}
        </li>
      ))}
    </ul>
  </div>
  
  );
}

export default WeatherForecast;

