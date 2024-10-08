import { Weather } from "../../hooks/useWeather";
import { formatTemperatue } from "../../utils";
import styles from './WeatherDetail.module.css';

type WeatherDetailProps = {
    weather: Weather;
}

export default function WeatherDetail({weather} : WeatherDetailProps) {
    return (
        <div className={styles.container}>
            <h2>Clima de: {weather.name}</h2>
            <p className={styles.current}>{ formatTemperatue(weather.main.temp)}&deg;C</p>
            <div className={styles.temperatures}>
                <p>Min: <span>{ formatTemperatue(weather.main.temp_min)}&deg;C</span></p>
                <p>Max: <span>{ formatTemperatue(weather.main.temp_max)}&deg;C</span></p>
            </div>
        </div>
    )
}
