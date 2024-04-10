import axios from 'axios';

export const getWeather = async (lat, lon) => {
    try{
        console.log("fetching weather for " + lat + " " + lon );
        console.log(process.env.NEXT_PUBLIC_WEATHER_KEY);
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`);
        return response.data;
    } 
    catch{
        console.log('Error fetching weather data');
    }
}
