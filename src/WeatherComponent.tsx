import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

interface WeatherCardProps {
  location: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ location }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const apiKey = 'd0b7abc2b79441ef8e993054241303';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&lang=de`;

    axios.get(apiUrl)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
      });
  }, [location]);

  return (
    <div className="weather-card-container">
      {weatherData && (
        <div className="weather-card" style={{ backgroundImage: `url('./assets')` }}>
          <div className="weather-info">
            <div className="location">{weatherData.location.name}</div>
            <div className="temp">{weatherData.current.temp_c}°C</div>
            <div className="condition">{weatherData.current.condition.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
