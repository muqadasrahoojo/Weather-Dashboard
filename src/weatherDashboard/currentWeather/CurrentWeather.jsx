// import React from 'react';

// function CurrentWeather({ weather, unit }) {
//   if (!weather) return null;

//   return (
//     <div>
//       <h2>Current Weather</h2>
//       <p>Temperature: {weather.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
//       <p>Humidity: {weather.humidity}%</p>
//       <p>Wind: {weather.wind} {unit === 'metric' ? 'km/h' : 'mph'}</p>
//     </div>
//   );
// }

// export default CurrentWeather;
import React from 'react';

function CurrentWeather({ weather, unit }) {
  if (!weather) return null;

  return (
    <div
      className="p-4 text-center p-4 mx-5 fw-bold"
      

      style={{
        maxWidth: '400px',
        margin: '0 auto',
        borderRadius: '8px',
        color: '#333',
        fontWeight: '500',
        backgroundColor: 'rgba(53, 186, 235, 1.0'
      }}
    >
      <h2 className="h2 mb-3">Current Weather</h2>

      <div>
        <p className="mb-2">
          <strong>Temperature:</strong> {weather.temp}°{unit === 'metric' ? 'C' : 'F'}
        </p>
        <p className="mb-2">
          <strong>Humidity:</strong> {weather.humidity}%
        </p>
        <p className="mb-2">
          <strong>Wind:</strong> {weather.wind} {unit === 'metric' ? 'km/h' : 'mph'}
        </p>
      </div>

    </div>
  );
}

export default CurrentWeather;
