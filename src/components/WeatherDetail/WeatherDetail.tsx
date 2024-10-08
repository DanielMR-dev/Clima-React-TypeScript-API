import { Weather } from "../../hooks/useWeather";
import { formatTemperatue } from "../../utils";

type WeatherDetailProps = {
    weather: Weather;
}

export default function WeatherDetail({weather} : WeatherDetailProps) {
    return (
        <div>
            <h2>Clima de: {weather.name}</h2>
            <p>{ formatTemperatue(weather.main.temp)}&deg;C</p>
            <div>
                <p>Min: <span>{ formatTemperatue(weather.main.temp_min)}&deg;C</span></p>
                <p>Max: <span>{ formatTemperatue(weather.main.temp_max)}&deg;C</span></p>
            </div>
        </div>
    )
}
