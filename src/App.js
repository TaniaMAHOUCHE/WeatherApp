import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {

  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = 'b4b018d477333626e0f4611080b5b72f'

  const getWeather = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setLocation('');
        console.log(result);
      })
    }
  }

  return (
    <div className="App">
        <div className="container">
          <input
            type="text"
            placeholder="Saisissez le nom de la ville..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={getWeather}
          />
          { 
            (weather.cod === 200) ?
              (
                <div>
                    <div>
                      <h2>Météo du jour</h2>
                      {weather.name}
                    </div>
                    <div>
                      {Math.round(weather.main.temp)} °C
                    </div>
                    <div>
                      {
                        weather.weather[0].main === "Clear" ? "☀️":"☁️"
                      }
                    </div>
                </div>
              )
            :
              (
                <div>
                  city not found{location}
               </div>
              )
          }

        </div>
    </div>
  );
}

export default App;
