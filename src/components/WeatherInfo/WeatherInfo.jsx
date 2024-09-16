import "./WeatherInfo.css"

function WeatherInfo({ weather }) {
    return (
        <div className="weather-container">
            <h2>{weather.name}</h2>
            <div className="weather-info">
                <img 
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
                    alt="Clima"
                />
                <p className="temperature">{Math.round(weather.main.temp)}&#176;C</p>
            </div>

            <p className="description">{weather.weather[0].description}</p>

            <div className="details">
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}&#176;C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
        </div>
    )
}

export default WeatherInfo;