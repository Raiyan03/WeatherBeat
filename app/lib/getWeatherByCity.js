import axios from 'axios';
import { getWeather } from './getWeather';

export const getWeatherByCity = async (city) => {
    try{
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`);
        console.log(response.data);
        const { lat, lon } = response.data[0];
        console.log(lat);
        console.log(lon);
        const responseWeather = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`);
        console.log(responseWeather.data);
        return responseWeather.data;
        
    }catch{
            console.log('Error fetching weather data');
    }
}
