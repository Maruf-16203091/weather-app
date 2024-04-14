import React, { useState } from 'react';
import ThreeDCardDemo from './WeatherComponent';
import "./WeatherCard.css"
import "./App.css"

const App: React.FC = () => {
  const [location, setLocation] = useState<string>('Berlin');

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header bg-gray-800 text-white py-4">
        <h1 className="text-2xl font-bold">My Weather App</h1>
        <div className="mt-4">
          <label htmlFor="location" className="block text-sm font-medium">
          
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="Berlin">Berlin</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Munich">Munich</option>
            <option value="Frankfurt">Frankfurt</option>
        
          </select>
        </div>
      </header>
      <main className="p-4">
        <ThreeDCardDemo location={location} />
      </main>
    </div>
  );
};

export default App;
