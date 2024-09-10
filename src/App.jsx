import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

function App() {
  const [weather, setWeather] = useState({});
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "575e56010fae56f60acaed7377bf0929";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const weatherData = await axios.get(url);
    setWeather(weatherData.data);
  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade"/>
      <button onClick={searchCity}>Buscar</button>

      <WeatherInfo 
        weather={weather}
      />
    </div>
  )
}

export default App
