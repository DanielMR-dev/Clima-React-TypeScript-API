import axios from 'axios';
import { SearchType } from '../types';

export default function useWeather() {

    const fetchWeather = async (search: SearchType) => {

        const appId = 'e05b61a09fb34f75cf94442551e06e92';
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;

            const {data} = await axios.get(geoUrl); // Se hace desctrocturing a la variable usando {data} para ingresar a data en el llamado de la API

        } catch (error) {
            console.log(error);
        }
    }

    return {
        fetchWeather
    };
}