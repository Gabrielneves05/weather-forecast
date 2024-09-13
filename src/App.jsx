import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import WeatherInfoFiveDays from './components/WeatherInfoFiveDays/WeatherInfoFiveDays';

function App() {
  const [weather, setWeather] = useState();
  const [weatherDays, setWeatherDays] = useState();
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "575e56010fae56f60acaed7377bf0929";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const weatherData = await axios.get(url);
    const weatherFiveDays = await axios.get(urlFiveDays);

    setWeather(weatherData.data);
    setWeatherDays(weatherFiveDays.data);
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade"/>
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInfo weather={weather} />}
      {weatherDays && <WeatherInfoFiveDays weatherDays={weatherDays} /> }
    </div>
  )
}

export default App
