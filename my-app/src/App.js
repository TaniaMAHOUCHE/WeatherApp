import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');

const apiKey = 'b4b018d477333626e0f4611080b5b72f'

const getWeather = (e) => {
  if (e.key === 'Enter') {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setCity('');
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
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={getWeather}
          />
          { 
            typeof weather.main != 'undefined' ?
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
                  Météo introuvable {city}
               </div>
              )
          }

        </div>
    </div>
  );
}

export default App;
