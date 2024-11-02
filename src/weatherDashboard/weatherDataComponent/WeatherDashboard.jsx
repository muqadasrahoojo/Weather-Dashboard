import React, { useState } from 'react';
import CitySearch from '../searchWeather/SearrchWeather';
import TemperatureToggle from '../tempretureToggle/TempretureToggle';
import CurrentWeather from '../currentWeather/CurrentWeather';
import WeatherForecast from '../weatherForecast/WeatherForecast';
import BgImg from '../assests/Bg-Weather-pic.avif';

function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('C');

  const weatherData = {
    Khairpur: { current: { temp: 30, humidity: 60, wind: 10 }, forecast: [32, 31, 30, 29, 28] },
    Sukkur: { current: { temp: 34, humidity: 50, wind: 12 }, forecast: [33, 32, 31, 30, 29] },
    Hyderabad: { current: { temp: 35, humidity: 55, wind: 14 }, forecast: [36, 35, 34, 33, 32] },
    Hala: { current: { temp: 31, humidity: 52, wind: 11 }, forecast: [30, 29, 28, 27, 26] },
    Karachi: { current: { temp: 29, humidity: 65, wind: 15 }, forecast: [30, 29, 28, 27, 26] },
    Islamabad: { current: { temp: 29, humidity: 65, wind: 15 }, forecast: [30, 29, 28, 27, 26] },
    Peshawar: { current: { temp: 29, humidity: 65, wind: 15 }, forecast: [30, 29, 28, 27, 26] },
    Quetta: { current: { temp: 29, humidity: 65, wind: 15 }, forecast: [30, 29, 28, 27, 26] }
  };

  const currentWeather = city && weatherData[city] ? weatherData[city].current : null;
  const forecast = city && weatherData[city] ? weatherData[city].forecast : null;

  const handleCitySearch = (newCity) => setCity(newCity);
  const handleToggleUnit = (newUnit) => setUnit(newUnit);

  return (
    <div
      className="container-fluid vh-100 d-flex flex-column align-items-center"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '20px',
        
      }}
    >
      <h1 style={{ backgroundColor: '' }} className="display-4 fw-bolder mb-4 p-2 rounded-2 mt-4">Weather Dashboard</h1>

      <div className="w-50 mb-3">
        <CitySearch onSearch={handleCitySearch} />
      </div>

      <div className="w-50 mb-3">
        <TemperatureToggle unit={unit} onToggle={handleToggleUnit} />
      </div>

      {currentWeather && (
        <div
          className="shadow mb-3 p-4"
          style={{
           backgroundColor: ' rgba(53, 186, 235, 0.2)',
            color: '#333',
            borderRadius: '8px',
            width: '30%'
          }}
        >
          <CurrentWeather weather={currentWeather} unit={unit} />
        </div>
      )}

      {forecast && (
        <div
          className="shadow p-4 mt-3"
          style={{
            backgroundColor: 'rgba(53, 186, 235, 0.2)',
            color: '#333',
            borderRadius: '8px',
            width: '30%'
          }}
        >
          <WeatherForecast forecast={forecast} unit={unit} />
        </div>
      )}
    </div>
  );
}

export default WeatherDashboard;
