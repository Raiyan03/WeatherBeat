const getCityName = async (lat, lon) => {
    try{
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`);
        return response.data[1].name;
    } catch{
        console.log('Error fetching city name');
    }
};

export default getCityName;