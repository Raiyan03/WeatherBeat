"use client"
import { MdGpsFixed, MdLocationPin, MdSearch  } from "react-icons/md";
import { useSearchContext } from "./searchContext";
import { useEffect, useState } from "react";
import { getWeatherByCity } from "../lib/getWeatherByCity";
import getCityName from "../lib/getCityName";

const Search = () => {
    const { city, setCity, setLat, setLon} = useSearchContext();
    const [inputCity, setInputCity] = useState(null)
    const getLocation = async () => {
        navigator.geolocation.getCurrentPosition((position)=> {

            setLat(l => position.coords.latitude);
            setLon(l => position.coords.longitude);
        }, (error) => {
            console.log(error);
        });
    }

    const handleChange = (e) => {
        setInputCity(e.target.value);
    }

    const handleSubmit = (e) => {
        setCity(inputCity);
    }

    return (
        <div className=" flex items-center gap-2">
            <MdGpsFixed className=" active:text-[#87CEEB] cursor-pointer" onClick={getLocation} />
            <div className="flex items-center">
                <MdLocationPin />
                <p className="text-[var(--textSoft)]" >{city ? city : null}</p>
            </div>
            <form action={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="City name" name="City" className=" bg-[#2e374a] p-1 border-none focus: outline-none rounded-[0.5rem]" />
                <button type="submit">
                </button>
            </form>
        </div>
    )
}

export default Search;