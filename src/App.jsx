import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "575e56010fae56f60acaed7377bf0929";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    const weatherData = await axios.get(url);

    console.log(weatherData);
  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade"/>
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
